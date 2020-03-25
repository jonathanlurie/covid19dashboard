(this.webpackJsonpcovid19dasboard=this.webpackJsonpcovid19dasboard||[]).push([[0],{165:function(e,t,a){},166:function(e,t,a){},169:function(e,t,a){},170:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a.n(n),s=a(22),c=a(0),l=a.n(c),o=a(60),i=a.n(o),u=a(5),d=a(6),m=function(){function e(t,a){Object(u.a)(this,e),this.code=t,this.name=a,this.recordSeries=[],this.population=null}return Object(d.a)(e,[{key:"setRecordSeries",value:function(e){this.recordSeries=e;for(var t=0;t<this.recordSeries.length;t++)this.recordSeries[t].date=new Date(this.recordSeries[t].date)}},{key:"getCases",value:function(){for(var e=0,t=0;t<this.recordSeries.length;t++)e+=this.recordSeries[t].cases;return e}},{key:"getDeaths",value:function(){for(var e=0,t=0;t<this.recordSeries.length;t++)e+=this.recordSeries[t].deaths;return e}},{key:"getCasesPerMillion",value:function(){return this.getCases()/(this.population/1e6)}},{key:"getDeathsPerMillion",value:function(){return this.getDeaths()/(this.population/1e6)}},{key:"getDataAge",value:function(){var e=this.recordSeries[this.recordSeries.length-1].date,t=new Date;return t.setUTCHours(12,0,0,0),(t-e)/864e5}},{key:"getCasesStartingNDaysAgoDuringMDays",value:function(e,t){var a=new Date(Date.now()-1e3*e*3600*24);a.setUTCHours(0,0,1,0);for(var n=new Date(a.getTime()+1e3*t*3600*24),r=0,s=this.recordSeries.length-1;s>=0;s--){var c=this.recordSeries[s];c.date>a&&c.date<n&&(r+=c.cases)}return r}},{key:"getDeathsStartingNDaysAgoDuringMDays",value:function(e,t){var a=new Date(Date.now()-1e3*e*3600*24);a.setUTCHours(0,0,1,0);for(var n=new Date(a.getTime()+1e3*t*3600*24),r=0,s=this.recordSeries.length-1;s>=0;s--){var c=this.recordSeries[s];c.date>a&&c.date<n&&(r+=c.deaths)}return r}},{key:"getCasesSeries",value:function(){for(var e={},t=0;t<this.recordSeries.length;t++){var a=this.recordSeries[t],n=a.date.getUTCFullYear(),r=a.date.getUTCMonth()+1;r=r<10?"0".concat(r):r;var s=a.date.getUTCDate();s=s<10?"0".concat(s):s,e["".concat(n,"-").concat(r,"-").concat(s)]=a.cases}return e}},{key:"getCasesSeriesPerMillion",value:function(){for(var e={},t=0;t<this.recordSeries.length;t++){var a=this.recordSeries[t],n=a.date.getUTCFullYear(),r=a.date.getUTCMonth()+1;r=r<10?"0".concat(r):r;var s=a.date.getUTCDate();s=s<10?"0".concat(s):s,e["".concat(n,"-").concat(r,"-").concat(s)]=a.cases/(this.population/1e6)}return e}},{key:"getCumulatedCasesSeries",value:function(){for(var e={},t=0,a=0;a<this.recordSeries.length;a++){var n=this.recordSeries[a];t+=n.cases;var r=n.date.getUTCFullYear(),s=n.date.getUTCMonth()+1;s=s<10?"0".concat(s):s;var c=n.date.getUTCDate();c=c<10?"0".concat(c):c,e["".concat(r,"-").concat(s,"-").concat(c)]=t}return e}},{key:"getCumulatedCasesSeriesPerMillion",value:function(){for(var e={},t=0,a=0;a<this.recordSeries.length;a++){var n=this.recordSeries[a];t+=n.cases;var r=n.date.getUTCFullYear(),s=n.date.getUTCMonth()+1;s=s<10?"0".concat(s):s;var c=n.date.getUTCDate();c=c<10?"0".concat(c):c,e["".concat(r,"-").concat(s,"-").concat(c)]=t/(this.population/1e6)}return e}},{key:"getDeathsSeries",value:function(){for(var e={},t=0;t<this.recordSeries.length;t++){var a=this.recordSeries[t],n=a.date.getUTCFullYear(),r=a.date.getUTCMonth()+1;r=r<10?"0".concat(r):r;var s=a.date.getUTCDate();s=s<10?"0".concat(s):s,e["".concat(n,"-").concat(r,"-").concat(s)]=a.deaths}return e}},{key:"getDeathsSeriesPerMillion",value:function(){for(var e={},t=0;t<this.recordSeries.length;t++){var a=this.recordSeries[t],n=a.date.getUTCFullYear(),r=a.date.getUTCMonth()+1;r=r<10?"0".concat(r):r;var s=a.date.getUTCDate();s=s<10?"0".concat(s):s,e["".concat(n,"-").concat(r,"-").concat(s)]=a.deaths/(this.population/1e6)}return e}},{key:"getCumulatedDeathsSeries",value:function(){for(var e={},t=0,a=0;a<this.recordSeries.length;a++){var n=this.recordSeries[a];t+=n.deaths;var r=n.date.getUTCFullYear(),s=n.date.getUTCMonth()+1;s=s<10?"0".concat(s):s;var c=n.date.getUTCDate();c=c<10?"0".concat(c):c,e["".concat(r,"-").concat(s,"-").concat(c)]=t}return e}},{key:"getCumulatedDeathsSeriesPerMillion",value:function(){for(var e={},t=0,a=0;a<this.recordSeries.length;a++){var n=this.recordSeries[a];t+=n.deaths;var r=n.date.getUTCFullYear(),s=n.date.getUTCMonth()+1;s=s<10?"0".concat(s):s;var c=n.date.getUTCDate();c=c<10?"0".concat(c):c,e["".concat(r,"-").concat(s,"-").concat(c)]=t/(this.population/1e6)}return e}}]),e}(),h=new(function(){function e(){Object(u.a)(this,e),this.collection={}}return Object(d.a)(e,[{key:"addCountry",value:function(e){this.collection[e.code]=e}},{key:"getCountry",value:function(e){return e in this.collection?this.collection[e]:null}},{key:"hasCountry",value:function(e){return e.toLowerCase()in this.collection}},{key:"getAllCountries",value:function(){return Object.values(this.collection).sort((function(e,t){return e.name<t.name?-1:1}))}}]),e}()),g={defaultCountryCode:"ch"};function p(){return v.apply(this,arguments)}function v(){return(v=Object(s.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://www.geoplugin.net/json.gp");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,g.defaultCountryCode=a.geoplugin_countryCode.toLowerCase(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function b(){return(b=Object(s.a)(r.a.mark((function e(){var t,a,n,s,c,l,o,i,u,d,g,v,b,f,C,y,E,D;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:return e.next=4,fetch("./data/country-by-abbreviation.json");case 4:return t=e.sent,e.next=7,t.json();case 7:return a=e.sent,e.next=10,fetch("./data/country-by-population.json");case 10:return n=e.sent,e.next=13,n.json();case 13:return s=e.sent,c={},s.forEach((function(e){c[e.country.toLowerCase()]=parseInt(e.population)||null})),l=new Date,o=(o=l.getUTCDate())<10?"0".concat(o):"".concat(o),i=(i=l.getUTCMonth()+1)<10?"0".concat(i):"".concat(i),u="".concat(l.getUTCFullYear()),d=null,g=null,e.prev=24,e.prev=25,e.next=28,fetch("./data/covid19-per-country-".concat(o,"-").concat(i,"-").concat(u,".json"));case 28:return d=e.sent,e.next=31,d.json();case 31:g=e.sent,e.next=42;break;case 34:return e.prev=34,e.t0=e.catch(25),e.next=38,fetch("https://raw.githubusercontent.com/jonathanlurie/covid19dashboard/master/docs/data/covid19-per-country-".concat(o,"-").concat(i,"-").concat(u,".json"));case 38:return d=e.sent,e.next=41,d.json();case 41:g=e.sent;case 42:e.next=70;break;case 44:return e.prev=44,e.t1=e.catch(24),console.log("Fallback on the last report available"),e.next=49,fetch("./data/config.json");case 49:return v=e.sent,e.next=52,v.json();case 52:return b=e.sent,e.prev=53,e.next=56,fetch("./data/".concat(b.lastFile));case 56:return d=e.sent,e.next=59,d.json();case 59:g=e.sent,e.next=70;break;case 62:return e.prev=62,e.t2=e.catch(53),e.next=66,fetch("https://raw.githubusercontent.com/jonathanlurie/covid19dashboard/master/docs/data/".concat(b.lastFile));case 66:return d=e.sent,e.next=69,d.json();case 69:g=e.sent;case 70:for(f=0;f<a.length;f++)C=a[f].country.toLowerCase(),y=a[f].abbreviation.toLowerCase(),E=c[C],(D=new m(y,C)).population=E,y.toUpperCase()in g&&D.setRecordSeries(g[y.toUpperCase()]),h.addCountry(D);case 71:case"end":return e.stop()}}),e,null,[[24,44],[25,34],[53,62]])})))).apply(this,arguments)}var f=function(){return b.apply(this,arguments)},C=(a(70),a(21)),y=a(10),E=a(16),D=a(15),N=a(17),S=(a(13),a(23)),w=(a(165),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(E.a)(this,Object(D.a)(t).call(this,e))).state={},a}return Object(N.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.countryCode,t=h.getCountry(e),a=t.getCasesSeries(),n=t.getCumulatedCasesSeries(),r=t.getDeathsSeries(),s=t.getCumulatedDeathsSeries(),c=t.getCasesSeriesPerMillion(),o=t.getCumulatedCasesSeriesPerMillion(),i=t.getDeathsSeriesPerMillion(),u=t.getCumulatedDeathsSeriesPerMillion(),d=null,m=0;0===Object.keys(a).length?d=l.a.createElement("div",{className:"warning-message"},"\u26a0\ufe0f There is no record for this country"):(m=t.getDataAge(),console.log("dataAge",m),d=m<.5?l.a.createElement("div",{className:"info-message"},"\u2705 These numbers are fresh from the day"):m>=.5&&m<=1?l.a.createElement("div",{className:"warning-message"},"\u26a0\ufe0f These numbers are from yesterday, they may not reflect today's reality"):l.a.createElement("div",{className:"warning-message"},"\u26a0\ufe0f These numbers are from ",~~m," days ago, they may not reflect todays reality"));var g={labels:Object.keys(a),datasets:[{label:"COVID-19 cases",data:Object.values(a),fill:!1,pointRadius:1.7,pointHitRadius:10,borderColor:"rgba(255, 200, 0, 1)",lineTension:.2,backgroundColor:"rgba(255, 200, 0, 1)"},{label:"COVID-19 deaths",data:Object.values(r),fill:!1,pointRadius:1.7,pointHitRadius:10,borderColor:"rgba(200, 0, 0, 1)",lineTension:.2,backgroundColor:"rgba(200, 0, 0, 1)"}]},p={labels:Object.keys(a),datasets:[{label:"COVID-19 cumulated cases",data:Object.values(n),fill:!1,pointRadius:1.7,pointHitRadius:10,borderColor:"rgba(255, 200, 0, 1)",lineTension:.2,backgroundColor:"rgba(255, 200, 0, 1)"},{label:"COVID-19 deaths",data:Object.values(s),fill:!1,pointRadius:1.7,pointHitRadius:10,borderColor:"rgba(200, 0, 0, 1)",lineTension:.2,backgroundColor:"rgba(200, 0, 0, 1)"}]},v={labels:Object.keys(a),datasets:[{label:"COVID-19 cases per million",data:Object.values(c),fill:!1,pointRadius:1.7,pointHitRadius:10,borderColor:"rgba(255, 200, 0, 1)",lineTension:.2,backgroundColor:"rgba(255, 200, 0, 1)"},{label:"COVID-19 deaths per million",data:Object.values(i),fill:!1,pointRadius:1.7,pointHitRadius:10,borderColor:"rgba(200, 0, 0, 1)",lineTension:.2,backgroundColor:"rgba(200, 0, 0, 1)"}]},b={labels:Object.keys(a),datasets:[{label:"COVID-19 cumulated cases",data:Object.values(o),fill:!1,pointRadius:1.7,pointHitRadius:10,borderColor:"rgba(255, 200, 0, 1)",lineTension:.2,backgroundColor:"rgba(255, 200, 0, 1)"},{label:"COVID-19 deaths",data:Object.values(u),fill:!1,pointRadius:1.7,pointHitRadius:10,borderColor:"rgba(200, 0, 0, 1)",lineTension:.2,backgroundColor:"rgba(200, 0, 0, 1)"}]},f={scales:{yAxes:[{type:"logarithmic"}]}},C=m<.5?0:Math.ceil(m);console.log("nbDayFixer",C);var y=t.getCasesStartingNDaysAgoDuringMDays(2+C,3),E=y>t.getCasesStartingNDaysAgoDuringMDays(5+C,3)?l.a.createElement("img",{className:"evolution-arrow",src:"images/arrow-red-up.png",title:"Higher than the 3 previous days"}):l.a.createElement("img",{className:"evolution-arrow",src:"images/arrow-green-down.png",title:"Lower than the previous 3 days"}),D=t.getDeathsStartingNDaysAgoDuringMDays(2+C,3),N=D>t.getDeathsStartingNDaysAgoDuringMDays(5+C,3)?l.a.createElement("img",{className:"evolution-arrow",src:"images/arrow-red-up.png",title:"Higher than the 3 previous days"}):l.a.createElement("img",{className:"evolution-arrow",src:"images/arrow-green-down.png",title:"Lower than the previous 3 days"});return l.a.createElement("div",{className:"dashboard"},l.a.createElement("div",{className:"country-name"},l.a.createElement("img",{className:"flag",src:"images/flags/".concat(e,".svg")}),l.a.createElement("h1",null,t.name)),d,l.a.createElement("div",{className:"info-grid"},l.a.createElement("div",{className:"cell"},l.a.createElement("div",{className:"cell-inner",style:{float:"right"}},l.a.createElement("p",null,l.a.createElement("span",{className:"cell-title",style:{color:"#ffc800"}},"# cases")),l.a.createElement("p",{className:"cell-section"},l.a.createElement("span",{className:"cell-subtitle"},"(all time)"),l.a.createElement("br",null),l.a.createElement("span",{className:"cell-score"},t.getCases())),l.a.createElement("p",{className:"cell-section"},l.a.createElement("span",{className:"cell-subtitle"},"(all time per million)"),l.a.createElement("br",null),l.a.createElement("span",{className:"cell-score"},~~(100*t.getCasesPerMillion())/100)),l.a.createElement("p",{className:"cell-section"},l.a.createElement("span",{className:"cell-subtitle"},"(in the last day)"),l.a.createElement("br",null),l.a.createElement("span",{className:"cell-score"},t.getCasesStartingNDaysAgoDuringMDays(C,1))),l.a.createElement("p",{className:"cell-section"},l.a.createElement("span",{className:"cell-subtitle"},"(in the last 3 days)"),l.a.createElement("br",null),l.a.createElement("span",{className:"cell-score"},y),E))),l.a.createElement("div",{className:"cell"},l.a.createElement("div",{className:"cell-inner",style:{float:"left"}},l.a.createElement("p",null,l.a.createElement("span",{className:"cell-title",style:{color:"#c80000"}},"# deaths")),l.a.createElement("p",{className:"cell-section"},l.a.createElement("span",{className:"cell-subtitle"},"(all time)"),l.a.createElement("br",null),l.a.createElement("span",{className:"cell-score"},t.getDeaths())),l.a.createElement("p",{className:"cell-section"},l.a.createElement("span",{className:"cell-subtitle"},"(all time per million)"),l.a.createElement("br",null),l.a.createElement("span",{className:"cell-score"},~~(100*t.getDeathsPerMillion())/100)),l.a.createElement("p",{className:"cell-section"},l.a.createElement("span",{className:"cell-subtitle"},"(in the last day)"),l.a.createElement("br",null),l.a.createElement("span",{className:"cell-score"},t.getDeathsStartingNDaysAgoDuringMDays(C,1))),l.a.createElement("p",{className:"cell-section"},l.a.createElement("span",{className:"cell-subtitle"},"(in the last 3 days)"),l.a.createElement("br",null),l.a.createElement("span",{className:"cell-score"},D),N)))),l.a.createElement("div",{className:"plot-title"},"COVID-19 cases and deaths over time (linear scale)"),l.a.createElement(S.a,{data:g,options:{},height:100}),l.a.createElement("div",{className:"plot-title"},"COVID-19 cumulated cases and deaths over time (logarithmic scale)"),l.a.createElement(S.a,{data:p,options:f,height:100}),l.a.createElement("div",{className:"plot-title"},"COVID-19 cases and deaths over time per million population (linear scale)"),l.a.createElement(S.a,{data:v,options:{},height:100}),l.a.createElement("div",{className:"plot-title"},"COVID-19 cumulated cases and deaths over time per milion population (logarithmic scale)"),l.a.createElement(S.a,{data:b,options:f,height:100}),l.a.createElement("div",{className:"credits"},l.a.createElement("p",null,"Data from the ",l.a.createElement("a",{href:"https://www.ecdc.europa.eu/en/publications-data/download-todays-data-geographic-distribution-covid-19-cases-worldwide"},"European Centre for Disease Prevention and Control")),l.a.createElement("p",null,"\u2014 Made by ",l.a.createElement("a",{href:"https://twitter.com/jonathanlurie"},"@jonathanlurie")," :: ",l.a.createElement("a",{href:"https://github.com/jonathanlurie/covid19dashboard"},"fork me on GitHub")," \u2014")))}}]),t}(l.a.Component)),j=(a(166),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(E.a)(this,Object(D.a)(t).call(this,e))).state={countrySearch:""},a.fullCountryList=h.getAllCountries(),a}return Object(N.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.fullCountryList;""!==this.state.countrySearch&&(t=t.filter((function(t){return t.name.includes(e.state.countrySearch)})));var a=t.map((function(e){var t="images/flags/".concat(e.code,".svg");return l.a.createElement("li",{key:e.code},l.a.createElement("img",{className:"flag",src:t}),l.a.createElement("span",{className:"country-name"},l.a.createElement(C.b,{to:e.code},e.name)))}));return l.a.createElement("div",{className:"country-list"},l.a.createElement("div",{className:"title"},"COVID-19",l.a.createElement("br",null),"dashboard"),l.a.createElement("div",{className:"container"},l.a.createElement("input",{className:"searchbar",placeholder:"Type a country...",onChange:function(t){e.setState({countrySearch:t.target.value})}}),l.a.createElement("ul",null,a)))}}]),t}(l.a.Component)),O=(a(169),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(E.a)(this,Object(D.a)(t).call(this,e))).state={},a}return Object(N.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.match.params.countryCode;return e?(h.hasCountry(e)||alert("There is no data for this country."),l.a.createElement("div",{className:"main"},l.a.createElement(j,null),l.a.createElement(w,{countryCode:e}))):l.a.createElement(y.a,{to:g.defaultCountryCode})}}]),t}(l.a.Component));function k(){return l.a.createElement(C.a,null,l.a.createElement(y.d,null,l.a.createElement(y.b,{path:"/:countryCode",component:O}),l.a.createElement(y.b,{path:"/",component:O})))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(){return(T=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("loading data..."),e.next=3,f();case 3:console.log("done loading data"),i.a.render(l.a.createElement(k,null),document.getElementById("root"));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){T.apply(this,arguments)}()},64:function(e,t,a){e.exports=a(170)},70:function(e,t,a){}},[[64,1,2]]]);
//# sourceMappingURL=main.354c1a83.chunk.js.map