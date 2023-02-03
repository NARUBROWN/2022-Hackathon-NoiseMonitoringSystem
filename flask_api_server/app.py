from flask import Flask, request
import numpy as np
import pandas as pd
import json
import librosa
import librosa.display
import matplotlib.pyplot as plt
from sklearn import preprocessing
from keras.models import load_model
import PIL
import requests
import datetime as dt

app = Flask(__name__)


def ai(file):
    image_dir = file
    model_dir = "Asset/model.h5"
    csv_dir = "Asset/image_dir.csv"

    images = None

    loaded_model = load_model(model_dir)
    image_df = pd.read_csv(csv_dir)
    le = preprocessing.LabelEncoder()
    le.fit(image_df.Label)
    image = PIL.Image.open(image_dir).crop((136, 44, 972, 314)).convert('RGB').resize((150, 50))
    image = np.expand_dims(np.array(image, dtype=int), axis=0)
    images = image if images is None else np.append(images, image, axis=0)
    cropped_image = np.array(images) / 255
    pairs = list(zip(le.classes_, loaded_model.predict(cropped_image)[0]))
    vul, num = zip(sorted(pairs, key=lambda student: student[1], reverse=True)[0])

    data = [int(np.array([np.argmax(loaded_model.predict(cropped_image))])), int(num[0] * 100)]

    return data


@app.route('/')
def main():
    return '안녕하세요 AI api-server 입니다.'


@app.route('/post/get-wav', methods=['POST'])
def get_wav():
    files = request.files.getlist('file')
    file_location = './sound/' + files[0].filename
    files[0].save(file_location)
    print("요청이 들어왔습니다.")

    date_info = dt.datetime.now()
    now_date = str(date_info.year) + "-" + str(date_info.month) + "-" + str(date_info.day)
    now_time = str(date_info.hour) + ":" + str(date_info.minute) + ":" + str(date_info.second)

    ai_result = ai(file_location)

    data = {
        'ai_result': ai_result[0],
        'accuracy': ai_result[1],
        'decibel': request.form['sound_level'],
        'building': request.form['building'],
        'unit': request.form['unit'],
        "date": now_date,
        'time': now_time
    }

    print(data)

    print(ai(file_location))

    requests.post('http://localhost:3000/ai/insert-result', data=data)

    return data


if __name__ == '__main__':
    app.run()
