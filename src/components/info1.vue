<template id="info1">
  <div id="r3" style="width:500px; height:500px">
  </div>
</template>

<script>
import jQuery from 'jquery'
export default {
  name: 'bar-chart',
  data () {
    return {
    }
  },
  computed: {
    cha () {
      return this.$store.state.cha
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
      var key = this.$store.state.keyword
      var myChart = that.$echarts.init(document.getElementById('echartContainer2'), 'infographic')
      myChart.showLoading()
      var change = [0, 0, 0, 0, 0, 0]
      var cha = []
      jQuery.ajax({
        type: 'post',
        async: false,
        url: '/servlet/helloWorld',
        data: {keyword: key},
        dataType: 'json',
        success: function (result) {
          if (result) {
            for (var i = 0; i < result.length; i++) {
              var geturl = []
              var gettitle = []
              var getdigest = []
              geturl.push(result[i].url)
              gettitle.push(result[i].title)
              getdigest.push(result[i].digest)
              let tr = document.createElement('tr')
              tr.innerHTML = '<a href = "' + geturl + '">' + gettitle + '</a>'
              let tr2 = document.createElement('tr')
              tr2.innerHTML = '<a>' + getdigest + '</a>'
              document.getElementById('echartContainer2').appendChild(tr)
              document.getElementById('echartContainer2').appendChild(tr2)
              if (result[i].time < 1460049440000) {
                if (result[i].eventLevel === '正向') {
                  change[0]++
                } else {
                  change[0]--
                }
              } else {
                if (result[i].time < 1470049440000) {
                  if (result[i].eventLevel === '正向') {
                    change[1]++
                  } else {
                    change[1]--
                  }
                } else {
                  if (result[i].time < 1480049440000) {
                    if (result[i].eventLevel === '正向') {
                      change[2]++
                    } else {
                      change[1]--
                    }
                  } else {
                    if (result[i].time < 1490049440000) {
                      if (result[i].eventLevel === '正向') {
                        change[3]++
                      } else {
                        change[3]--
                      }
                    } else {
                      if (result[i].time < 1500049440000) {
                        if (result[i].eventLevel === '正向') {
                          change[4]++
                        } else {
                          change[4]--
                        }
                      } else {
                        if (result[i].eventLevel === '正向') {
                          change[5]++
                        } else {
                          change[5]--
                        }
                      }
                    }
                  }
                }
              }
            }
            cha = change
          }
        }
      })
      setTimeout(() => {
        myChart.setOption({
          title: {
            x: 'center',
            text: '舆情趋势'
          },
          tooltip: {},
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'value'
          },
          yAxis: {
            type: 'category',
            axisTick: {show: false},
            data: ['2016年初', '2016年中', '2016年末', '2017年初', '2017年中', '2017年末']
          },
          series: [{
            name: '等级',
            type: 'bar',
            label: {
              noraml: {
                show: true,
                position: 'inside'
              }
            },
            data: cha
          }]
        })
        myChart.hideLoading()
      }, 2000)
    }
  }
}
</script>

<style>
</style>






this.$api.post('user/login.do(地址)', {
    "参数名": "参数值"
}, response => {
     if (response.status >= 200 && response.status < 300) {
        console.log(response.data);\\请求成功，response为成功信息参数
     } else {
        console.log(response.message);\\请求失败，response为失败信息
     }
})