<template>
  <div>
    <h1>실시간 현황</h1>
  </div>
  <Live></Live>
</template>

<script>
import Live from '@/components/Live/Live'

export default {
  name: 'LiveView',
  components: {
    Live
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
