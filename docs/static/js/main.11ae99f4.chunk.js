(this.webpackJsonpcovid19dasboard=this.webpackJsonpcovid19dasboard||[]).push([[0],{165:function(e,t,a){},166:function(e,t,a){},169:function(e,t,a){},170:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a.n(n),s=a(22),c=a(0),l=a.n(c),o=a(60),i=a.n(o),u=a(5),d=a(6),h=function(){function e(t,a){Object(u.a)(this,e),this.code=t,this.name=a,this.recordSeries=[],this.population=null,this.mortalityRate=null}return Object(d.a)(e,[{key:"setRecordSeries",value:function(e){this.recordSeries=e;for(var t=0;t<this.recordSeries.length;t++)this.recordSeries[t].date=new Date(this.recordSeries[t].date)}},{key:"getCases",value:function(){for(var e=0,t=0;t<this.recordSeries.length;t++)e+=this.recordSeries[t].cases;return e}},{key:"getDeaths",value:function(){for(var e=0,t=0;t<this.recordSeries.length;t++)e+=this.recordSeries[t].deaths;return e}},{key:"getCrudeDeathsPerDay",value:function(){return null===this.mortalityRate?null:~~(this.population*this.mortalityRate/1e3/365.25)}},{key:"getCasesPerMillion",value:function(){return this.getCases()/(this.population/1e6)}},{key:"getDeathsPerMillion",value:function(){return this.getDeaths()/(this.population/1e6)}},{key:"getDataAge",value:function(){var e=this.recordSeries[this.recordSeries.length-1].date,t=new Date;return t.setUTCHours(12,0,0,0),(t-e)/864e5}},{key:"getCasesStartingNDaysAgoDuringMDays",value:function(e,t){var a=new Date(Date.now()-1e3*e*3600*24);a.setUTCHours(0,0,1,0);for(var n=new Date(a.getTime()+1e3*t*3600*24),r=0,s=this.recordSeries.length-1;s>=0;s--){var c=this.recordSeries[s];c.date>a&&c.date<n&&(r+=c.cases)}return r}},{key:"getDeathsStartingNDaysAgoDuringMDays",value:function(e,t){var a=new Date(Date.now()-1e3*e*3600*24);a.setUTCHours(0,0,1,0);for(var n=new Date(a.getTime()+1e3*t*3600*24),r=0,s=this.recordSeries.length-1;s>=0;s--){var c=this.recordSeries[s];c.date>a&&c.date<n&&(r+=c.deaths)}return r}},{key:"getCasesSeries",value:function(){for(var e={},t=0;t<this.recordSeries.length;t++){var a=this.recordSeries[t],n=a.date.getUTCFullYear(),r=a.date.getUTCMonth()+1;r=r<10?"0".concat(r):r;var s=a.date.getUTCDate();s=s<10?"0".concat(s):s,e["".concat(n,"-").concat(r,"-").concat(s)]=a.cases}return e}},{key:"getCasesSeriesPerMillion",value:function(){for(var e={},t=0;t<this.recordSeries.length;t++){var a=this.recordSeries[t],n=a.date.getUTCFullYear(),r=a.date.getUTCMonth()+1;r=r<10?"0".concat(r):r;var s=a.date.getUTCDate();s=s<10?"0".concat(s):s,e["".concat(n,"-").concat(r,"-").concat(s)]=a.cases/(this.population/1e6)}return e}},{key:"getCumulatedCasesSeries",value:function(){for(var e={},t=0,a=0;a<this.recordSeries.length;a++){var n=this.recordSeries[a];t+=n.cases;var r=n.date.getUTCFullYear(),s=n.date.getUTCMonth()+1;s=s<10?"0".concat(s):s;var c=n.date.getUTCDate();c=c<10?"0".concat(c):c,e["".concat(r,"-").concat(s,"-").concat(c)]=t}return e}},{key:"getCumulatedCasesSeriesPerMillion",value:function(){for(var e={},t=0,a=0;a<this.recordSeries.length;a++){var n=this.recordSeries[a];t+=n.cases;var r=n.date.getUTCFullYear(),s=n.date.getUTCMonth()+1;s=s<10?"0".concat(s):s;var c=n.date.getUTCDate();c=c<10?"0".concat(c):c,e["".concat(r,"-").concat(s,"-").concat(c)]=t/(this.population/1e6)}return e}},{key:"getDeathsSeries",value:function(){for(var e={},t=0;t<this.recordSeries.length;t++){var a=this.recordSeries[t],n=a.date.getUTCFullYear(),r=a.date.getUTCMonth()+1;r=r<10?"0".concat(r):r;var s=a.date.getUTCDate();s=s<10?"0".concat(s):s,e["".concat(n,"-").concat(r,"-").concat(s)]=a.deaths}return e}},{key:"getDeathsSeriesPerMillion",value:function(){for(var e={},t=0;t<this.recordSeries.length;t++){var a=this.recordSeries[t],n=a.date.getUTCFullYear(),r=a.date.getUTCMonth()+1;r=r<10?"0".concat(r):r;var s=a.date.getUTCDate();s=s<10?"0".concat(s):s,e["".concat(n,"-").concat(r,"-").concat(s)]=a.deaths/(this.population/1e6)}return e}},{key:"getCumulatedDeathsSeries",value:function(){for(var e={},t=0,a=0;a<this.recordSeries.length;a++){var n=this.recordSeries[a];t+=n.deaths;var r=n.date.getUTCFullYear(),s=n.date.getUTCMonth()+1;s=s<10?"0".concat(s):s;var c=n.date.getUTCDate();c=c<10?"0".concat(c):c,e["".concat(r,"-").concat(s,"-").concat(c)]=t}return e}},{key:"getCumulatedDeathsSeriesPerMillion",value:function(){for(var e={},t=0,a=0;a<this.recordSeries.length;a++){var n=this.recordSeries[a];t+=n.deaths;var r=n.date.getUTCFullYear(),s=n.date.getUTCMonth()+1;s=s<10?"0".concat(s):s;var c=n.date.getUTCDate();c=c<10?"0".concat(c):c,e["".concat(r,"-").concat(s,"-").concat(c)]=t/(this.population/1e6)}return e}}]),e}(),m=new(function(){function e(){Object(u.a)(this,e),this.collection={}}return Object(d.a)(e,[{key:"addCountry",value:function(e){this.collection[e.code]=e}},{key:"getCountry",value:function(e){return e in this.collection?this.collection[e]:null}},{key:"hasCountry",value:function(e){return e.toLowerCase()in this.collection}},{key:"getAllCountries",value:function(){return Object.values(this.collection).sort((function(e,t){return e.name<t.name?-1:1}))}}]),e}()),g={defaultCountryCode:"ch"};function p(){return v.apply(this,arguments)}function v(){return(v=Object(s.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://www.geoplugin.net/json.gp");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,g.defaultCountryCode=a.geoplugin_countryCode.toLowerCase(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function b(){return(b=Object(s.a)(r.a.mark((function e(){var t,a,n,s,c,l,o,i,u,d,g,v,b,f,y,C,E,D,w,N;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:return e.next=4,fetch("./data/country-by-abbreviation.json");case 4:return t=e.sent,e.next=7,t.json();case 7:return a=e.sent,e.next=10,fetch("./data/country-by-population.json");case 10:return n=e.sent,e.next=13,n.json();case 13:return s=e.sent,c={},s.forEach((function(e){c[e.country.toLowerCase()]=parseInt(e.population)||null})),e.next=18,fetch("./data/mortality-rate-per-country-2017.json");case 18:return l=e.sent,e.next=21,l.json();case 21:return o=e.sent,i=new Date,u=(u=i.getUTCDate())<10?"0".concat(u):"".concat(u),d=(d=i.getUTCMonth()+1)<10?"0".concat(d):"".concat(d),g="".concat(i.getUTCFullYear()),v=null,b=null,e.prev=30,e.prev=31,e.next=34,fetch("./data/covid19-per-country-".concat(u,"-").concat(d,"-").concat(g,".json"));case 34:return v=e.sent,e.next=37,v.json();case 37:b=e.sent,e.next=48;break;case 40:return e.prev=40,e.t0=e.catch(31),e.next=44,fetch("https://raw.githubusercontent.com/jonathanlurie/covid19dashboard/master/docs/data/covid19-per-country-".concat(u,"-").concat(d,"-").concat(g,".json"));case 44:return v=e.sent,e.next=47,v.json();case 47:b=e.sent;case 48:e.next=76;break;case 50:return e.prev=50,e.t1=e.catch(30),console.log("Fallback on the last report available"),e.next=55,fetch("./data/config.json");case 55:return f=e.sent,e.next=58,f.json();case 58:return y=e.sent,e.prev=59,e.next=62,fetch("./data/".concat(y.lastFile));case 62:return v=e.sent,e.next=65,v.json();case 65:b=e.sent,e.next=76;break;case 68:return e.prev=68,e.t2=e.catch(59),e.next=72,fetch("https://raw.githubusercontent.com/jonathanlurie/covid19dashboard/master/docs/data/".concat(y.lastFile));case 72:return v=e.sent,e.next=75,v.json();case 75:b=e.sent;case 76:for(C=0;C<a.length;C++)E=a[C].country.toLowerCase(),D=a[C].abbreviation.toLowerCase(),w=c[E],(N=new h(D,E)).population=w,D.toUpperCase()in b&&N.setRecordSeries(b[D.toUpperCase()]),D.toLowerCase()in o&&(N.mortalityRate=o[D.toLowerCase()]),m.addCountry(N);case 77:case"end":return e.stop()}}),e,null,[[30,50],[31,40],[59,68]])})))).apply(this,arguments)}var f=function(){return b.apply(this,arguments)},y=(a(70),a(21)),C=a(10),E=a(16),D=a(15),w=a(17),N=(a(13),a(23)),S=(a(165),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(E.a)(this,Object(D.a)(t).call(this,e))).state={},a}return Object(w.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.countryCode,t=m.getCountry(e);console.log(t);var a=t.getCasesSeries(),n=t.getCumulatedCasesSeries(),r=t.getDeathsSeries(),s=t.getCumulatedDeathsSeries(),c=t.getCasesSeriesPerMillion(),o=t.getCumulatedCasesSeriesPerMillion(),i=t.getDeathsSeriesPerMillion(),u=t.getCumulatedDeathsSeriesPerMillion(),d=null,h=0;0===Object.keys(a).length?d=l.a.createElement("div",{className:"warning-message"},"\u26a0\ufe0f There is no record for this country"):(h=t.getDataAge(),console.log("dataAge",h),d=h<.5?l.a.createElement("div",{className:"info-message"},"\u2705 These numbers are fresh from the day"):h>=.5&&h<=1?l.a.createElement("div",{className:"warning-message"},"\u26a0\ufe0f These numbers are from yesterday, they may not reflect today's reality"):l.a.createElement("div",{className:"warning-message"},"\u26a0\ufe0f These numbers are from ",~~h," days ago, they may not reflect todays reality"));var g={labels:Object.keys(a),datasets:[{label:"COVID-19 cases",data:Object.values(a),fill:!1,pointRadius:1.7,pointHitRadius:10,borderColor:"rgba(255, 200, 0, 1)",lineTension:.2,backgroundColor:"rgba(255, 200, 0, 1)"},{label:"COVID-19 deaths",data:Object.values(r),fill:!1,pointRadius:1.7,pointHitRadius:10,borderColor:"rgba(200, 0, 0, 1)",lineTension:.2,backgroundColor:"rgba(200, 0, 0, 1)"}]},p={labels:Object.keys(a),datasets:[{label:"COVID-19 cumulated cases",data:Object.values(n),fill:!1,pointRadius:1.7,pointHitRadius:10,borderColor:"rgba(255, 200, 0, 1)",lineTension:.2,backgroundColor:"rgba(255, 200, 0, 1)"},{label:"COVID-19 deaths",data:Object.values(s),fill:!1,pointRadius:1.7,pointHitRadius:10,borderColor:"rgba(200, 0, 0, 1)",lineTension:.2,backgroundColor:"rgba(200, 0, 0, 1)"}]},v={labels:Object.keys(a),datasets:[{label:"COVID-19 cases per million",data:Object.values(c),fill:!1,pointRadius:1.7,pointHitRadius:10,borderColor:"rgba(255, 200, 0, 1)",lineTension:.2,backgroundColor:"rgba(255, 200, 0, 1)"},{label:"COVID-19 deaths per million",data:Object.values(i),fill:!1,pointRadius:1.7,pointHitRadius:10,borderColor:"rgba(200, 0, 0, 1)",lineTension:.2,backgroundColor:"rgba(200, 0, 0, 1)"}]},b={labels:Object.keys(a),datasets:[{label:"COVID-19 cumulated cases",data:Object.values(o),fill:!1,pointRadius:1.7,pointHitRadius:10,borderColor:"rgba(255, 200, 0, 1)",lineTension:.2,backgroundColor:"rgba(255, 200, 0, 1)"},{label:"COVID-19 deaths",data:Object.values(u),fill:!1,pointRadius:1.7,pointHitRadius:10,borderColor:"rgba(200, 0, 0, 1)",lineTension:.2,backgroundColor:"rgba(200, 0, 0, 1)"}]},f={scales:{yAxes:[{type:"logarithmic"}]}},y=h<.5?0:Math.ceil(h),C=t.getCasesStartingNDaysAgoDuringMDays(2+y,3),E=C>t.getCasesStartingNDaysAgoDuringMDays(5+y,3)?l.a.createElement("img",{className:"evolution-arrow",src:"images/arrow-red-up.png",title:"Higher than the 3 previous days"}):l.a.createElement("img",{className:"evolution-arrow",src:"images/arrow-green-down.png",title:"Lower than the previous 3 days"}),D=t.getDeathsStartingNDaysAgoDuringMDays(2+y,3),w=D>t.getDeathsStartingNDaysAgoDuringMDays(5+y,3)?l.a.createElement("img",{className:"evolution-arrow",src:"images/arrow-red-up.png",title:"Higher than the 3 previous days"}):l.a.createElement("img",{className:"evolution-arrow",src:"images/arrow-green-down.png",title:"Lower than the previous 3 days"}),S=t.getCrudeDeathsPerDay(),j=null;return S&&(j=l.a.createElement("div",{className:"crude-deaths-info"},"\u2139\ufe0f For comparison, in 2017, ",l.a.createElement("span",{style:{textTransform:"capitalize",fontWeight:800}},t.name)," was counting an average of ",l.a.createElement("span",{style:{fontWeight:800}},S)," deaths per day ",l.a.createElement("a",{style:{color:"#67abf3",textDecoration:"none"},href:"https://www.cia.gov/library/publications/the-world-factbook/rankorder/2066rank.html"},"[source]"))),l.a.createElement("div",{className:"dashboard"},l.a.createElement("div",{className:"country-name"},l.a.createElement("img",{className:"flag",src:"images/flags/".concat(e,".svg")}),l.a.createElement("h1",null,t.name)),d,l.a.createElement("div",{className:"info-grid"},l.a.createElement("div",{className:"cell"},l.a.createElement("div",{className:"cell-inner",style:{float:"right"}},l.a.createElement("p",null,l.a.createElement("span",{className:"cell-title",style:{color:"#ffc800"}},"# cases")),l.a.createElement("p",{className:"cell-section"},l.a.createElement("span",{className:"cell-subtitle"},"(all time)"),l.a.createElement("br",null),l.a.createElement("span",{className:"cell-score"},t.getCases())),l.a.createElement("p",{className:"cell-section"},l.a.createElement("span",{className:"cell-subtitle"},"(all time per million)"),l.a.createElement("br",null),l.a.createElement("span",{className:"cell-score"},~~(100*t.getCasesPerMillion())/100)),l.a.createElement("p",{className:"cell-section"},l.a.createElement("span",{className:"cell-subtitle"},"(in the last day)"),l.a.createElement("br",null),l.a.createElement("span",{className:"cell-score"},t.getCasesStartingNDaysAgoDuringMDays(y,1))),l.a.createElement("p",{className:"cell-section"},l.a.createElement("span",{className:"cell-subtitle"},"(in the last 3 days)"),l.a.createElement("br",null),l.a.createElement("span",{className:"cell-score"},C),E))),l.a.createElement("div",{className:"cell"},l.a.createElement("div",{className:"cell-inner",style:{float:"left"}},l.a.createElement("p",null,l.a.createElement("span",{className:"cell-title",style:{color:"#c80000"}},"# deaths")),l.a.createElement("p",{className:"cell-section"},l.a.createElement("span",{className:"cell-subtitle"},"(all time)"),l.a.createElement("br",null),l.a.createElement("span",{className:"cell-score"},t.getDeaths())),l.a.createElement("p",{className:"cell-section"},l.a.createElement("span",{className:"cell-subtitle"},"(all time per million)"),l.a.createElement("br",null),l.a.createElement("span",{className:"cell-score"},~~(100*t.getDeathsPerMillion())/100)),l.a.createElement("p",{className:"cell-section"},l.a.createElement("span",{className:"cell-subtitle"},"(in the last day)"),l.a.createElement("br",null),l.a.createElement("span",{className:"cell-score"},t.getDeathsStartingNDaysAgoDuringMDays(y,1))),l.a.createElement("p",{className:"cell-section"},l.a.createElement("span",{className:"cell-subtitle"},"(in the last 3 days)"),l.a.createElement("br",null),l.a.createElement("span",{className:"cell-score"},D),w)))),j,l.a.createElement("div",{className:"plot-title"},"COVID-19 cases and deaths over time (linear scale)"),l.a.createElement(N.a,{data:g,options:{},height:100}),l.a.createElement("div",{className:"plot-title"},"COVID-19 cumulated cases and deaths over time (logarithmic scale)"),l.a.createElement(N.a,{data:p,options:f,height:100}),l.a.createElement("div",{className:"plot-title"},"COVID-19 cases and deaths over time per million population (linear scale)"),l.a.createElement(N.a,{data:v,options:{},height:100}),l.a.createElement("div",{className:"plot-title"},"COVID-19 cumulated cases and deaths over time per milion population (logarithmic scale)"),l.a.createElement(N.a,{data:b,options:f,height:100}),l.a.createElement("div",{className:"credits"},l.a.createElement("p",null,"Data from the ",l.a.createElement("a",{href:"https://www.ecdc.europa.eu/en/publications-data/download-todays-data-geographic-distribution-covid-19-cases-worldwide"},"European Centre for Disease Prevention and Control")),l.a.createElement("p",null,"\u2014 Made by ",l.a.createElement("a",{href:"https://twitter.com/jonathanlurie"},"@jonathanlurie")," :: ",l.a.createElement("a",{href:"https://github.com/jonathanlurie/covid19dashboard"},"fork me on GitHub")," \u2014")))}}]),t}(l.a.Component)),j=(a(166),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(E.a)(this,Object(D.a)(t).call(this,e))).state={countrySearch:""},a.fullCountryList=m.getAllCountries(),a}return Object(w.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.fullCountryList;""!==this.state.countrySearch&&(t=t.filter((function(t){return t.name.includes(e.state.countrySearch)})));var a=t.map((function(e){var t="images/flags/".concat(e.code,".svg");return l.a.createElement("li",{key:e.code},l.a.createElement("img",{className:"flag",src:t}),l.a.createElement("span",{className:"country-name"},l.a.createElement(y.b,{to:e.code},e.name)))}));return l.a.createElement("div",{className:"country-list"},l.a.createElement("div",{className:"title"},"COVID-19",l.a.createElement("br",null),"dashboard"),l.a.createElement("div",{className:"container"},l.a.createElement("input",{className:"searchbar",placeholder:"Type a country...",onChange:function(t){e.setState({countrySearch:t.target.value})}}),l.a.createElement("ul",null,a)))}}]),t}(l.a.Component)),k=(a(169),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(E.a)(this,Object(D.a)(t).call(this,e))).state={},a}return Object(w.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.match.params.countryCode;return e?(m.hasCountry(e)||alert("There is no data for this country."),l.a.createElement("div",{className:"main"},l.a.createElement(j,null),l.a.createElement(S,{countryCode:e}))):l.a.createElement(C.a,{to:g.defaultCountryCode})}}]),t}(l.a.Component));function O(){return l.a.createElement(y.a,null,l.a.createElement(C.d,null,l.a.createElement(C.b,{path:"/:countryCode",component:k}),l.a.createElement(C.b,{path:"/",component:k})))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(){return(T=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("loading data..."),e.next=3,f();case 3:console.log("done loading data"),i.a.render(l.a.createElement(O,null),document.getElementById("root"));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){T.apply(this,arguments)}()},64:function(e,t,a){e.exports=a(170)},70:function(e,t,a){}},[[64,1,2]]]);
//# sourceMappingURL=main.11ae99f4.chunk.js.map