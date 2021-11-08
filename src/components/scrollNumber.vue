<template>
  <div class="scroll-number">
        <span class="number-item" :class="itemClass" v-for="(item,index) in valueList" :key="index">
            <span class="number-item-child"
                  :ref="`number-item-child-${index}`"
                  :class="childClass"
                  :style="{transition:`all ${speed}`}">0123456789</span>
        </span>
  </div>
</template>

<script>
export default {
  name: "scrollNumber",
  props: {
    itemClass: {
      type: String,
      default: ''
    },
    childClass: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: '12345'
    },
    speed: {
      type: String,
      default: '2s'
    }
  },
  watch:{
    value(){
      this.run()
    }
  },
  data() {
    return {
      valueList: []
    }
  },
  mounted() {
    this.run()
  },
  methods:{
    run(){
      this.valueList = `${this.value}`.split('')
      this.valueList.forEach((item,index)=>{
        setTimeout(()=>{
          this.$refs[`number-item-child-${index}`].style.transform = `translate(0,${-item * 10}%)`
        },50)
      })
    }
  }
}
</script>

<style scoped lang="scss">
.scroll-number {
  display: flex;

  .number-item {
    background: #555;
    border-radius: .2rem;
    position: relative;
    padding: .5rem;
    margin-right: .3rem;
    color: #66FFFF;
    font-size: 1.5rem;
    font-weight: bold;
    font-family: BigNoodleTitling;
    writing-mode: vertical-lr;
    text-orientation: upright;
    overflow: hidden;
    display: flex;
    height: 20px;
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    .number-item-child {
      position: absolute;
      top: 6px;
      letter-spacing: 6px;
    }
  }
}
</style>