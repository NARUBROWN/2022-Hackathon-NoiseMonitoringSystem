<template>
  <div>
    <h1>세부 조회</h1>
  </div>
  <Details></Details>
</template>

<script>
import Details from '@/components/Details/Details'

export default {
  name: 'DetailsView',
  components: {
    Details
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
