<template>
    <div class="wrap">
      <div class="wrapBox">
        <h3>층간소음의 기준</h3>
        <div class="cautionBox">
          <table>
            <tr>
              <td colspan="2" rowspan="2">층간소음의 구분</td>
              <td colspan="2">층간소음의 기준[단위: dB(A)]</td>
            </tr>
            <tr>
              <td>주간<br>(06:00 ~ 22:00)</td>
              <td>야간<br>(22:00 ~ 06:00)</td>
            </tr>
            <tr>
              <td rowspan="2">1. 제2조 제1호에 따른 직접충격 소음</td>
              <td>1분간 등가소음도<br>(Leq)</td>
              <td>43</td>
              <td>38</td>
            </tr>
            <tr>
              <td>최고소음도<br>(Lmax)</td>
              <td>57</td>
              <td>52</td>
            </tr>
            <tr>
              <td>2. 제2조 2호에 따흔 공기전달 소음</td>
              <td>5분간 등가소음도<br>(Leq)</td>
              <td>45</td>
              <td>40</td>
            </tr>
          </table>
          <div class="note">
            <h4>비고</h4>
            <p>1. 직접충격 소음은 1분간 등가소음도(Leq) 및 최고소음도(Lmax)로 평가하고, 공기전달 소음은 5분간 등가소음도(Leq)로 평가한다.</p>
            <p>2. 위 표의 기준에도 불구하고 「주택법」 제2조 제2호에 따른 공동주택으로서 「주택법」</p>
          </div>
        </div>
      </div>

      <div class="wrapBox">
        <h3>무엇을 넣을까?</h3>
        <div class="warningBox">

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
    margin: 5% 0 0 12%;
    font-size: 25px;
  }

  .wrap {
    width: 100%;
    height: 80vh;
  }

  .wrapBox {
    float: left;
    margin-right: 2%;
  }

  .cautionBox {
    width: 745px;
    height: 600px;
    margin: 2.5% 0 0 12%;
    background: #FFFFFF;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.16);
    transition : all ease 1.5s;
    position: relative;
  }

  .cautionBox table {
    border: 1px solid #212121;
    width: 90%;
    position: absolute;
    top: 5%;
    left: 5%;
  }

  .cautionBox table tr td {
    border: 1px solid #212121;
    line-height: 30px;
    text-align: center;
    vertical-align: middle;
  }

  .cautionBox > .note {
    position: absolute;
    width: 90%;
    top: 55%;
    left: 5%;
  }

  .cautionBox > .note h4 {
    margin-bottom: 2%;
  }

  .cautionBox > .note p {
    line-height: 20px;
    margin-bottom: 1.5%;
  }

  .warningBox {
    width: 745px;
    height: 450px;
    margin: 2.5% 0 0 12%;
    background: #FFFFFF;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.16);
    transition : all ease 1.5s;
  }
  

  .cautionBox:hover,
  .warningBox:hover  {
    transition : all ease 1.5s;
    transform: scale(1.05);
  }
</style>
