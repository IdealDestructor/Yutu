<template>
  <div id="view1">
  <!--创建一个echarts的容器-->
    <div id="pieContainer" style="width:500px; height:500px"></div>
  </div>
</template>

<script>
import jQuery from 'jquery'
import { getAddr } from '../addresses';
export default {
  name: '',
  data () {
    return {
    }
  },
  computed: {
    get () {
      return this.$store.state.get
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.drawBarChart()
    })
  },
  methods: {
    drawBarChart () {
      var that = this
      var myChart = that.$echarts.init(document.getElementById('pieContainer'))
      myChart.showLoading()
      var getoptiondata = []
      var get = []
      var wnum = 0
      var bnum = 0
      var fnum = 0
      var key = this.$store.state.keyword
      jQuery.ajax({
        type: 'post',
        async: false,
        url: getAddr('/servlet/helloWorld'),
        data: {keyword: key},
        dataType: 'json',
        success: function (result) {
          if (result) {
            for (var i = 0; i < result.length; i++) {
              if (result[i].eventLevel === '正向') {
                wnum++
              } else {
                if (result[i].eventLevel === '中性') {
                  bnum++
                } else {
                  fnum++
                }
              }
              getoptiondata.push({value: wnum, name: '正向'})
              getoptiondata.push({value: bnum, name: '中性'})
              getoptiondata.push({value: fnum, name: '负向'})
            }
            get = getoptiondata
          }
        }
      })
      setTimeout(() => {
        myChart.setOption({
          calculable: false,
          legend: {
            orient: 'vertical',
            x: 'left',
            data: ['正向', '中性', '负向']
          },
          series: (function () {
            var series = []
            for (var i = 0; i < 30; i++) {
              series.push({
                name: '舆情',
                type: 'pie',
                itemStyle: {
                  normal: {
                    label: {
                      show: i > 31
                    },
                    labelLine: {
                      show: i > 31,
                      length: 0
                    }
                  }
                },
                radius: [i * 4 + 40, i * 4 + 43],
                data: get
              })
            }
            return series
          })()
        })
        setTimeout(function () {
          var TextShape = require('zrender/src/graphic/Text')
          _ZR.refresh()
        }, 2000)
        myChart.hideLoading()
      }, 2000)
    }
  }
}
</script>
        
<style scoped>  
</style>

