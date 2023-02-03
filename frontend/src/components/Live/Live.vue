<template>
    <h2>요약</h2>
    <div class="summaryBox">
      <dl>
        <dt>{{recent_db}}dB</dt>
        <dd>최근 소음</dd>
        <dd>가장 최근</dd>
      </dl>
      <dl>
        <dt>{{ caution_length }}개</dt>
        <dd>주의</dd>
        <dd>전체 기간 동안</dd>
      </dl>
      <dl>
        <dt>{{ warning_length }}개</dt>
        <dd>경고</dd>
        <dd>전체 기간 동안</dd>
      </dl>
      <dl>
        <dt>{{avg_db}}dB</dt>
        <dd>평균 소음</dd>
        <dd>전체 기간 동안</dd>
      </dl>
    </div>
  
    <div class="wrap">
      <div class="wrapBox">
        <h3>주의</h3>
        <div class="cautionBox">
          <ul>
            <li>d_result</li>
            <li>accuracy</li>
            <li>decibel</li>
            <li>building</li>
            <li>unit</li>
            <li>date</li>
            <li>time</li>
            <li>status</li>
          </ul>
          <ul v-for="caution in caution_list" v-bind:key="caution">
            <li>{{ caution.detection_result}}</li>
            <li>{{ caution.accuracy }}</li>
            <li>{{ caution.decibel }}</li>
            <li>{{ caution.building }}동</li>
            <li>{{ caution.unit }}호</li>
            <li>{{ caution.date }}</li>
            <li>{{ caution.time }}</li>
            <li>{{ caution.state }}</li>
          </ul>
        </div>
      </div>

      <div class="wrapBox">
        <h3>경고</h3>
        <div class="warningBox">
          <ul>
            <li>d_result</li>
            <li>accuracy</li>
            <li>decibel</li>
            <li>building</li>
            <li>unit</li>
            <li>date</li>
            <li>time</li>
            <li>status</li>
          </ul>
          <ul v-for="warning in warning_list" v-bind:key="warning">
            <li>{{ warning.detection_result}}</li>
            <li>{{ warning.accuracy }}</li>
            <li>{{ warning.decibel }}</li>
            <li>{{ warning.building }}동</li>
            <li>{{ warning.unit }}호</li>
            <li>{{ warning.date }}</li>
            <li>{{ warning.time }}</li>
            <li>{{ warning.state }}</li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";

  export default {
    name: 'HelloWorld',
    data() {
      return {
        warning_list: {
          id: "",
          detection_result: "",
          accuracy: "",
          decibel: "",
          building: "",
          unit: "",
          date: "",
          time: "",
          state: ""
        },
        caution_list: {
          id: "",
          detection_result: "",
          accuracy: "",
          decibel: "",
          building: "",
          unit: "",
          date: "",
          time: "",
          state: ""
        },
        warning_length: null,
        caution_length: null,
        avg_db: "",
        recent_db: ""
      }
    },
    created() {
      this.req_caution();
      this.req_warning();
      this.req_avg();
    },
    methods: {
      async req_caution() {
        try {
          let caution = await axios.get('http://localhost:3000/ai/get_caution_list');
          this.caution_list = caution.data;
          this.caution_length = caution.data.length
          console.log(caution.data);
        } catch {
          console.log("실패");
        }
      },
      async req_warning() {
        try {
          let warning = await axios.get('http://localhost:3000/ai/get_warning_list');
          this.warning_list = warning.data;
          this.warning_length = warning.data.length
          console.log(warning.data);
        } catch {
          console.log("실패");
        }
      },
      async req_avg() {
        try {
          let avg = await axios.get('http://localhost:3000/ai/get_avg_db');
          console.log(avg.data)
          let sum = 0
          for (let i = 0; i < avg.data.length; i++) {
            sum += Number(avg.data[i]['decibel']);
          }
          this.avg_db = (sum / avg.data.length).toFixed();
          this.recent_db = avg.data[0]['decibel'];
        } catch {
          console.log("실패");
        }
      }
    }


  }
  </script>
  
  <style scoped>
  h2 {
    margin: 2% 0 0 5%;
    font-size: 25px;
  }

  h3 {
    margin: 5% 0 0 12%;
    font-size: 25px;
  }
  
  .summaryBox {
    width: 800px;
    height: 160px;
    margin: 1% 0 0 5%;
    background: #FFFFFF;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.16);
    transition : all ease 1.5s;
  }

  .summaryBox:hover,
  .cautionBox:hover,
  .warningBox:hover {
    transition : all ease 1.5s;
    transform: scale(1.05);
  }
  
  .summaryBox dl {
    width: 200px;
    height: 100px;
    float: left;
    text-align: left;
    margin-top: 20px;
  }
  
  .summaryBox dl dt,
  .summaryBox dl dd {
    margin-left: 50px;
  }
  
  .summaryBox dl dt {
    margin-top: 20px;
    margin-bottom: 12px;
    font-size: 30px;
    font-weight: bold;
  }
  
  .summaryBox dl dd:first-of-type {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 8px;
  }
  
  .summaryBox dl dd:nth-of-type(2) {
    font-size: 15px;
  }

  .wrap {
    width: 100%;
    height: 70vh;
  }
  .wrapBox {
    float: left;
    margin-right: 2%;
  }

  .cautionBox {
    width: 800px;
    height: 450px;
    margin: 2.5% 0 0 12%;
    background: #FFFFFF;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.16);
    transition : all ease 1.5s;
    overflow-y: auto;
  }

  .warningBox {
    width: 800px;
    height: 450px;
    margin: 2.5% 0 0 12%;
    background: #FFFFFF;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.16);
    transition : all ease 1.5s;
    overflow-y: auto;
  }

  .cautionBox ul,
  .warningBox ul {
    width: 100%;
    list-style: none;
  }

  .cautionBox ul li,
  .warningBox ul li {
    float: left;
    width: 100px;
    text-align: center;
    padding: 2% 0 0 0;
  }
  
  .cautionBox ul:first-of-type,
  .warningBox ul:first-of-type {
    font-weight: bold;
  }
  
  </style>
  