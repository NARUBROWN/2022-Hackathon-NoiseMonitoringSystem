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
            <li>유닛</li>
            <li>2022-11-25</li>
            <li>시간</li>
            <li>상태</li>
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
    margin: 5% 0 0 10.5%;
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
    margin: 2.5% 0 0 10.5%;
    background: #FFFFFF;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.16);
    transition : all ease 1.5s;
  }

  .warningBox {
    width: 800px;
    height: 450px;
    margin: 2.5% 0 0 10.5%;
    background: #FFFFFF;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.16);
    transition : all ease 1.5s;
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
  