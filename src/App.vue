<template>
  <nav>
    <div>
      <p><span>송도에듀푸르지오</span><br>아파트</p>
    </div>
    <router-link to="/live-view"><img src="./assets/Live/visibility.svg"></router-link>
    <router-link to="/lookup-view"><img src="./assets/Live/search.svg"></router-link>
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
  padding: 2%;
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

</style>
