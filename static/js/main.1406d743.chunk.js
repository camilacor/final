(this["webpackJsonpcrud-2"]=this["webpackJsonpcrud-2"]||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(6),E=a.n(r),u=(a(12),a(2)),c=a(3),i=function(e){return l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"VENDEDOR"),l.a.createElement("th",null,"CLIENTE"),l.a.createElement("th",null,"VARIEDAD DE PLANTA"))),l.a.createElement("tbody",null,e.users.length>0?e.users.map((function(t){return l.a.createElement("tr",{key:t.id},l.a.createElement("td",null,t.VENDEDOR),l.a.createElement("td",null,t.CLIENTE),l.a.createElement("td",null,t.VARIEDADDEPLANTA),l.a.createElement("td",null,l.a.createElement("button",{className:"button muted-button",onClick:function(){e.editRow(t)}},"Edit"),l.a.createElement("button",{className:"button muted-button",onClick:function(){return e.deleteUser(t.id)}},"Delete")))})):l.a.createElement("tr",null,l.a.createElement("td",{colSpan:3},"No users"))))},m=a(4),d=function(e){var t,a,n,r=Object(m.a)(),E=r.register,u=r.errors,c=r.handleSubmit;return l.a.createElement("form",{onSubmit:c((function(t,a){t.id=null,console.log(t),e.addUser(t),a.target.reset()}))},l.a.createElement("label",null,"VENDEDOR"),l.a.createElement("input",{type:"text",name:"VENDEDOR",ref:E({required:{value:!0,message:"Valor requerido"}})}),l.a.createElement("div",null,null===u||void 0===u||null===(t=u.name)||void 0===t?void 0:t.message),l.a.createElement("label",null,"CLIENTE"),l.a.createElement("input",{type:"text",name:"CLIENTE",ref:E({required:{value:!0,message:"Valor requerido"}})}),l.a.createElement("div",null,null===u||void 0===u||null===(a=u.username)||void 0===a?void 0:a.message),l.a.createElement("label",null,"VARIEDAD DE PLANTA"),l.a.createElement("input",{type:"text",name:"VARIEDADDEPLANTA",ref:E({required:{value:!0,message:"Valor requerido"}})}),l.a.createElement("div",null,null===u||void 0===u||null===(n=u.username)||void 0===n?void 0:n.message),l.a.createElement("button",{type:"submit"},"Add new user"))},o=function(e){var t,a,n=Object(m.a)({defaultValues:e.currentUser}),r=n.register,E=n.errors,u=n.handleSubmit;n.setValue;return l.a.createElement("form",{onSubmit:u((function(t,a){t.id=e.currentUser.id,console.log(t),e.updateUser(e.currentUser.id,t),a.target.reset()}))},l.a.createElement("label",null,"VENDEDOR"),l.a.createElement("input",{type:"text",name:"name",ref:r({required:{value:!0,message:"Valor requerido"}})}),l.a.createElement("div",null,null===E||void 0===E||null===(t=E.name)||void 0===t?void 0:t.message),l.a.createElement("label",null,"CLIENTE"),l.a.createElement("input",{type:"text",name:"CLIENTE",ref:r({required:{value:!0,message:"Valor requerido"}})}),l.a.createElement("label",null,"VARIEDAD DE PLANTAS"),l.a.createElement("input",{type:"text",name:"VARIEDAD DE PLANTAS",ref:r({required:{value:!0,message:"Valor requerido"}})}),l.a.createElement("div",null,null===E||void 0===E||null===(a=E.username)||void 0===a?void 0:a.message),l.a.createElement("button",{type:"submit"},"Edit user"),l.a.createElement("button",{onClick:function(){return e.setEditing(!1)},className:"button muted-button"},"Cancel"))},A=a(16);var s=function(){var e=[{id:Object(A.a)(),VENDEDOR:" CAMILA",CLIENTE:" Andres",VARIEDADDEPLANTA:"CLAVEL"},{id:Object(A.a)(),VENDEDOR:" ALFONSO CORDOBA",CLIENTE:" SANTIAGO",VARIEDADDEPLANTA:"ROSAS"},{id:Object(A.a)(),VENDEDOR:" LINA BERNAL",CLIENTE:" SEBASTIAN",VARIEDADDEPLANTA:"MARGARITAS"},{id:Object(A.a)(),VENDEDOR:" ANDREA RODRIGUEZ",CLIENTE:" LAURA",VARIEDADDEPLANTA:"ORQUIDIAS"},{id:Object(A.a)(),VENDEDOR:" CAMILA DIAZ",CLIENTE:" LINA",VARIEDADDEPLANTA:"GIRASOL"}],t=Object(n.useState)(e),a=Object(c.a)(t,2),r=a[0],E=a[1],m=Object(n.useState)(!1),s=Object(c.a)(m,2),D=s[0],N=s[1],R=Object(n.useState)({id:null,CLIENTE:"",VENDEDOR:"",VARIEDADDEPLANTA:""}),b=Object(c.a)(R,2),I=b[0],L=b[1];return l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"VENTA DE PLANTAS Camila C\xf3rdoba"),l.a.createElement("div",{className:"flex-row"},l.a.createElement("div",{className:"flex-large"},D?l.a.createElement("div",null,l.a.createElement("h2",null,"Edit user"),l.a.createElement(o,{setEditing:N,currentUser:I,updateUser:function(e,t){N(!1),E(r.map((function(a){return a.id===e?t:a})))}})):l.a.createElement("div",null,l.a.createElement("h2",null,"FORMULARIO DE VENTA"),l.a.createElement(d,{addUser:function(e){e.id=Object(A.a)(),console.log(e),E([].concat(Object(u.a)(r),[e]))}}))),l.a.createElement("div",{className:"flex-large"},l.a.createElement("h2",null,"REGISTROS"),l.a.createElement(i,{users:r,deleteUser:function(e){E(r.filter((function(t){return t.id!==e})))},editRow:function(e){N(!0),L({id:e.id,VENDEDOR:e.VENDEDOR,CLIENTE:e.CLIENTE,VARIEDADDEPLANTA:e.VARIEDADDEPLANTA})}}))))};E.a.render(l.a.createElement(s,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.1406d743.chunk.js.map