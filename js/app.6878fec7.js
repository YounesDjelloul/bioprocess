(function(e){function t(t){for(var a,i,s=t[0],l=t[1],c=t[2],u=0,p=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},o={app:0},r=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d216214":"9b6331c5","chunk-2d216257":"3e772cf8","chunk-772201d9":"9ee912ce"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=o[e]=[t,a]}));t.push(n[2]=a);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var c=new Error;r=function(t){l.onerror=l.onload=null,clearTimeout(u);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",c.name="ChunkLoadError",c.type=a,c.request=r,n[1](c)}o[e]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/bioprocess/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1942:function(e,t,n){"use strict";n("605e")},"1b20":function(e,t,n){},"26b0":function(e,t,n){},"386e":function(e,t,n){},"3cbe":function(e,t,n){},"3e9d":function(e,t,n){"use strict";n("1b20")},4579:function(e,t,n){"use strict";n("3cbe")},"4dcf":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],i=(n("5c0b"),n("2877")),s={},l=Object(i["a"])(s,o,r,!1,null,null,null),c=l.exports,u=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("FirstSection"),n("AboutUs"),n("Footer")],1)},p=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"sub-container"},[n("Header"),n("div",[n("h3",[e._v("LOREM IPSUM DOLOR SIT CONSECTETUR")]),n("h1",[e._v("Medical Testing")]),n("button",[n("router-link",{attrs:{to:"/demande"}},[e._v("DEMANDE MAINTENANT")]),n("i",{})],1)])],1)])},m=[],v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header"},[a("button",{on:{click:function(t){e.showsidebar=!0}}},[a("i",{staticClass:"fas fa-bars"})]),e._m(0),a("ul",[a("router-link",{attrs:{tag:"li",to:"/"}},[e._v("ACCUEIL")]),e._m(1),a("router-link",{attrs:{tag:"li",to:"/Products"}},[e._v("PRODUITS")]),a("router-link",{attrs:{tag:"li",to:"/demande"}},[e._v("DEMANDER")]),a("li",{on:{click:function(t){e.display=!e.display}}},[e._v("CONTACTER"),a("i",{staticClass:"fas fa-angle-down"})])],1),a("transition",{attrs:{name:"fade"}},[e.display?a("div",{staticClass:"contact-list-container",on:{click:function(t){e.display=!1}}},[a("div",{staticClass:"contact-list",on:{click:function(t){t.stopPropagation(),e.display=!0}}},[a("ul",[a("li",[a("span",[a("i",{staticClass:"fab fa-facebook"}),e._v("FACEBOOK")]),a("span",{staticStyle:{display:"none"}},[e._v("...")])]),a("li",[a("span",[a("i",{staticClass:"fas fa-fax"}),e._v("FAX")]),a("span",{staticStyle:{display:"none"}},[e._v("...")])]),a("li",[a("span",[a("i",{staticClass:"fas fa-envelope-open-text"}),e._v("EMAIL")]),a("span",{staticStyle:{display:"none"}},[e._v("...")])]),a("li",[a("span",[a("i",{staticClass:"fas fa-phone-alt"}),e._v("TELEPHONE")]),a("span",{staticStyle:{display:"none"}},[e._v("...")])])])])]):e._e()]),a("transition",{attrs:{name:"fade"}},[e.showsidebar?a("div",{staticClass:"sidebar-container",on:{click:function(t){e.showsidebar=!1}}},[a("div",{staticClass:"sidebar",on:{click:function(t){t.stopPropagation(),e.showsidebar=!0}}},[a("div",{staticClass:"logo"},[a("span",[e._v("BIO")]),a("span",[a("img",{attrs:{src:n("cf05")}})]),a("span",[e._v("PROCESS")])]),a("ul",[a("router-link",{attrs:{tag:"li",to:"/"}},[a("a",{attrs:{href:""}},[a("i",{staticClass:"fas fa-home"}),e._v("ACCUEIL")])]),a("router-link",{attrs:{tag:"li",to:"#aboutus"}},[a("a",{attrs:{href:""}},[a("i",{staticClass:"fas fa-info-circle"}),e._v("DE NOUS")])]),a("router-link",{attrs:{tag:"li",to:"/Products"}},[a("a",{attrs:{href:""}},[a("i",{staticClass:"fas fa-th-list"}),e._v("PRODUITS")])]),a("router-link",{attrs:{tag:"li",to:"/demande"}},[a("a",{attrs:{href:""}},[a("i",{staticClass:"fas fa-paper-plane"}),e._v("DEMANDER")])]),a("li",{on:{click:function(t){e.display=!e.display}}},[a("i",{staticClass:"fas fa-question"}),e._v("CONTACTER"),a("i",{staticClass:"fas fa-caret-down"})])],1)])]):e._e()])],1)},_=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"logo"},[a("span",[e._v("BIO")]),a("span",[a("img",{attrs:{src:n("cf05")}})]),a("span",[e._v("PROCESS")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("a",{staticClass:"aboutus_a",attrs:{href:"/chemical-project-frontend/#aboutus"}},[e._v("DE NOUS")])])}],h={name:"Header",data:function(){return{display:!1,showsidebar:!1}}},g=h,y=(n("7dc1"),Object(i["a"])(g,v,_,!1,null,null,null)),w=y.exports,b={name:"FirstSection",components:{Header:w}},C=b,I=(n("8de0"),n("3e9d"),Object(i["a"])(C,f,m,!1,null,"37edc711",null)),S=I.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",attrs:{id:"aboutus"}},[n("div",{staticClass:"right-text-container"},[n("span",[e._v("Qui sommes-nous ...")]),n("p",[e._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")]),n("router-link",{attrs:{tag:"a",to:"/Products"}},[n("button",[e._v("NOS PRODUITS")]),n("i",{staticClass:"fas fa-angle-right"})])],1)])},E=[],A={name:"AboutUs"},P=A,x=(n("aab3"),Object(i["a"])(P,k,E,!1,null,"7ab1c2b3",null)),D=x.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[e._v(" copyright © 2021 all rights reserved ")])},N=[],T={name:"Footer"},$=T,F=(n("614f"),Object(i["a"])($,O,N,!1,null,"d391d7aa",null)),R=F.exports,j={name:"Home",components:{FirstSection:S,AboutUs:D,Footer:R}},M=j,U=Object(i["a"])(M,d,p,!1,null,null,null),q=U.exports,H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("DemandeCompo")},z=[],L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"header-container"},[n("Header")],1),!0===e.InInfo?n("DemandeInfo",{on:{MakeInProduct:e.MakeInProduct}}):e._e(),!0===e.InProduct?n("DemandeProduct",{on:{SendDemande:e.SendDemande}}):e._e()],1)},Q=[],V=(n("d3b7"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",[e._v("Entrez vos Informations")]),n("form",{attrs:{method:"POST"}},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.AllInfo.fullname,expression:"AllInfo.fullname"}],attrs:{type:"text",placeholder:"Entrez votre nom complet"},domProps:{value:e.AllInfo.fullname},on:{input:function(t){t.target.composing||e.$set(e.AllInfo,"fullname",t.target.value)}}}),e.ShowFullNameError?n("div",{staticClass:"error"},[e._v("Nom complet doit etre entré")]):e._e()]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.AllInfo.email,expression:"AllInfo.email"}],attrs:{type:"email",placeholder:"Entrez votre Email"},domProps:{value:e.AllInfo.email},on:{input:function(t){t.target.composing||e.$set(e.AllInfo,"email",t.target.value)}}}),e.ShowEmailError?n("div",{staticClass:"error"},[e._v("Email doit etre entré")]):e._e()]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.AllInfo.address,expression:"AllInfo.address"}],attrs:{type:"text",placeholder:"Entrez votre Address"},domProps:{value:e.AllInfo.address},on:{input:function(t){t.target.composing||e.$set(e.AllInfo,"address",t.target.value)}}}),e.ShowAddressError?n("div",{staticClass:"error"},[e._v("Address doit etre entré")]):e._e()]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.AllInfo.tel,expression:"AllInfo.tel"}],attrs:{type:"text",placeholder:"Entrez votre Tel/Fax"},domProps:{value:e.AllInfo.tel},on:{input:function(t){t.target.composing||e.$set(e.AllInfo,"tel",t.target.value)}}}),e.ShowTelError?n("div",{staticClass:"error"},[e._v("Tel/Fax doit etre entré")]):e._e()]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.AllInfo.portable,expression:"AllInfo.portable"}],attrs:{type:"text",placeholder:"Entrez votre Portable"},domProps:{value:e.AllInfo.portable},on:{input:function(t){t.target.composing||e.$set(e.AllInfo,"portable",t.target.value)}}}),e.ShowPortableError?n("div",{staticClass:"error"},[e._v("Portable doit etre entré")]):e._e()]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.AllInfo.quantity,expression:"AllInfo.quantity"}],attrs:{type:"text",placeholder:"Entrez votre Quantité"},domProps:{value:e.AllInfo.quantity},on:{input:function(t){t.target.composing||e.$set(e.AllInfo,"quantity",t.target.value)}}}),e.ShowQuantityError?n("div",{staticClass:"error"},[e._v("Quantité doit etre entré")]):e._e()]),n("div",[n("button",{on:{click:function(t){return t.preventDefault(),e.Next.apply(null,arguments)}}},[e._v("Suivant")])])])])}),B=[],J={name:"DemandeInfo",data:function(){return{AllInfo:{fullname:"",email:"",address:"",tel:"",portable:"",quantity:""},ShowFullNameError:!1,ShowEmailError:!1,ShowAddressError:!1,ShowTelError:!1,ShowPortableError:!1,ShowQuantityError:!1}},methods:{Next:function(){""===this.AllInfo.fullname?this.ShowFullNameError=!0:this.ShowFullNameError=!1,""===this.AllInfo.tel?this.ShowTelError=!0:this.ShowTelError=!1,""===this.AllInfo.email?this.ShowEmailError=!0:this.ShowEmailError=!1,""===this.AllInfo.address?this.ShowAddressError=!0:this.ShowAddressError=!1,""===this.AllInfo.portable?this.ShowPortableError=!0:this.ShowPortableError=!1,""===this.AllInfo.quantity?this.ShowQuantityError=!0:this.ShowQuantityError=!1,""!==this.AllInfo.fullname&""!==this.AllInfo.email&""!==this.AllInfo.tel&""!==this.AllInfo.portable&""!==this.AllInfo.address&""!==this.AllInfo.quantity&&this.$emit("MakeInProduct",this.AllInfo)}}},K=J,X=(n("4579"),Object(i["a"])(K,V,B,!1,null,"f6b38032",null)),Y=X.exports,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",[e._v("choisissez un produit")]),n("div",{staticClass:"note"},[e._v(" pour demander un produit, il vous suffit de cliquer sur le produit que vous sougaitez et nous prendrons le reste. ")]),n("div",{staticClass:"table-search-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.filter_keyword,expression:"filter_keyword"}],attrs:{type:"search",placeholder:"Rechercher avec Référence ou le nom de produit"},domProps:{value:e.filter_keyword},on:{input:function(t){t.target.composing||(e.filter_keyword=t.target.value)}}}),!1===e.loading?n("table",[e._m(0),0===e.products.length?n("tr",[n("td",[e._v("Rien ne correspondait")]),n("td",[e._v("Rien ne correspondait")])]):e._l(e.products,(function(t){return n("tr",{key:t.id},[n("td",[e._v(e._s(t.reference))]),n("td",{on:{click:function(n){return e.SelectProduct(t.name)}}},[e._v(e._s(t.name))])])}))],2):e._e(),e.ShowProductCheckPopUp?n("div",{staticClass:"ProductCheckPopUp",on:{click:function(t){if(t.target!==t.currentTarget)return null;e.ShowProductCheckPopUp=!1}}},[n("div",[n("span",[e._v(" voulez vous vraiment demandé "+e._s(e.SelectedProduct)+" ? ")]),n("span",[n("button",{on:{click:function(t){e.ShowProductCheckPopUp=!1}}},[e._v("Cancel")]),n("button",{on:{click:e.SendDemande}},[e._v("Yes")])])])]):e._e(),!0===e.loading?n("div",{staticClass:"loading"},[n("i",{staticClass:"fas fa-spinner"})]):e._e(),!1===e.InFilter?n("div",{staticClass:"paginator"},[n("span",{directives:[{name:"show",rawName:"v-show",value:e.page_num>1,expression:"page_num>1"}],on:{click:function(t){e.page_num--}}},[n("i",{staticClass:"fas fa-angle-left"})]),e._l(e.total_pages,(function(t){return n("div",{key:t,staticStyle:{display:"inline-block"}},[e.page_num===t?n("span",{directives:[{name:"show",rawName:"v-show",value:t<=2,expression:"i<=2"}],staticStyle:{"background-color":"#1e81d0"},on:{click:function(n){e.page_num=t}}},[e._v(e._s(t))]):n("span",{directives:[{name:"show",rawName:"v-show",value:t<=2,expression:"i<=2"}],on:{click:function(n){e.page_num=t}}},[e._v(e._s(t))])])})),n("div",{staticStyle:{display:"inline-block"}},[n("span",{directives:[{name:"show",rawName:"v-show",value:e.total_pages>4,expression:"total_pages>4"}]},[e._v("...")])]),e.page_num===e.total_pages?n("div",{directives:[{name:"show",rawName:"v-show",value:e.total_pages>4,expression:"total_pages>4"}],staticStyle:{display:"inline-block"}},[n("span",{staticStyle:{"background-color":"#1e81d0"},on:{click:function(t){e.page_num=e.total_pages}}},[e._v(e._s(e.total_pages))])]):n("div",{directives:[{name:"show",rawName:"v-show",value:e.total_pages>4,expression:"total_pages>4"}],staticStyle:{display:"inline-block"}},[n("span",{on:{click:function(t){e.page_num=e.total_pages}}},[e._v(e._s(e.total_pages))])]),n("span",{directives:[{name:"show",rawName:"v-show",value:e.page_num<e.total_pages,expression:"page_num<total_pages"}],on:{click:function(t){e.page_num++}}},[n("i",{staticClass:"fas fa-angle-right"})])],2):e._e()])])},W=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("th",[e._v("Référence")]),n("th",[e._v("Product")])])}],Z=n("bc3a"),ee=n.n(Z),te={name:"DemandeProduct",data:function(){return{products:null,total_pages:0,page_num:null,filter_keyword:"",loading:!0,InFilter:!1,ShowProductCheckPopUp:!1,SelectedProduct:""}},created:function(){this.page_num=1},watch:{page_num:function(){var e=this;this.loading=!0,null===this.page_num&&(this.page_num=1);var t=this.page_num;ee.a.get("https://younes16.pythonanywhere.com/products/?page="+t).then((function(t){e.products=t.data.results,e.total_pages=t.data.total_pages})).finally((function(){e.loading=!1}))},filter_keyword:function(){var e=this,t=this.filter_keyword;""!==t?(this.loading=!0,this.InFilter=!0,ee.a.post("https://younes16.pythonanywhere.com/products/filter/",{filter_keyword:t}).then((function(t){e.products=t.data})).finally((function(){e.loading=!1}))):(this.page_num=null,this.InFilter=!1)}},methods:{SelectProduct:function(e){this.ShowProductCheckPopUp=!0,this.SelectedProduct=e},SendDemande:function(){this.$emit("SendDemande",this.SelectedProduct)}}},ne=te,ae=(n("fac6"),Object(i["a"])(ne,G,W,!1,null,"81650f7c",null)),oe=ae.exports,re={name:"DemandeCompo",data:function(){return{Info:"",Product:"",InInfo:!0,InProduct:!1,AllInfo:null}},methods:{MakeInProduct:function(e){this.InInfo=!1,this.InProduct=!0,this.Info="done",this.AllInfo=e},SendDemande:function(e){var t=this,n=this.AllInfo;n["product"]=e,ee.a.post("https://younes16.pythonanywhere.com/demandes/create/",n).finally((function(){t.$router.push("/")}))}},components:{Header:w,DemandeInfo:Y,DemandeProduct:oe}},ie=re,se=(n("5705"),Object(i["a"])(ie,L,Q,!1,null,"194e4e40",null)),le=se.exports,ce={name:"Demande",components:{DemandeCompo:le}},ue=ce,de=Object(i["a"])(ue,H,z,!1,null,null,null),pe=de.exports,fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ProductsCompo")},me=[],ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"header-container"},[n("Header")],1),n("div",{staticClass:"table-search-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.filter_keyword,expression:"filter_keyword"}],attrs:{type:"search",placeholder:"Rechercher avec Référence ou le nom de produit"},domProps:{value:e.filter_keyword},on:{input:function(t){t.target.composing||(e.filter_keyword=t.target.value)}}}),!1===e.loading?n("table",[e._m(0),0===e.products.length?n("tr",[n("td",[e._v("Rien ne correspondait")]),n("td",[e._v("Rien ne correspondait")])]):e._l(e.products,(function(t){return n("tr",{key:t.id},[n("td",[e._v(e._s(t.reference))]),n("td",[e._v(e._s(t.name))])])}))],2):e._e(),!0===e.loading?n("div",{staticClass:"loading"},[n("i",{staticClass:"fas fa-spinner"})]):e._e(),!1===e.InFilter?n("div",{staticClass:"paginator"},[n("span",{directives:[{name:"show",rawName:"v-show",value:e.page_num>1,expression:"page_num>1"}],on:{click:function(t){e.page_num--}}},[n("i",{staticClass:"fas fa-angle-left"})]),e._l(e.total_pages,(function(t){return n("div",{key:t,staticStyle:{display:"inline-block"}},[e.page_num===t?n("span",{directives:[{name:"show",rawName:"v-show",value:t<=2,expression:"i<=2"}],staticStyle:{"background-color":"#1e81d0"},on:{click:function(n){e.page_num=t}}},[e._v(e._s(t))]):n("span",{directives:[{name:"show",rawName:"v-show",value:t<=2,expression:"i<=2"}],on:{click:function(n){e.page_num=t}}},[e._v(e._s(t))])])})),n("div",{staticStyle:{display:"inline-block"}},[n("span",{directives:[{name:"show",rawName:"v-show",value:e.total_pages>4,expression:"total_pages>4"}]},[e._v("...")])]),e.page_num===e.total_pages?n("div",{directives:[{name:"show",rawName:"v-show",value:e.total_pages>4,expression:"total_pages>4"}],staticStyle:{display:"inline-block"}},[n("span",{staticStyle:{"background-color":"#1e81d0"},on:{click:function(t){e.page_num=e.total_pages}}},[e._v(e._s(e.total_pages))])]):n("div",{directives:[{name:"show",rawName:"v-show",value:e.total_pages>4,expression:"total_pages>4"}],staticStyle:{display:"inline-block"}},[n("span",{on:{click:function(t){e.page_num=e.total_pages}}},[e._v(e._s(e.total_pages))])]),n("span",{directives:[{name:"show",rawName:"v-show",value:e.page_num<e.total_pages,expression:"page_num<total_pages"}],on:{click:function(t){e.page_num++}}},[n("i",{staticClass:"fas fa-angle-right"})])],2):e._e()])])},_e=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("th",[e._v("Référence")]),n("th",[e._v("Produit")])])}],he={name:"ProductsCompo",data:function(){return{products:null,total_pages:0,page_num:null,filter_keyword:"",loading:!0,InFilter:!1}},created:function(){this.page_num=1},watch:{page_num:function(){var e=this;this.loading=!0,null===this.page_num&&(this.page_num=1);var t=this.page_num;ee.a.get("https://younes16.pythonanywhere.com/products/?page="+t).then((function(t){e.products=t.data.results,e.total_pages=t.data.total_pages})).finally((function(){e.loading=!1}))},filter_keyword:function(){var e=this,t=this.filter_keyword;""!==t?(this.loading=!0,this.InFilter=!0,ee.a.post("https://younes16.pythonanywhere.com/products/filter/",{filter_keyword:t}).then((function(t){e.products=t.data})).finally((function(){e.loading=!1}))):(this.page_num=null,this.InFilter=!1)}},components:{Header:w}},ge=he,ye=(n("1942"),Object(i["a"])(ge,ve,_e,!1,null,null,null)),we=ye.exports,be={name:"Products",components:{ProductsCompo:we}},Ce=be,Ie=Object(i["a"])(Ce,fe,me,!1,null,null,null),Se=Ie.exports,ke=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("MainConfirmDemandeCompo")},Ee=[],Ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.InFirst?n("PDFContentCompo",{attrs:{name:e.AllInfo.fullname,product:e.AllInfo.product,reference:e.AllInfo.reference,quantity:e.AllInfo.quantity,email:e.AllInfo.email,address:e.AllInfo.address,tel:e.AllInfo.tel,portable:e.AllInfo.portable,price:e.AllInfo.price},on:{MakeInSecond:e.MakeInSecond}}):e._e(),e.InSecond?n("SecondConfirmDemandeCompo",{on:{Upload:e.Upload}}):e._e()],1)},Pe=[],xe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"header-container"},[n("Header")],1),n("div",{staticClass:"form"},[n("input",{ref:"fileInput",attrs:{type:"file"},on:{change:function(t){return e.FileInputHandler()}}}),n("button",{on:{click:function(t){return e.Upload()}}},[e._v("Upload")])])])},De=[],Oe={name:"SecondConfirmDemandeCompo",data:function(){return{file:""}},components:{Header:w},methods:{FileInputHandler:function(){this.file=this.$refs.fileInput.files[0]},Upload:function(){this.$emit("Upload",this.file)}}},Ne=Oe,Te=(n("8d8d"),Object(i["a"])(Ne,xe,De,!1,null,"364ef1f0",null)),$e=Te.exports,Fe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"header-container"},[n("Header")],1),n("div",{ref:"container",staticClass:"pdf-content-container",staticStyle:{width:"fit-content"}},[e._m(0),n("span",{staticClass:"date"},[e._v("16/01/2004")]),n("div",{staticClass:"client-info"},[n("span",[e._v("CLIENT: "+e._s(e.name))]),n("span",[e._v("Addresse: "+e._s(e.address))]),n("span",[e._v("Tel/Fax: "+e._s(e.tel))]),n("span",[e._v("Portable: "+e._s(e.portable))])]),e._m(1),n("div",{staticClass:"table"},[n("table",[e._m(2),n("tr",[n("td",[e._v(e._s(e.reference))]),n("td",[e._v(e._s(e.product))]),n("td",[e._v(e._s(e.quantity))]),n("td",[e._v(e._s(e.price))]),n("td",[e._v(e._s(e.price))])]),n("tr",[n("td"),n("td"),n("td"),n("th",[e._v("Total HT")]),n("td",[e._v(e._s(e.price))])]),n("tr",[n("td"),n("td"),n("td"),n("th",[e._v("TVA 19%")]),n("td",[e._v(e._s(e.tvaValue))])]),n("tr",[n("td"),n("td"),n("td"),n("th",[e._v("TTC")]),n("td",[e._v(e._s(e.finalPrice))])])])]),e._m(3)]),n("div",[n("button",{on:{click:function(t){return e.MakeInSecond()}}},[e._v("Download ..")])])])},Re=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pdf-header"},[a("div",{staticClass:"logo"},[a("span",[e._v("BIO")]),a("span",[a("img",{attrs:{src:n("cf05")}})]),a("span",[e._v("PROCESS")])]),a("span",[e._v("Réactif, Produits Chimiques, Verrerie, Matériels et Consomable de Laboratoire")]),a("div",[a("span",[e._v("Adresse: Segmet Douera alger")]),a("span",[e._v("Email: bioprocess2018@gmail.com")]),a("span",[e._v("Tel: 0699210877/0699210877")])]),a("div",[a("span",[a("i",[e._v("RC")]),e._v(" A4955965987 "),a("i",[e._v("16/00")])]),a("span",[a("i",[e._v("NIF")]),e._v(" 054848456484515")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"facture-number"},[n("span",[e._v("FACTURE PROFORMA")]),n("span",[e._v("N 005/2020")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tr",[n("th",[e._v("Référence")]),n("th",[e._v("Designation")]),n("th",[e._v("Unite")]),n("th",{staticStyle:{padding:"5px 40px"}},[e._v("Prix Ht")]),n("th",[e._v("Total Ht")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",[e._v("Arrêtée la présente proforma à la somme de :")]),n("span",[e._v("Vingt-Trois Mille Cinq Cent Soixante-Deux Dinars .")])])}],je=(n("a9e3"),n("8baf")),Me=n("70b0"),Ue=n.n(Me),qe={name:"PDFContentCompo",props:["name","product","reference","quantity","email","address","tel","portable","price"],data:function(){return{tvaValue:"",finalPrice:""}},created:function(){var e=.19*this.price;this.tvaValue=e,this.finalPrice=Number(this.price)+Number(this.tvaValue)},components:{Header:w},methods:{MakeInSecond:function(){var e=this,t=new je["a"]("px","mm"),n=this.$refs.container;Ue.a.toPng(n).then((function(e){var n=new Image;n.src=e,n.onload=function(){t.addImage(n,"png",0,0),t.save()}})).finally((function(){return e.$emit("MakeInSecond")}))}}},He=qe,ze=(n("c65b"),Object(i["a"])(He,Fe,Re,!1,null,"bf71795c",null)),Le=ze.exports,Qe=n("5683"),Ve=n.n(Qe),Be={name:"MainConfirmDemandeCompo",data:function(){return{AllInfo:null,InFirst:!0,InSecond:!1}},components:{PDFContentCompo:Le,SecondConfirmDemandeCompo:$e},created:function(){this.AllInfo=Ve.a.parse(localStorage.getItem("AllInfo"))},methods:{Upload:function(e){var t=this,n=new FormData;n.append("file",e),n.append("email",this.AllInfo.email),ee.a.post("https://younes16.pythonanywhere.com/demandes/confirm/",n,{headers:{"Content-Type":"multipart/form-data"}}).finally((function(){t.$router.push("/")}))},MakeInSecond:function(){this.InFirst=!1,this.InSecond=!0}}},Je=Be,Ke=Object(i["a"])(Je,Ae,Pe,!1,null,null,null),Xe=Ke.exports,Ye={name:"ConfirmDemande",components:{MainConfirmDemandeCompo:Xe}},Ge=Ye,We=Object(i["a"])(Ge,ke,Ee,!1,null,null,null),Ze=We.exports,et=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("AllDemandesCompo")},tt=[],nt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"header-container"},[n("Header")],1),n("div",{staticClass:"demandes-container"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.filter_keyword,expression:"filter_keyword"}],attrs:{type:"search",placeholder:"Rechercher avec Référence ou le nom de produit"},domProps:{value:e.filter_keyword},on:{input:function(t){t.target.composing||(e.filter_keyword=t.target.value)}}}),e._l(e.demandes,(function(t){return n("div",{key:t.id,staticClass:"demande"},[n("div",{on:{click:function(t){return e.ShowDesc(t)}}},[e._v("Nom Complet: "+e._s(t.fullname))]),n("div",{staticClass:"desc",staticStyle:{display:"none"}},[n("span",[e._v("date: "),n("i",[e._v(e._s(t.date))])]),n("span",[e._v("Produit: "),n("i",[e._v(e._s(t.product))])]),n("span",[e._v("Reference: "),n("i",[e._v(e._s(t.reference))])]),n("span",[e._v("Email: "),n("i",[e._v(e._s(t.email))])]),n("span",[e._v("Quantité: "),n("i",[e._v(e._s(t.quantity))])]),n("span",[e._v("Tel/Fax: "),n("i",[e._v(e._s(t.tel))])]),n("span",[e._v("Portable: "),n("i",[e._v(e._s(t.portable))])]),n("span",[e._v("Addresse: "),n("i",[e._v(e._s(t.address))])]),n("div",{staticClass:"del-confirm"},[n("span",[n("button",{on:{click:function(t){e.displayStep2=!0}}},[e._v("Confirmer")])])]),e.displayStep2?n("div",{staticClass:"del-confirm-step2",on:{click:function(t){e.displayStep2=!1}}},[n("div",{on:{click:function(t){return t.stopPropagation(),e.displayStep2.apply(null,arguments)}}},[n("span",[e._v("veuillez nous donner le prix pour confirmer")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.price,expression:"price"}],attrs:{type:"number",placeholder:"Price"},domProps:{value:e.price},on:{input:function(t){t.target.composing||(e.price=t.target.value)}}}),n("button",{on:{click:function(n){return e.ConfirmDemande(t)}}},[e._v("Confirmer")])])]):e._e()])])}))],2)])},at=[],ot={name:"AllDemandesCompo",data:function(){return{filter_keyword:"",demandes:null,displayStep2:!1,price:""}},created:function(){var e=this;ee.a.get("https://younes16.pythonanywhere.com/demandes/all/").then((function(t){e.demandes=t.data}))},watch:{filter_keyword:function(){var e=this,t=this.filter_keyword;ee.a.post("https://younes16.pythonanywhere.com/demandes/filter/",{filter_keyword:t}).then((function(t){e.demandes=t.data}))}},methods:{ShowDesc:function(e){"none"===e.currentTarget.nextElementSibling.style.display?(e.currentTarget.style.borderBottom="1px solid #9e9e9e",e.currentTarget.nextElementSibling.style.display="block"):(e.currentTarget.style.borderBottom="none",e.currentTarget.nextElementSibling.style.display="none")},ConfirmDemande:function(e){e["price"]=this.price,localStorage.setItem("AllInfo",Ve.a.stringify(e)),this.$router.push("/demande/confirm/")}},components:{Header:w}},rt=ot,it=(n("8189"),Object(i["a"])(rt,nt,at,!1,null,"59248cd2",null)),st=it.exports,lt={name:"AllDemandes",components:{AllDemandesCompo:st}},ct=lt,ut=Object(i["a"])(ct,et,tt,!1,null,null,null),dt=ut.exports;a["a"].use(u["a"]);var pt=[{path:"/",name:"Home",component:q},{path:"/demande",name:"Demande",component:pe},{path:"/products",name:"Products",component:Se},{path:"/demande/confirm",name:"ConfirmDemande",component:Ze},{path:"/demande/all",name:"AllDemandes",component:dt}],ft=new u["a"]({mode:"history",base:"/bioprocess/",routes:pt}),mt=ft,vt=n("2f62");a["a"].use(vt["a"]);var _t=new vt["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("15f5"),n("7051");a["a"].config.productionTip=!1,new a["a"]({router:mt,store:_t,render:function(e){return e(c)}}).$mount("#app")},5705:function(e,t,n){"use strict";n("9f84")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"5d60":function(e,t,n){},"605e":function(e,t,n){},"614f":function(e,t,n){"use strict";n("d6f7")},"7db9":function(e,t,n){},"7dc1":function(e,t,n){"use strict";n("5d60")},8189:function(e,t,n){"use strict";n("9ffa")},"8d8d":function(e,t,n){"use strict";n("26b0")},"8de0":function(e,t,n){"use strict";n("386e")},"9c0c":function(e,t,n){},"9f84":function(e,t,n){},"9ffa":function(e,t,n){},aab3:function(e,t,n){"use strict";n("e327")},c65b:function(e,t,n){"use strict";n("4dcf")},cf05:function(e,t,n){e.exports=n.p+"img/logo.ac680e42.png"},d6f7:function(e,t,n){},e327:function(e,t,n){},fac6:function(e,t,n){"use strict";n("7db9")}});
//# sourceMappingURL=app.6878fec7.js.map