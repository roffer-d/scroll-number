<template>
  <scroll-number :value="value" speed="3s" />
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      value:9876
    }
  },
  mounted() {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
