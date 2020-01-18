<template id="search2">
  <div>
    <h1>Risk Grading System</h1>
    <div class="div1"> 
      <table margin="0 auto"> <tr><td class="td1">""  ""   "</td> <td  width="322px"><div><input type="text" placeholder="请输入地区或行业名称" v-model="msg"></div></td><td width="100px">  
      <div><button @click="showChildComponentData">评估</button></div></td> </tr> </table></div>
      <div v-show="isshow">
      <ul v-for="item in select" :key='item'  style="width: 10%;height:10%;margin:0 auto"><li>{{item}}</li></ul>
    </div>
    <P> 已收录 {{ number }} 家机构 </P>
    <router-link to="/About">About</router-link>
  </div>
</template>

<script type="text/javascript">
import jQuery from 'jquery'
import { getAddr } from '../addresses'

var getname = []
export default {
  data () {
    return {
      isshow: true,
      msg: '',
      films: [],
      select: [],
      number: '19982'
    }
  },
  methods: {
    showChildComponentData: function () {
      this.$store.state.keyword = this.msg
      this.$router.push({path: '/Result2'})
    }
  },
  watch: {
    msg: function (val, oldVal) {
      if (val.length === 0) {
        this.isshow = false
      } else {
        var key = this.msg
        jQuery.ajax({
          type: 'post',
          async: false,
          url: getAddr('/servlet/helloWorld'),
          data: {keyword: key},
          dataType: 'json',
          success: (result) => {
            getname = result.map(v => v.name)
            var res = []
            var json = {}
            for(var i = 0; i < getname.length; i++){
              if (!json[getname[i]]) {
                res.push(getname[i])
                json[getname[i]] = 1
              }
              this.select = res
              return
            }
          },
          error: function() {
            console.log('Wrong')
          }
        })
        this.isshow = true
      }
    }
  }
}
</script>

<style scoped>
ul{
  border:none;
} 
.div1{
   margin:0 auto;
    width:500px
}
li{
  height:40px;
  line-height: 60px;
  border-bottom: 1px solid #ddd;
}
input{
text-align:center;
font-size:1.4em;
height:2.3em;
border-radius:8px;
border:1px solid #c8cccf;
color:#6a6f77;
 -moz-appearance: none;
 display:block;
 outline:0;
 width:100%;
}
.td1{
  visibility:hidden
}
button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 16px 2px;
    cursor: pointer;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    border-radius: 8px;
}
button:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
}
 .tbl{border:1px solid lightgray;}
</style>
