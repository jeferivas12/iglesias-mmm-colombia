(this["webpackJsonpiglesias-mmm-react"]=this["webpackJsonpiglesias-mmm-react"]||[]).push([[0],{38:function(e,t,a){},39:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(8),c=a.n(n),r=a(30),s=a.n(r),i=(a(38),a(3)),o=a(9),l=a(11),u=(a(39),a(2));function d(){return Object(u.jsx)("h1",{className:"titulo",children:"Iglesias MMM Colombia"})}function j(e){var t=[];return Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsxs)("select",{name:"Departamento",onChange:function(t){e.setDatosCiudad("Departamento"===t.target.value?e.iglesias:e.iglesias.filter((function(e){return e.Departamento===t.target.value}))),e.setDepartamento(t.target.value)},children:[Object(u.jsx)("option",{value:"Departamento",defaultValue:!0,children:"Departamento"}),e.listDep.map((function(e){return Object(u.jsx)("option",{value:e,children:e},e)}))]}),Object(u.jsxs)("select",{name:"Ciudad",onChange:function(t){e.setCiudad(t.target.value)},children:[Object(u.jsx)("option",{value:"Ciudad",defaultValue:!0,children:"ciudad"}),e.iglesias.map((function(a){return!t.includes(a.Ciudad)&a.Departamento===e.departamento?(t.push(a.Ciudad),Object(u.jsx)("option",{value:a.Ciudad,children:a.Ciudad},a.Ciudad)):""}))]}),Object(u.jsx)("button",{onClick:function(){e.setCrearIglesia(!e.crearIglesia)},children:"Agregar Iglesia"})]})}function b(e){var t=e.datos,a=e.setIgle,n=e.setDetail,c=e.detail,r="./"+t.Imagen,s=Object(u.jsxs)("p",{className:"detalleIglesia",children:["Barrio ",t.Barrio,", ",t.Ciudad," ",t.Departamento," ",Object(u.jsx)("br",{})," Telefono: ",t.Telefono]}),i=Object(u.jsxs)("div",{className:"iglesia",children:[Object(u.jsx)("img",{src:r,alt:"imagen de la iglesia"}),Object(u.jsxs)("h2",{children:["Iglesia ",t.nombre]}),Object(u.jsxs)("h4",{children:["Pastor ",t.pastor]}),Object(u.jsxs)("h4",{children:["Zona ",t.Zona||""]}),Object(u.jsxs)("p",{children:["Direcci\xf3n: ",t.direccion]}),s]});return Object(u.jsxs)("div",{className:"iglesia",children:[Object(u.jsx)("img",{src:r,alt:"imagen de la iglesia"}),Object(u.jsxs)("h2",{children:["Iglesia ",t.nombre]}),Object(u.jsxs)("h4",{children:["Pastor ",t.pastor]}),Object(u.jsxs)("p",{children:["Direcci\xf3n: ",t.direccion]}),Object(u.jsx)("p",{className:c?"cerrarButton":"verMas",onClick:function(){n(!c),a(i)},children:c?"X":"ver m\xe1s"})]})}function p(e){var t=e.datosCiudad,a=e.setIgle,n=e.setDetail,r=e.detail,s=e.ciudad,i=e.setDatosCiudad,o=e.iglesias;return c.a.useEffect((function(){i("Ciudad"===s?o:o.filter((function(e){return e.Ciudad===s})))}),[s,o]),Object(u.jsx)("div",{className:"Iglesias",children:t.map((function(e){return Object(u.jsx)(b,{datos:e,setIgle:a,setDetail:n,detail:r},e.nombre)}))})}var O=a(28),h=a.n(O);a(41);function f(e){var t=e.children;return h.a.createPortal(Object(u.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))}var m=a(31),g=a(20),x=Object(m.a)({apiKey:"AIzaSyB_lDYORlDxwYNGmlGc9eqObonfeQNJEfY",authDomain:"iglesia-f2d34.firebaseapp.com",projectId:"iglesia-f2d34",storageBucket:"iglesia-f2d34.appspot.com",messagingSenderId:"355704246458",appId:"1:355704246458:web:695d99af033e8ee4c67283",measurementId:"G-S3ME94JT9K"}),v=Object(g.d)(x),C=function(){var e=Object(o.a)(Object(i.a)().mark((function e(t,a,n,c,r,s,o,l){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(g.a)(Object(g.b)(v,"iglesias"),{nombre:t,pastor:a,Barrio:n,Ciudad:c,Departamento:r,direccion:s,Telefono:o,Zona:l,Imagen:"boston.jpg"});case 2:console.log(t+a+s),window.location.href=window.location.href;case 4:case"end":return e.stop()}}),e)})));return function(t,a,n,c,r,s,i,o){return e.apply(this,arguments)}}(),D=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){var t;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.prev=1,e.next=4,Object(g.c)(Object(g.b)(v,"iglesias"));case 4:e.sent.forEach((function(e){return t.push(e.data())})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:return e.abrupt("return",t);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),I=D(),S=[];function w(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(""),d=Object(l.a)(s,2),j=d[0],b=d[1],p=Object(n.useState)(""),O=Object(l.a)(p,2),h=O[0],f=O[1],m=Object(n.useState)(""),g=Object(l.a)(m,2),x=g[0],v=g[1],D=Object(n.useState)(""),I=Object(l.a)(D,2),w=I[0],N=I[1],k=Object(n.useState)(""),y=Object(l.a)(k,2),E=y[0],B=y[1],M=Object(n.useState)(""),T=Object(l.a)(M,2),P=T[0],Z=T[1],A=Object(n.useState)(""),G=Object(l.a)(A,2),J=G[0],V=G[1],z=Object(n.useState)(["null"]),Y=Object(l.a)(z,2),K=Y[0],R=Y[1],q=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){var t,a;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://www.datos.gov.co/resource/xdk5-pm3f.json");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,console.log(a),R(a),a.map((function(e){S.includes(e.departamento)||S.push(e.departamento)})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error("Error al obtener los datos:",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){q()}),[]);return Object(u.jsxs)("div",{className:"agregar",children:[Object(u.jsx)("h3",{children:"Agregar una nueva iglesia"}),Object(u.jsxs)("form",{className:"agregar-form",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{for:"departamento",children:"Departamento:"}),Object(u.jsxs)("select",{name:"Departamento",id:"departamento",onChange:function(e){return B(e.target.value)},children:[Object(u.jsx)("option",{value:E,defaultValue:!0,children:"Departamento"}),S.map((function(e){return Object(u.jsx)("option",{value:e,children:e},e)}))]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{for:"ciudad",children:"Ciudad:"}),Object(u.jsxs)("select",{name:"Ciudad",id:"ciudad",onChange:function(e){return N(e.target.value)},children:[Object(u.jsx)("option",{value:w,defaultValue:!0,children:"Ciudad"}),K.map((function(e){if(e.departamento===E)return Object(u.jsx)("option",{value:e.municipio,children:e.municipio},e.municipio)}))]})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{for:"nombre",children:"Nombre:"}),Object(u.jsx)("input",{type:"text",id:"nombre",value:c,placeholder:"Nombre iglesia",onChange:function(e){return r(e.target.value)}})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{for:"barrio",children:"Barrio:"}),Object(u.jsx)("input",{type:"text",id:"barrio",value:j,placeholder:"Barrio",onChange:function(e){return b(e.target.value)}})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{for:"direccion",children:"Direcci\xf3n:"}),Object(u.jsx)("input",{type:"text",id:"direccion",value:h,placeholder:"Direcci\xf3n",onChange:function(e){return f(e.target.value)}})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{for:"pastor",children:"Pastor:"}),Object(u.jsx)("input",{type:"text",id:"pastor",value:x,placeholder:"Pastor",onChange:function(e){return v(e.target.value)}})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{for:"telefono",children:"Tel\xe9fono:"}),Object(u.jsx)("input",{type:"number",id:"telefono",value:P,placeholder:"Telefono",onChange:function(e){return Z(e.target.value)}})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("label",{for:"zona",children:"Zona:"}),Object(u.jsx)("input",{type:"number",id:"zona",value:J,placeholder:"Zona",onChange:function(e){return V(e.target.value)}})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"btn guardar",type:"submit",onClick:function(t){t.preventDefault(),e.crearIglesia(!1),C(c,x,j,w,E,h,P,J),r("")},children:"Guardar"}),Object(u.jsx)("button",{className:"btn cancelar",onClick:function(){e.crearIglesia(!1)},children:"Cancelar"})]})]})]})}var N=function(){var e=c.a.useState("Departamento"),t=Object(l.a)(e,2),a=t[0],n=t[1],r=c.a.useState("Ciudad"),s=Object(l.a)(r,2),b=s[0],O=s[1],h=c.a.useState(Object(u.jsx)("h1",{children:"Esto es otra prueba"})),m=Object(l.a)(h,2),g=m[0],x=m[1],v=c.a.useState(!1),C=Object(l.a)(v,2),D=C[0],S=C[1],N=c.a.useState([]),k=Object(l.a)(N,2),y=k[0],E=k[1],B=c.a.useState([]),M=Object(l.a)(B,2),T=M[0],P=M[1],Z=c.a.useState(!1),A=Object(l.a)(Z,2),G=A[0],J=A[1],V=c.a.useState([]),z=Object(l.a)(V,2),Y=z[0],K=z[1],R=[],q=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){var t;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I;case 2:t=e.sent,K(t),console.log("iglesias: "+Y),t.forEach((function(e){R.includes(e.Departamento)||R.push(e.Departamento)})),P(R),console.log("hola");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.useEffect((function(){console.log("hola useEffect1"),q(),console.log("chao useEffect1")}),[Y]),Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(d,{}),Object(u.jsx)(j,{iglesias:Y,setDepartamento:n,listDep:T.sort(),setCiudad:O,setCrearIglesia:J,crearIglesia:G,departamento:a,setDatosCiudad:E}),Object(u.jsx)(p,{datosCiudad:y,setIgle:x,setDetail:S,detail:D,ciudad:b,setDatosCiudad:E,iglesias:Y}),!!G&&Object(u.jsx)(f,{children:Object(u.jsx)(w,{crearIglesia:J,setIglesias:K})}),!!D&&Object(u.jsx)(f,{children:g})]})};s.a.createRoot(document.getElementById("root")).render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(N,{})}))}},[[42,1,2]]]);
//# sourceMappingURL=main.8feaa753.chunk.js.map