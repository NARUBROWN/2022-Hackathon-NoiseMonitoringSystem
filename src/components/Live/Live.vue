<template>
    <h2>요약</h2>
    <div class="summaryBox">
      <dl>
        <dt>10dB</dt>
        <dd>현재 소음</dd>
        <dd>지난 15초 동안</dd>
      </dl>
      <dl>
        <dt>10개</dt>
        <dd>주의</dd>
        <dd>지난 15초 동안</dd>
      </dl>
      <dl>
        <dt>3개</dt>
        <dd>경고</dd>
        <dd>지난 15초 동안</dd>
      </dl>
      <dl>
        <dt>40dB</dt>
        <dd>평균 소음</dd>
        <dd>지난 1시간 동안</dd>
      </dl>
    </div>
  
    <div class="wrap">
      <div class="wrapBox">
        <h3>주의</h3>
        <div class="cautionBox">
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

      <div class="wrapBox">
        <h3>경고</h3>
        <div class="warningBox">
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
    margin-right: 5%;
  }

  .cautionBox {
    width: 700px;
    height: 450px;
    margin: 2.5% 0 0 12%;
    background: #FFFFFF;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.16);
  }

  .warningBox {
    width: 700px;
    height: 450px;
    margin: 2.5% 0 0 12%;
    background: #FFFFFF;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.16);
  }
  
  .cautionBox dl,
  .warningBox dl {
    float: left;
    width: 140px;
    text-align: center;
    margin-top: 3%;
  }
  
  .cautionBox dl dt,
  .warningBox dl dt {
    font-weight: bold;
  }
  
  .cautionBox dl dd,
  .warningBox dl dd {
    margin-top: 6%;
  }
  
  </style>
  