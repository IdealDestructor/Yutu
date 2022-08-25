<template id="view4">
  <div id="echartContainer2" style="width:500px; height:500px">
  </div>
</template>

<script>
import jQuery from 'jquery'
export default {
  name: 'bar-chart',
  data () {
    return {
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
        data: ['2016/4', '2016/8', '2016/12', '2017/4', '2017/8', '2017/12']
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
        data: [1, 2, 3]
      }]
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