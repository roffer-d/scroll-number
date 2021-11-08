<template>
  <scroll-number :value="value" speed="3s" />
</template>

<script>
import scrollNumber from "./components/scrollNumber";
export default {
  name: 'App',
  components: {
    scrollNumber
  },
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
