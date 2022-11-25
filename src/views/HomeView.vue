<template>
  <div>
    <h1>메인화면</h1>
  </div>
  <HelloWorld></HelloWorld>
</template>

<script>
import HelloWorld from "@/components/Main/HelloWorld"

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
div {
  width: 100%;
}

h1 {
  font-size: 35px;
  margin: 3% 0 0 5%;
}
</style>
