(this["webpackJsonpemployee-directory-react"]=this["webpackJsonpemployee-directory-react"]||[]).push([[0],{10:function(e,t,a){e.exports=a(1304)},1303:function(e,t,a){},1304:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),o=a.n(l),c=a(1),s=a(2),m=a(3),i=a(4),u=(a(15),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props;return r.a.createElement("tr",null,r.a.createElement("td",{className:"img-container"},r.a.createElement("img",{alt:e.name,src:e.image})),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.phone),r.a.createElement("td",null,r.a.createElement("a",{href:"mailto:"+e.email},e.email)),r.a.createElement("td",null,e.dob))}}]),a}(n.Component)),h=(a(16),a(17));var d=function(e){return 1===e.status?r.a.createElement("span",null,r.a.createElement(h,{name:"sort-alpha-asc",size:"lg",style:{color:"green"}})):2===e.status?r.a.createElement("span",null,r.a.createElement(h,{name:"sort-alpha-desc",size:"lg",style:{color:"red"}})):0===e.status?r.a.createElement("span",null," "):void 0};a(21);var p=function(e){return r.a.createElement("div",{className:"wrapper"},e.children)};a(22);var f=function(e){return r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"Employees Directory"),r.a.createElement("h4",{id:"textBlock"},"Click on carrots to sort results by heading or use the seach box to narrow your search! "),r.a.createElement("figure",null,e.children))},E=a(9),y=a.n(E)()(),C=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={employees:y,searchParam:"",sortColumn:[0,0,0,0]},e.handleSort=function(t){var a=t.target.innerHTML,n=a.slice(0,a.search("<")-1).toLowerCase(),r=["name","phone","email","dob"].indexOf(n),l=e.state.sortColumn,o=e.state.searchParam,c=[];0===l[r]?(l=[0,0,0,0],c=e.state.employees.sort((function(e,t){return e[n]>t[n]?1:-1})),l[r]=1):1===l[r]?(l=[0,0,0,0],c=e.state.employees.sort((function(e,t){return e[n]<t[n]?1:-1})),l[r]=2):2===l[r]&&(l=[0,0,0,0],c=y,o="",document.querySelector("input").value=""),e.setState({employees:c,sortColumn:l,searchParam:o})},e.handleSearch=function(t){var a=t.target.value;if(a.length>0){var n=y.filter((function(e){return e.name.toLowerCase().indexOf(a.toLowerCase())>=0||e.email.toLowerCase().indexOf(a.toLowerCase())>=0||e.phone.toLowerCase().indexOf(a.toLowerCase())>=0||e.dob.toLowerCase().indexOf(a.toLowerCase())>=0}));e.setState({employees:n,searchParam:a})}else e.setState({employees:y,searchParam:""})},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(f,null,r.a.createElement("input",{type:"text",placeholder:"Search",onChange:this.handleSearch})),r.a.createElement(p,null,r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Image"),r.a.createElement("th",{onClick:this.handleSort},"Name ",r.a.createElement(d,{status:this.state.sortColumn[0]})),r.a.createElement("th",{onClick:this.handleSort},"Phone ",r.a.createElement(d,{status:this.state.sortColumn[1]})),r.a.createElement("th",{onClick:this.handleSort},"Email ",r.a.createElement(d,{status:this.state.sortColumn[2]})),r.a.createElement("th",{onClick:this.handleSort},"DOB ",r.a.createElement(d,{status:this.state.sortColumn[3]})))),r.a.createElement("tbody",null,this.state.employees.map((function(e,t){return r.a.createElement(u,{employeeId:e.id,image:e.image,name:e.name,phone:e.phone,email:e.email,dob:e.dob,key:"employee-"+t})}))))))}}]),a}(n.Component);a(1303);o.a.render(r.a.createElement(C,null),document.getElementById("root"))},15:function(e,t,a){},16:function(e,t,a){},21:function(e,t,a){},22:function(e,t,a){},9:function(e,t,a){var n=a(5),r=a(1301);e.exports=function(){for(var e=[],t=1;t<25;t++)e.push({id:t,name:n.name.findName(),email:n.internet.email(),phone:n.phone.phoneNumberFormat(),dob:r().set({year:r().get("year")-Math.floor(47*Math.random())-18,month:Math.floor(12*Math.random()),date:Math.floor(30*Math.random())}).format("YYYY-MM-DD"),image:n.image.avatar()});return e}}},[[10,1,2]]]);
//# sourceMappingURL=main.016d0aa0.chunk.js.map