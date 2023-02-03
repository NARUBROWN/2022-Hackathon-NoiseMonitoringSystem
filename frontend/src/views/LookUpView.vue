<template>
  <div>
    <h1>소음 내역 조회</h1>
  </div>
  <LookUp></LookUp>
</template>

<script>
import LookUp from '@/components/LookUp/LookUp'

export default {
  name: 'LookUpView',
  components: {
    LookUp
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
