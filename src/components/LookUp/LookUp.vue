<template>
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
      <div class="lookBox">

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
    margin: 12% 0 0 32%;
    font-size: 25px;
  }

  h4 {
    margin: 4% 0 0 12%;
    font-size: 25px;
  }
  
  .wrapBox {
    float: left;
    margin-right: 2%;
  }

  .buildingBox {
    width: 300px;
    margin: 5% 0 0 32%;
    padding: 5% 0 5% 0;
    background: #FFFFFF;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.16);
  }

  .numberBox {
    width: 300px;
    margin: 5% 0 0 32%;
    padding: 5% 0 5% 0;
    background: #FFFFFF;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.16);
  }

  .lookBox {
    width: 800px;
    margin: 2.5% 0 0 12%;
    padding: 5% 0 5% 0;
    background: #FFFFFF;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.16);
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
  