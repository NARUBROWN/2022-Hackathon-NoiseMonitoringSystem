<template>
  <nav>
    <router-link to="/live-view">실시간 현황</router-link>
    <router-link to="/lookup-view">소음 내역 조회</router-link>
    <router-link to="/details-view">세부 조회</router-link>
    <router-link to="/">안내사항</router-link>
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
  padding: 40px;
  background: #212121;
  text-align: center;
}

nav a {
  font-weight: bold;
  color: #F5F5F5;
  margin-left: 5%;
  text-decoration: none;
  font-size: 20px;
}

nav a.router-link-exact-active {
  color: #F5F5F5;
  font-size: 30px;
}
</style>
