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
          <dl>
            <dt>소음 종류</dt>
            <dd>발 소리</dd>
            <dd>자동차 소리</dd>
            <dd>소음 종류</dd>
          </dl>
          <dl>
            <dt>소음 크기</dt>
            <dd>15dB</dd>
            <dd>40dB</dd>
            <dd>소음 크기</dd>
          </dl>
          <dl>
            <dt>날짜</dt>
            <dd>2022-11-23</dd>
            <dd>2022-11-25</dd>
            <dd>날짜</dd>
          </dl>
          <dl>
            <dt>시간</dt>
            <dd>13:20</dd>
            <dd>13:40</dd>
            <dd>시간</dd>
          </dl>
          <dl>
            <dt>상태</dt>
            <dd>허용</dd>
            <dd>주의</dd>
            <dd>상태</dd>
          </dl>
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
          building: null,
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
  }

  .numberBox {
    width: 300px;
    margin: 5% 0 0 28%;
    padding: 3% 0 3% 0;
    background: #FFFFFF;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.16);
  }

  .selectBox {
    width: 800px;
    height: 70px;
    margin: 2.5% 0 0 12%;
    background: #FFFFFF;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.16);
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
    margin: 2.5% 0 0 12%;
    background: #FFFFFF;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.16);
  }

  .lookUpBox {
    width: 800px;
    height: 450px;
    margin: 2.5% 0 0 12%;
    background: #FFFFFF;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.16);
  }
  
  .lookUpBox dl {
    float: left;
    width: 160px;
    text-align: center;
    margin-top: 3%;
  }
  
  .lookUpBox dl dt {
    font-weight: bold;
  }
  
  .lookUpBox dl dd {
    margin-top: 6%;
  }
  
  .buildingBox ul,
  .numberBox ul {
    list-style: none;
  }
  
  .buildingBox ul li,
  .numberBox ul li {
    padding: 5%;
  }
  </style>
  