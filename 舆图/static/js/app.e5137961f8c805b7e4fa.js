webpackJsonp([1],{"/8wY":function(t,e){},0:function(t,e){},"0QmP":function(t,e){},"1hiY":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("XLwt"),a={name:"",data:function(){return{}},mounted:function(){i.init(document.getElementById("gaugeContainer")).setOption({tooltip:{formatter:"{a} <br/>{b} : {c}%"},toolbox:{show:!0,feature:{mark:{show:!0},restore:{show:!0},saveAsImage:{show:!0}}},series:[{name:"业务指标",type:"gauge",detail:{formatter:"{value}%"},data:[{value:50,name:"工作比"}]}]})}},r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticStyle:{width:"500px",height:"500px"},attrs:{id:"gaugeContainer"}})])}]};var o=n("VU/8")(a,r,!1,function(t){n("/8wY")},"data-v-32775fab",null);e.default=o.exports},"7Otq":function(t,e){t.exports="data:image/png;base64,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"},EH2v:function(t,e){},IEob:function(t,e){},MJa5:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),a=n("7t+N"),r=n.n(a),o={title:{text:"简单柱状图"},tooltip:{},xAxis:{type:"category"},yAxis:{type:"value"},series:[{name:"销量",type:"bar",itemStyle:{normal:{color:"hotpink"}}}]},s={name:"bar-chart",data:function(){return{number:"18723"}},mounted:function(){this.$nextTick(function(){this.drawBarChart()})},methods:{drawBarChart:function(){var t=this.$echarts.init(document.getElementById("echartContainer2"),"infographic");r.a.ajax({type:"post",async:!1,url:"/servlet/helloWorld",data:{},dataType:"json",success:function(t){if(t){o.xAxis[0].data=[];for(var e=0;e<t.length;e++)o.xAxis[0].data.push(t[e].name);o.series[0].data=[];for(var n=0;n<t.length;n++)o.series[0].data.push(t[n].num)}}}),t.setOption(o)},showChildComponentData:function(){this.$store.state.keyword=this.msg,this.$router.push({path:"/Result"})}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Risk Grading System")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],attrs:{type:"text"},domProps:{value:t.msg},on:{input:function(e){e.target.composing||(t.msg=e.target.value)}}}),t._v(" "),n("button",{on:{click:t.showChildComponentData}},[t._v("评估")]),t._v(" "),n("P",[t._v(" 已收录 "+t._s(t.number)+" 家机构 ")]),t._v(" "),n("router-link",{attrs:{to:"/About"}},[t._v("About")]),t._v(" "),n("div",{staticStyle:{width:"500px",height:"500px"},attrs:{id:"echartContainer2"}})],1)},staticRenderFns:[]};var h=n("VU/8")(s,u,!1,function(t){n("0QmP")},null,null).exports,l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"About"}},[e("a",[this._v(" 基于机构实体的智能摘要和风险等级识别可视化系统 ")]),this._v(" "),e("p",[this._v(" Visualization System Of Intelligent Abstract And Risk Grading Based On Institutional Entities ")]),this._v(" "),e("p",[this._v("     通过机器学习等数据分析方法，可以挖掘蕴含在数据资源中的价值，以学科交叉的形式推动社会治理和产业结构升级。在金融风控领域，为了满足商业银行、征信公司、金融信贷机构对高精度舆情大数据的迫切需求，通过采集由司法、财经、科技、质量监督类权威媒体发布的新闻并进行数据清洗，采用高效的算法模型提取出机构实体并生成基于该实体的摘要、关键词和风险等级的智能文摘。在前人已有的工作基础上，综合应用HTML、CSS、JavaScript等前端技术，使用Vue、Echarts等工具，并采用Ajax方法和php语言实现与数据库的动态交互，以多种方式实现被检索机构的风险评估结果和征信排名可视化，以满足众多银行、征信、互金机构客户的实际需要，延伸这一解决方案的应用价值与现实意义。")]),this._v(" "),e("a",[this._v(" GitHub项目地址 "+this._s(this.url)+" ")])])},staticRenderFns:[]};var c=n("VU/8")({data:function(){return{url:"www.github.com/xxx"}}},l,!1,function(t){n("EH2v")},null,null).exports,p={components:{view1:n("abWa").default,view2:n("1hiY").default,asyncbarchart:n("OVx6").default},computed:{keyword:function(){return this.$store.state.keyword}}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",[this._v(" 风险评估结果 ")]),this._v(" "),e("p",[this._v("实体名称："+this._s(this.keyword))]),this._v(" "),e("view1"),this._v(" "),e("view2"),this._v(" "),e("asyncbarchart")],1)},staticRenderFns:[]};var v=n("VU/8")(p,d,!1,function(t){n("tXZH")},null,null).exports,f={components:{roof:h,Result:v,About:c}},Q={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("img",{attrs:{src:n("7Otq")}}),this._v(" "),e("router-view",{staticClass:"view"})],1)},staticRenderFns:[]};var x=n("VU/8")(f,Q,!1,function(t){n("MJa5")},null,null).exports,m=n("/ocq");i.default.use(m.a);var A=new m.a({routes:[{path:"/",name:"roof",component:h},{path:"/About",name:"About",component:c},{path:"/Result",name:"Result",component:v}]}),R=n("NYxO");i.default.use(R.a);var U=new R.a.Store({state:{keyword:"Francis"}}),w=n("zL8q"),C=n.n(w),Y=(n("tvR6"),n("8+8L")),b=n("XLwt"),y=n.n(b);i.default.use(Y.a),i.default.prototype.$echarts=y.a,i.default.use(R.a),i.default.use(C.a),i.default.config.productionTip=!1,new i.default({el:"#app",router:A,store:U,template:"<App/>",render:function(t){return t(x)},components:{App:x}})},Nkrb:function(t,e){},OVx6:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var a=n("VU/8")({data:function(){return{}}},i,!1,function(t){n("Nkrb")},null,null);e.default=a.exports},abWa:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("XLwt"),a={name:"line-chart",data:function(){return{}},mounted:function(){i.init(document.getElementById("echartContainer")).setOption({tooltip:{},xAxis:{data:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]},yAxis:{},series:[{name:"销量",type:"bar",data:[5,20,36,10,10,20],itemStyle:{normal:{color:"hotpink"}}}],title:{show:!0,text:"简单折线图",link:"http://echarts.baidu.com/option.html#title.link",subtext:"熟悉title的配置项",left:50,padding:[5,20,5,10]},toolbox:{show:!0,orient:"vertical",itemSize:18,itemGap:20,right:20,feature:{saveAsImage:{show:!0},dataView:{show:!0},magicType:{type:["line","bar"]},dataZoom:{show:!0},restore:{show:!0}}}})}},r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"view1"}},[e("div",{staticStyle:{width:"500px",height:"500px"},attrs:{id:"echartContainer"}})])}]};var o=n("VU/8")(a,r,!1,function(t){n("IEob")},null,null);e.default=o.exports},tXZH:function(t,e){},tvR6:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e5137961f8c805b7e4fa.js.map