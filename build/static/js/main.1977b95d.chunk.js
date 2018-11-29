(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5401:function(e,t,r){e.exports=r(5512)},5510:function(e,t,r){},5512:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(29),c=r.n(o),s=r(20),i=r(21),l=r(23),u=r(22),m=r(24),d=r(5514),p=r(5515),h=r(5517),g=r(5516),f=r(5),b=r(8),k=r(19),v={palette:{info:{background:"white",color:"#51525d",adornment:{background:"#1976d2",color:"white"}},success:{background:"white",color:"#51525d",adornment:{background:"#388e3c",color:"white"}},warning:{background:"white",color:"#51525d",adornment:{background:"#f57c00",color:"white"}},error:{background:"white",color:"#51525d",adornment:{background:"#d32f2f",color:"white"}}}},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v;return e?Object(k.default)(t,e):t},y={timeout:5e3,showCloseButton:!1},E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y;return e?Object(k.default)(t,e):t},O=r(34),j=r(25),C=Object(f.withStyles)({wrapper:{display:"flex",position:"absolute",alignItems:"center",justifyContent:"center",top:0,bottom:0,left:0,width:50,textAlign:"center",borderTopLeftRadius:4,borderBottomLeftRadius:4},icon:{width:30,height:30}})(function(e){var t,r,n=e.theme.palette,o=n.info.adornment,c=n.success.adornment,s=n.warning.adornment,i=n.error.adornment;switch(e.type){case"info":r={background:o.background,color:o.color},t=a.a.createElement(j.d,{className:e.classes.icon});break;case"success":r={background:c.background,color:c.color},t=a.a.createElement(j.a,{className:e.classes.icon});break;case"warning":r={background:s.background,color:s.color},t=a.a.createElement(j.e,{className:e.classes.icon});break;case"error":r={background:i.background,color:i.color},t=a.a.createElement(j.c,{className:e.classes.icon});break;default:r={background:o.background,color:o.color},t=null}return a.a.createElement("div",{style:r,className:e.classes.wrapper},t)}),S=function(e){function t(){var e,r;Object(s.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={timedOut:!1,collapse:!1,timeoutFunction:null},r.onClose=function(){r.clearCurrentTimeout(),r.setState({timedOut:!0,timeoutFunction:null})},r.clearCurrentTimeout=function(){r.state.timeoutFunction&&clearTimeout(r.state.timeoutFunction)},r.onSlideExited=function(){r.setState({collapse:!0})},r.onCollapsed=function(){r.props.onClose()},r.wrapperStyles=function(){var e=r.props.theme.palette;switch(r.props.type){case"info":return{background:e.info.background};case"success":return{background:e.success.background};case"warning":return{background:e.warning.background};case"error":return{background:e.error.background};default:return{background:e.info.background}}},r.textStyles=function(){var e=r.props.theme.palette;switch(r.props.type){case"info":return{color:e.info.color};case"success":return{color:e.success.color};case"warning":return{color:e.warning.color};case"error":return{color:e.error.color};default:return{color:e.info.color}}},r.headerStyles=function(){return r.props.settings.showCloseButton?{marginRight:10}:{}},r}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.settings.timeout;if(t){var r=setTimeout(function(){e.onClose()},t);this.setState({timeoutFunction:r})}}},{key:"render",value:function(){var e=this.state,t=e.timedOut,r=e.collapse,n=this.props,o=n.classes,c=n.header,s=n.message,i=n.type,l=n.theme,u=n.settings;return a.a.createElement(b.c,{in:!r,onExited:this.onCollapsed,unmountOnExit:!0},a.a.createElement(b.f,{direction:"left",in:!t,onExited:this.onSlideExited},a.a.createElement(b.e,{className:o.componentWrapper,style:this.wrapperStyles(),elevation:4},a.a.createElement(C,{type:i,theme:l}),a.a.createElement("div",{className:o.textWrapper,style:this.textStyles()},c&&c.length>0&&a.a.createElement(b.h,{style:this.headerStyles(),component:"h5",variant:"h6",color:"inherit"},c),a.a.createElement(b.h,{component:"p",variant:"body1",color:"inherit"},s)),u.showCloseButton&&a.a.createElement(b.d,{className:o.closeButton,onClick:this.onClose},a.a.createElement(j.b,{className:o.closeIcon})))))}}]),t}(n.Component);S.defaultProps={onClose:function(){},header:null,message:"",type:"success"};var x=Object(f.withStyles)({componentWrapper:{width:"100%",marginBottom:15,display:"block"},textWrapper:{padding:10,marginLeft:60,marginRight:10,wordWrap:"break-word"},closeButton:{position:"absolute",top:3,right:3},closeIcon:{width:15,height:15}})(S),N=Object(f.createMuiTheme)({typography:{useNextVariants:!0}}),T={alerts:[]},A=a.a.createContext(T),W=A.Consumer,B=0,F=function(e){function t(){var e,r;Object(s.a)(this,t);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(r=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state=T,r.onAlertClose=function(e){r.setState({alerts:r.state.alerts.filter(function(t){return e!==t})})},r.createAlertObject=function(e,t,n,a){return{id:B++,type:e,header:t,message:n,settings:r.createCustomSettings(a)}},r.createCustomTheme=function(e){return w(e,r.props.theme)},r.createCustomSettings=function(e){return E(e,r.props.settings)},r}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,r=t.classes,n=t.theme;return a.a.createElement(A.Provider,{value:{state:this.state,info:function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=e.createAlertObject("info",t,r,n);e.setState({alerts:Object(O.a)(e.state.alerts).concat([a])})},success:function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};console.log(n);var a=e.createAlertObject("success",t,r,n);e.setState({alerts:Object(O.a)(e.state.alerts).concat([a])})},warning:function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=e.createAlertObject("warning",t,r,n);e.setState({alerts:Object(O.a)(e.state.alerts).concat([a])})},error:function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=e.createAlertObject("error",t,r,n);e.setState({alerts:Object(O.a)(e.state.alerts).concat([a])})},updateDefaultTheme:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.setState({theme:e.createCustomTheme(t)})},updateDefaultSettings:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.setState({settings:e.createCustomSettings(t)})}}},this.props.children,a.a.createElement(f.MuiThemeProvider,{theme:N},a.a.createElement("aside",{className:r.alertWrapper},this.state.alerts.map(function(t){return a.a.createElement(x,{key:t.id,id:t.id,header:t.header,message:t.message,type:t.type,onClose:function(){return e.onAlertClose(t)},theme:n,settings:t.settings})}))))}}]),t}(n.Component);F.defaultProps={theme:v,settings:y};var I=Object(f.withStyles)({alertWrapper:{width:"80%",maxWidth:450,position:"fixed",top:75,right:16,zIndex:1e5}})(F),M=r(35),P={display:"block",width:200,margin:"25px auto 25px 10%",color:"white",fontWeight:"bold"},R="This is a really long message. It's super super super long!",D=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.classes;return a.a.createElement(W,null,function(t){return a.a.createElement("section",{className:e.buttonGroup},a.a.createElement(b.b,{className:e.info,variant:"contained",onClick:function(){return t.info(R,R,{timeout:null,showCloseButton:!0})}},"Info"),a.a.createElement(b.b,{className:e.success,variant:"contained",onClick:function(){return t.success("Header","message!",{timeout:1e3})}},"Success"),a.a.createElement(b.b,{className:e.warning,variant:"contained",onClick:function(){return t.warning("","message!",{timeout:1e4})}},"Warning"),a.a.createElement(b.b,{className:e.error,variant:"contained",onClick:function(){return t.error("Header","message!")}},"Error"))})}}]),t}(n.Component),L=Object(f.withStyles)(function(e){return{buttonGroup:{width:"50%"},info:Object(M.a)({},P,{backgroundColor:e.palette.info.main,"&:hover":{backgroundColor:e.palette.info.darker}}),success:Object(M.a)({},P,{backgroundColor:e.palette.success.main,"&:hover":{backgroundColor:e.palette.success.darker}}),warning:Object(M.a)({},P,{backgroundColor:e.palette.warning.main,"&:hover":{backgroundColor:e.palette.warning.darker}}),error:Object(M.a)({},P,{backgroundColor:e.palette.error.main,"&:hover":{backgroundColor:e.palette.error.darker}})}})(D),G=Object(f.createMuiTheme)({palette:{primary:{main:"#2196F3"},secondary:{main:"#FFF"},info:{light:"#2196f3",main:"#1976d2",darker:"#0d47a1"},success:{light:"#4caf50",main:"#388e3c",darker:"#1b5e20"},warning:{light:"#ff9800",main:"#f57c00",darker:"#e65100"},error:{light:"#f44336",main:"#d32f2f",darker:"#b71c1c"},contrastThreshold:3,tonalOffset:.2},typography:{useNextVariants:!0}}),H=w({palette:{}}),J=E({timeout:3e3}),V=function(){return a.a.createElement(d.a,{to:"/"})},z=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement(f.MuiThemeProvider,{theme:G},a.a.createElement("div",null,a.a.createElement("header",{role:"banner"},a.a.createElement(b.a,{position:"static",color:"primary"},a.a.createElement(b.g,null,a.a.createElement(b.h,{variant:"h5",component:"h1",color:"secondary"},"React Context Alerts Demo")))),a.a.createElement(I,{theme:H,settings:J},a.a.createElement("main",{role:"main"},a.a.createElement(p.a,null,a.a.createElement(h.a,null,a.a.createElement(g.a,{exact:!0,path:"/",component:L}),a.a.createElement(g.a,{path:"/",component:V}))))),a.a.createElement("footer",{style:{marginTop:60,textAlign:"center"}},a.a.createElement(b.h,{variant:"caption",component:"aside"},"MIT Licensed Software"))))}}]),t}(n.Component);r(5510);c.a.render(a.a.createElement(z,null),document.getElementById("root"))}},[[5401,2,1]]]);
//# sourceMappingURL=main.1977b95d.chunk.js.map