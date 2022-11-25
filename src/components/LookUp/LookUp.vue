<template>
  <div class="wrap">
    <div class="wrapBox">
      <h3>동</h3>
      <div class="buildingBox">
        <ul v-for="building in building_list" v-bind:key="building">
          <li @click="building_action(building.building)">{{ building.building }}동</li>
        </ul>
      </div>
    </div>

    <div class="wrapBox" v-if="unit_list_section">
      <h3>호</h3>
      <div class="numberBox">
        <ul v-for="unit in unit_list" v-bind:key="unit">
          <li @click="unit_action(unit.unit)">{{ unit.unit }}호</li>
        </ul>
      </div>
    </div>

    <div class="wrapBox" v-if="unit_section">
      <h4>세대 조회</h4>
      <div class="selectBox">
        <div><a>{{current_building}}동</a></div>
        <div><a>{{current_unit}}호</a></div>
      </div>

      <div class="summaryBox">
        <dl>
          <dt>{{ avg_db }}dB</dt>
          <dd>평균 소음</dd>
          <dd>전체 기간 동안</dd>
        </dl>
        <dl>
          <dt>{{ caution_list }}</dt>
          <dd>주의</dd>
          <dd>전체 기간 동안</dd>
        </dl>
        <dl>
          <dt>{{ warning_list }}</dt>
          <dd>경고</dd>
          <dd>전체 기간 동안</dd>
        </dl>
      </div>

      <div class="lookUpBox">
        <ul>
          <li>d_result</li>
          <li>accuracy</li>
          <li>decibel</li>
          <li>date</li>
          <li>time</li>
          <li>status</li>
        </ul>
        <ul v-for="unit in unit" v-bind:key="unit">
          <li>{{unit.detection_result}}</li>
          <li>{{unit.accuracy}}%</li>
          <li>{{unit.decibel}}dB</li>
          <li>{{unit.date}}</li>
          <li>{{unit.time}}</li>
          <li>{{unit.state}}</li>
        </ul>
      </div>
    </div>
  </div>
  </template>

  <script>
  import axios from "axios";

  export default {
    name: 'LookUp',
    data() {
      return {
        building_list: {
          building: "",
        },
        unit_list: {
          unit: null
        },
        unit: {
          id: null,
          detection_result: null,
          accuracy: null,
          decibel: null,
          building: null,
          unit: null,
          date: null,
          time: null,
          state: null
        },
        unit_list_section: false,
        unit_section: false,
        current_building: null,
        current_unit: null,
        caution_list: "",
        warning_list: "",
        avg_db: ""
      };
    },
    created() {
      this.req_building_list();
    },
    methods: {
      // 동 리스트 호출
      async req_building_list() {
        try {
          let building = await axios.get('http://localhost:3000/ai/get_building_list');
          this.building_list = building.data;
        } catch {
          console.log("실패");
        }
      },
      // 호 리스트 호출
      async req_unit_list(building_num) {
        try {
          let unit_list = await axios.get(`http://localhost:3000/ai/get_unit_list/${building_num}`);
          this.unit_list = unit_list.data;
        } catch {
          console.log("실패");
        }
      },
      // 호 정보 호출
      async req_unit(unit_num) {
        try {
          let unit = await axios.get(`http://localhost:3000/ai/get_unit/${unit_num}`);
          console.log(unit.data[0]);
          this.unit = unit.data;
        } catch {
          console.log("실패");
        }
      },
      async req_unit_caution() {
        try {
          console.log(this.current_unit);
          let caution = await axios.get(`http://localhost:3000/ai/get_unit_caution/${this.current_building}/${this.current_unit}`);
          console.log(caution.data, this.current_building, this.current_unit);
          this.caution_list = caution.data.length
        } catch {
          console.log("실패");
        }
      },
      async req_unit_warning() {
        try {
          let warning = await axios.get(`http://localhost:3000/ai/get_unit_warning/${this.current_building}/${this.current_unit}`);
          console.log(warning.data, this.current_building, this.current_unit);
          this.warning_list = warning.data.length
        } catch {
          console.log("실패");
        }
      },
      async req_unit_db_avg() {
        try {
          let avg = await axios.get(`http://localhost:3000/ai/get_unit_avg_db/${this.current_building}/${this.current_unit}`);
          let sum = 0
          console.log(avg.data.length);
          for (let i = 0; i < avg.data.length; i++) {
           sum += Number(avg.data[i]['decibel']);
          }
          this.avg_db = (sum / avg.data.length).toFixed();
        } catch {
          console.log("실패");
        }
      },
      // 동 리스트 누르면 나오는 액션
      building_action(building_num) {
        this.current_building = building_num;
        this.req_unit_list(building_num);
        this.unit_list_section = true;
      },
      unit_action(unit_num) {
        this.current_unit = unit_num;
        this.req_unit(unit_num);
        this.req_unit_caution();
        this.req_unit_warning();
        this.req_unit_db_avg();
        this.unit_section = true;
      }
    }
  }
  </script>
  
  <style scoped>
  h3 {
    margin: 12% 0 0 28%;
    font-size: 25px;
  }

  h4 {
    margin: 4% 0 0 12%;
    font-size: 25px;
  }
  
  .wrap {
    width: 100%;
    height: 90vh;
  }

  .wrapBox {
    float: left;
    margin-right: 2%;
  }

  .buildingBox {
    width: 300px;
    margin: 5% 0 0 28%;
    padding: 3% 0 3% 0;
    background: #FFFFFF;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.16);
    transition : all ease 1.5s;
  }

  .numberBox {
    width: 300px;
    margin: 5% 0 0 28%;
    padding: 3% 0 3% 0;
    background: #FFFFFF;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.16);
    transition : all ease 1.5s;
  }

  .selectBox {
    width: 800px;
    height: 70px;
    margin: 2.5% 0 0 12%;
    background: #FFFFFF;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.16);
    transition : all ease 1.5s;
  }

  .selectBox div {
    display: inline-block;
    width: 100px;
    font-size: 30px;
    font-weight: bold;
    padding: 20px 0 20px 0;
    margin-left: 30px;
  }
  
  .summaryBox {
    width: 800px;
    height: 160px;
    margin: 2.5% 0 0 12%;
    background: #FFFFFF;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.16);
    transition : all ease 1.5s;
  }

  .summaryBox dl {
    width: 155px;
    height: 100px;
    float: left;
    text-align: left;
    margin-top: 20px;
    margin-left: 75px;
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

  .lookUpBox {
    width: 800px;
    height: 450px;
    margin: 2.5% 0 0 12%;
    background: #FFFFFF;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.16);
    transition : all ease 1.5s;
    overflow-y: auto;
  }

  .lookUpBox ul {
    width: 100%; 
  }

  .lookUpBox ul li {
    float: left;
    width: 133.3px;
    text-align: center;
    padding: 2% 0 0 0;
  }
  
  .lookUpBox ul:first-of-type {
    font-weight: bold;
  }
  
  .buildingBox ul,
  .numberBox ul,
  .lookUpBox ul {
    list-style: none;
  }
  
  .buildingBox ul li,
  .numberBox ul li {
    padding: 5%;
  }

  .buildingBox:hover,
  .numberBox:hover,
  .selectBox:hover,
  .summaryBox:hover,
  .lookUpBox:hover {
    transition : all ease 1.5s;
    transform: scale(1.05);
  }
  </style>
  