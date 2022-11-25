<template>
  <div class="wrap">
    <div class="wrapBox">
      <h3>동</h3>
      <div class="buildingBox">
        <ul>
          <li>101동</li>
          <li>102동</li>
          <li>103동</li>
          <li>104동</li>
        </ul>
      </div>
    </div>

    <div class="wrapBox">
      <h3>호</h3>
      <div class="numberBox">
        <ul>
          <li>101호</li>
          <li>102호</li>
          <li>201호</li>
          <li>202호</li>
          <li>301호</li>
          <li>302호</li>
          <li>401호</li>
          <li>402호</li>
          <li>501호</li>
          <li>502호</li>
          <li>601호</li>
          <li>602호</li>
          <li>701호</li>
          <li>702호</li>
        </ul>
      </div>
    </div>

    <div class="wrapBox">
      <h4>세대 조회</h4>
      <div class="selectBox">
        <div><a>101동</a></div>
        <div><a>101호</a></div>
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
  export default {
    name: 'HelloWorld'
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
  