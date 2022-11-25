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

    <div class="wrapBox" v-if="true">
      {{ unit }}
      <h4>세대 조회</h4>
      <div class="selectBox">
        <div><a>{{current_building}}동</a></div>
        <div><a>{{current_unit}}호</a></div>
      </div>

      <div class="summaryBox">
        <dl>
          <dt>10dB</dt>
          <dd>평균 소음</dd>
          <dd>지난 1시간 동안</dd>
        </dl>
        <dl>
          <dt>10개</dt>
          <dd>주의</dd>
          <dd>지난 1시간 동안</dd>
        </dl>
        <dl>
          <dt>3개</dt>
          <dd>경고</dd>
          <dd>지난 1시간 동안</dd>
        </dl>
      </div>

      <div class="lookUpBox">
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
        <ul>
          <li>무엇</li>
          <li>정확도?</li>
          <li>데시벨</li>
          <li>동</li>
          <li>유닛(2/200)</li>
          <li>날짜</li>
          <li>시간</li>
          <li>상태</li>
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
          time: null
        },
        unit_list_section: false,
        unit_section: false,
        current_building: null,
        current_unit: null,
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
      // 동 리스트 누르면 나오는 액션
      building_action(building_num) {
        this.req_unit_list(building_num);
        this.unit_list_section = true;
        this.current_building = building_num;
      },
      unit_action(unit_num) {
        this.req_unit(unit_num);
        this.unit_section = true;
        this.current_unit = unit_num;
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
    width: 80px;
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
  }

  .lookUpBox ul {
    width: 100%; 
  }

  .lookUpBox ul li {
    float: left;
    width: 100px;
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
  