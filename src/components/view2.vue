<template id="view2">
  <div>
    <div id="gaugeContainer" style="width:500px; height:500px"></div>
  </div>
</template>

<script>
import jQuery from 'jquery'
import { getAddr } from '../addresses';
export default {
  name: '',
  data () {
    return {
      tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
      },
      toolbox: {
        show: true,
        feature: {
          mark: {
            show: true
          },
          restore: {
            show: true
          },
          saveAsImage: {
            show: true
          }
        }
      },
      series: [
        {
          name: '舆情风险指数',
          type: 'gauge',
          detail: {
            formatter: '{value}'
          },
          data: [
            {
              value: 20,
              name: '风险指数'
            }
          ]
        }
      ]
    }
  },
  computed: {
    grade () {
      return this.$store.state.grade
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
      var myChart = that.$echarts.init(document.getElementById('gaugeContainer'))
      var key = this.$store.state.keyword
      myChart.showLoading()
      var grade = 50
      var gra = 50
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
                gra = gra - 10
              } else if (result[i].eventLevel === '负向') {
                gra = gra + 10
              }
              grade = gra
            }
          }
        }
      })
      setTimeout(() => {
        myChart.setOption({
          tooltip: {
            formatter: '{a} <br/>{b} : {c}%'
          },
          toolbox: {
            show: true,
            feature: {
              mark: {
                show: true
              },
              restore: {
                show: true
              },
              saveAsImage: {
                show: true
              }
            }
          },
          series: [{
            name: '舆情风险指数',
            type: 'gauge',
            detail: {
              formatter: '{value}'
            },
            data: [{
              value: grade,
              name: '风险指数'
            }]
          }]
        })
        myChart.hideLoading()
      }, 2000)
    }
  }
}
</script>

<style scoped>
</style>
