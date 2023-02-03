<template>
  <nav>
    <div>
      <p><span>송도에듀푸르지오</span><br>아파트</p>
    </div>
    <div class="navIcon">
      <router-link to="/live-view"><img src="./assets/Live/display_settings.svg"><span>실시간 현황</span></router-link>
      <router-link to="/lookup-view"><img src="./assets/Live/search.svg"><span>소음 내역 조회</span></router-link>
    </div>
    <!-- <router-link to="/">안내사항</router-link> -->
  </nav>
  <router-view/>
</template>

<style lang="scss">
html, body {
  width: 100%;
  height: 100%;
  background: #F5F5F5;
  font-family: "NanumSquareNeo", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #212121;
}
@font-face {
  font-family: 'NanumSquareNeo';
  src: url("assets/fonts/NanumSquareNeoTTF-aLt.woff2");
  font-weight: 300;
}
@font-face {
  font-family: 'NanumSquareNeo';
  src: url("assets/fonts/NanumSquareNeoTTF-bRg.woff2");
  font-weight: normal;
}
@font-face {
  font-family: 'NanumSquareNeo';
  src: url("assets/fonts/NanumSquareNeoTTF-cBd.woff2");
  font-weight: bold;
}
@font-face {
  font-family: 'NanumSquareNeo';
  src: url("assets/fonts/NanumSquareNeoTTF-dEb.woff2");
  font-weight: 800;
}
@font-face {
  font-family: 'NanumSquareNeo';
  src: url("assets/fonts/NanumSquareNeoTTF-eHv.woff2");
  font-weight: 900;
}

nav {
  height: 140px;
  padding-top: 3%;
  background: #212121;
  text-align: center;
  position: relative;
}

p {
  color: #FFFFFF;
  position: absolute;
  text-align: left;
  font-size: 35px;
  margin-left: 3%;
  line-height: 40px;
}

p span {
  font-weight: 900;
}

nav a {
  font-weight: bold;
  color: #F5F5F5;
  margin-left: 2.5%;
  margin-right: 2.5%;
  text-decoration: none;
  font-size: 20px;
}

nav img {
  width: 70px;
}

nav img:first-of-type {
  margin-right: 0.3%;
}

.navIcon {
  position: relative;
}

.navIcon span {
  position: absolute;
  margin-top: 5%;
  margin-left: -5.4%;
}

</style>
