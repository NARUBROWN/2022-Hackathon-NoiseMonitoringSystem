const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "1q2w3e4r!",
    database: 'hackathon'
});

connection.connect();

let insert_result = (req, res) => {
    const data_list = [
        '가구 끄는 소리', '강아지 짓는 소리', '골프 연습장의 타구음', '공 굴리는 소리',
        '등 하원 아이들 떠드는 소리', '런닝머신 위에서 뛰는 소리', '망치질 소리', '문 여닫는 소리',
        '바이올린 연주 소리', '샤워할 때 물 소리', '세탁기 소리',
        '소리 없음', '식기세척기 소리', '이륜차가 빠르게 주행하는 소리', '자동차가 빠르게 주행하는 소리',
        '에어컨 실외기 소리', '진공 청소기 소리', '피아노 연주소리', '화장실 물 내리는 소리', '발 걸음 소리'
    ];

    let ai_result = req.body.ai_result;
    const accuracy = req.body.accuracy;
    const decibel = req.body.decibel;
    const building = req.body.building;
    const unit = req.body.unit;
    const date = req.body.date;
    const time = req.body.time;
    let state = "caution";

    if(decibel > 60) {
        state = "warning"
    }

  connection.query(`INSERT INTO measurement_result VALUES (null, ?, ?, ?, ?, ?, ?, ?, ?)`, [data_list[ai_result], accuracy, decibel, building, unit, date, state, time], (error, result) => {
        if (error) throw error;
        res.send((result))
        console.log("[POST] 알림: measurement_result 에 데이터를 등록하였습니다.");
    });
}

let get_building_list = (req, res) => {
    connection.query(`SELECT distinct building from measurement_result order by building`, (error, result) => {
        if (error) throw error;
        res.send((result))
        console.log("get_building_list 메소드가 실행되었습니다.");
    });
}

let get_unit_list = (req, res) => {
    const building = req.params.building;
    console.log(building)
    connection.query(`SELECT distinct unit from measurement_result where building = ? order by unit ASC`, [building], (error, result) => {
        if (error) throw error;
        res.send((result))
        console.log("get_unit_list 메소드가 실행되었습니다.");
    });
}

let get_unit = (req, res) => {
    const unit = req.params.unit;
    connection.query(`SELECT * from measurement_result where unit = ? order by id desc`, [unit], (error, result) => {
        if (error) throw error;
        res.send((result))
        console.log(result);
        console.log("[POST] 알림: get_unit 메소드가 실행되었습니다.");
    });
}

let get_building_information = (req, res) => {
    connection.query(`SELECT * from building_information`, (error, result) => {
        if (error) throw error;
        res.send((result))
        console.log(result);
        console.log("[GET] 알림: get_building_information 메소드가 실행되었습니다.");
    });
}

let get_caution_list = (req, res) => {
    connection.query(`SELECT * from measurement_result where state = 'caution' order by id  desc`, (error, result) => {
        if (error) throw error;
        res.send((result))
        console.log(result);
        console.log("[GET] 알림: get_caution_list 메소드가 실행되었습니다.");
    });
}

let get_warning_list = (req, res) => {
    connection.query(`SELECT * from measurement_result where state = 'warning' order by id  desc`, (error, result) => {
        if (error) throw error;
        res.send((result))
        console.log(result);
        console.log("[GET] 알림: get_warning_list 메소드가 실행되었습니다.");
    });
}

let get_unit_caution = (req, res) => {
    const building = req.params.building;
    const unit = req.params.unit;
    connection.query(`SELECT * from measurement_result where state = 'caution' and building = ? and unit = ?`, [building, unit], (error, result) => {
        if (error) throw error;
        res.send((result))
        console.log(result);
        console.log("[GET] 알림: get_warning_list 메소드가 실행되었습니다.");
    });
}

let get_unit_warning = (req, res) => {
    const building = req.params.building;
    const unit = req.params.unit;
    connection.query(`SELECT * from measurement_result where state = 'warning' and building = ? and unit = ?`, [building, unit], (error, result) => {
        if (error) throw error;
        res.send((result))
        console.log(result);
        console.log("[GET] 알림: get_warning_list 메소드가 실행되었습니다.");
    });
}

let get_unit_avg_db = (req, res) => {
    const building = req.params.building;
    const unit = req.params.unit;
    connection.query(`SELECT decibel from measurement_result where state = 'warning' and building = ? and unit = ?`, [building, unit], (error, result) => {
        if (error) throw error;
        res.send((result))
        console.log(result);
        console.log("[GET] 알림: get_unit_avg_db 메소드가 실행되었습니다.");
    });
}

let get_avg_db = (req, res) => {
    connection.query(`SELECT decibel from measurement_result`, (error, result) => {
        if (error) throw error;
        res.send((result))
        console.log(result);
        console.log("[GET] 알림: get_avg_db 메소드가 실행되었습니다.");
    });
}

module.exports = {
    insert_result: insert_result,
    get_building_list: get_building_list,
    get_unit_list: get_unit_list,
    get_unit: get_unit,
    get_building_information: get_building_information,
    get_caution_list: get_caution_list,
    get_warning_list: get_warning_list,
    get_unit_caution: get_unit_caution,
    get_unit_warning: get_unit_warning,
    get_unit_avg_db: get_unit_avg_db,
    get_avg_db: get_avg_db


};