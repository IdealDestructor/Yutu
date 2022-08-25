<template id="Result">
  <div>
    <p> 风险评估结果 </p>
    <p>实体名称：{{keyword}}</p>
    <div class="div1"><table><tr><td><view1></view1></td><td> <view2></view2></td><td></td></tr></table>
    </div>
    <div class="div2">
    <view3></view3>
   </div></div>
</template>

<script>
export default {
  components: {
    view1: require('./view1.vue').default,
    view2: require('./view2.vue').default,
    view3: require('./view3.vue').default
  },
  computed: {
    keyword () {
      return this.$store.state.keyword
    }
  }
}
</script>

<style>
.div1{
   margin:0 auto;
    width:1000px
}
.div2{
   margin:0 auto;
    width:100px
}

</style>
