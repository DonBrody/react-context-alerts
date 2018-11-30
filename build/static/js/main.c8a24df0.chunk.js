(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5401:function(e,t,n){e.exports=n(5512)},5510:function(e,t,n){},5512:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(29),c=n.n(o),s=n(20),i=n(21),l=n(23),u=n(22),d=n(24),m=n(5514),p=n(5515),h=n(5517),g=n(5516),b=n(5),f=n(8),k=n(19),v={palette:{info:{background:"white",color:"#51525d",adornment:{background:"#1976d2",color:"white"}},success:{background:"white",color:"#51525d",adornment:{background:"#388e3c",color:"white"}},warning:{background:"white",color:"#51525d",adornment:{background:"#f57c00",color:"white"}},error:{background:"white",color:"#51525d",adornment:{background:"#d32f2f",color:"white"}}}},w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v;return e?Object(k.default)(t,e):t},y={timeout:5e3,showCloseButton:!1},E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y;return e?Object(k.default)(t,e):t},O=n(34),C=n(25),j=Object(b.withStyles)({wrapper:{display:"flex",position:"absolute",alignItems:"center",justifyContent:"center",top:0,bottom:0,left:0,width:50,textAlign:"center",borderTopLeftRadius:4,borderBottomLeftRadius:4},icon:{width:30,height:30}})(function(e){var t,n,r=e.theme.palette,o=r.info.adornment,c=r.success.adornment,s=r.warning.adornment,i=r.error.adornment;switch(e.type){case"info":n={background:o.background,color:o.color},t=a.a.createElement(C.d,{className:e.classes.icon});break;case"success":n={background:c.background,color:c.color},t=a.a.createElement(C.a,{className:e.classes.icon});break;case"warning":n={background:s.background,color:s.color},t=a.a.createElement(C.e,{className:e.classes.icon});break;case"error":n={background:i.background,color:i.color},t=a.a.createElement(C.c,{className:e.classes.icon});break;default:n={background:o.background,color:o.color},t=null}return a.a.createElement("div",{style:n,className:e.classes.wrapper},t)}),S=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={timedOut:!1,collapse:!1,timeoutFunction:null},n.onClose=function(){n.clearCurrentTimeout(),n.setState({timedOut:!0,timeoutFunction:null})},n.clearCurrentTimeout=function(){n.state.timeoutFunction&&clearTimeout(n.state.timeoutFunction)},n.onSlideExited=function(){n.setState({collapse:!0})},n.onCollapsed=function(){n.props.onClose()},n.wrapperStyles=function(){var e=n.props.theme.palette;switch(n.props.type){case"info":return{background:e.info.background};case"success":return{background:e.success.background};case"warning":return{background:e.warning.background};case"error":return{background:e.error.background};default:return{background:e.info.background}}},n.textStyles=function(){var e=n.props.theme.palette;switch(n.props.type){case"info":return{color:e.info.color};case"success":return{color:e.success.color};case"warning":return{color:e.warning.color};case"error":return{color:e.error.color};default:return{color:e.info.color}}},n.headerStyles=function(){return n.props.settings.showCloseButton?{marginRight:10}:{}},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.settings.timeout;if(t){var n=setTimeout(function(){e.onClose()},t);this.setState({timeoutFunction:n})}}},{key:"render",value:function(){var e=this.state,t=e.timedOut,n=e.collapse,r=this.props,o=r.classes,c=r.header,s=r.message,i=r.type,l=r.theme,u=r.settings;return a.a.createElement(f.c,{in:!n,onExited:this.onCollapsed,unmountOnExit:!0},a.a.createElement(f.f,{direction:"left",in:!t,onExited:this.onSlideExited},a.a.createElement(f.e,{className:o.componentWrapper,style:this.wrapperStyles(),elevation:4},a.a.createElement(j,{type:i,theme:l}),a.a.createElement("div",{className:o.textWrapper,style:this.textStyles()},c&&c.length>0&&a.a.createElement(f.h,{style:this.headerStyles(),component:"h5",variant:"h6",color:"inherit"},c),a.a.createElement(f.h,{component:"p",variant:"body1",color:"inherit"},s)),u.showCloseButton&&a.a.createElement(f.d,{className:o.closeButton,onClick:this.onClose},a.a.createElement(C.b,{className:o.closeIcon})))))}}]),t}(r.Component);S.defaultProps={onClose:function(){},header:null,message:"",type:"success"};var x=Object(b.withStyles)({componentWrapper:{width:"100%",marginBottom:15,display:"block"},textWrapper:{padding:10,marginLeft:60,marginRight:10,wordWrap:"break-word"},closeButton:{position:"absolute",top:3,right:3},closeIcon:{width:15,height:15}})(S),T=Object(b.createMuiTheme)({typography:{useNextVariants:!0}}),N={alerts:[],theme:v,settings:y},A=a.a.createContext(N),P=A.Consumer,W=0,F=function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state=N,n.onThemePropsUpdated=function(e,t){t!==e&&n.setState({theme:n.createCustomTheme(t)})},n.onSettingsPropsUpdated=function(e,t){t!==e&&n.setState({settings:n.createCustomSettings(t)})},n.onAlertClose=function(e){n.setState({alerts:n.state.alerts.filter(function(t){return e!==t})})},n.createAlertObject=function(e,t,r,a){return{id:W++,type:e,header:t,message:r,settings:n.createCustomSettings(a)}},n.createCustomTheme=function(e){return w(e,n.state.theme)},n.createCustomSettings=function(e){return E(e,n.state.settings)},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.onThemePropsUpdated(null,this.props.theme),this.onSettingsPropsUpdated(null,this.props.settings)}},{key:"componentDidUpdate",value:function(e){this.onThemePropsUpdated(e.theme,this.props.theme),this.onSettingsPropsUpdated(e.settings,this.props.settings)}},{key:"render",value:function(){var e=this,t=this.props.classes,n=this.state.theme;return a.a.createElement(A.Provider,{value:{state:this.state,info:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=e.createAlertObject("info",t,n,r);e.setState({alerts:Object(O.a)(e.state.alerts).concat([a])})},success:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=e.createAlertObject("success",t,n,r);e.setState({alerts:Object(O.a)(e.state.alerts).concat([a])})},warning:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=e.createAlertObject("warning",t,n,r);e.setState({alerts:Object(O.a)(e.state.alerts).concat([a])})},error:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=e.createAlertObject("error",t,n,r);e.setState({alerts:Object(O.a)(e.state.alerts).concat([a])})},updateGlobalTheme:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};e.setState({theme:e.createCustomTheme(t)},function(){n()})},updateGlobalSettings:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};e.setState({settings:e.createCustomSettings(t)},function(){n()})}}},this.props.children,a.a.createElement(b.MuiThemeProvider,{theme:T},a.a.createElement("aside",{className:t.alertWrapper},this.state.alerts.map(function(t){return a.a.createElement(x,{key:t.id,id:t.id,header:t.header,message:t.message,type:t.type,onClose:function(){return e.onAlertClose(t)},theme:n,settings:t.settings})}))))}}]),t}(r.Component);F.defaultProps={theme:v,settings:y};var B=Object(b.withStyles)({alertWrapper:{width:"80%",maxWidth:450,position:"fixed",top:75,right:16,zIndex:1e5}})(F),I=n(35),M={display:"block",width:200,margin:"25px auto 25px 10%",color:"white",fontWeight:"bold"},U=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.classes;return a.a.createElement(P,null,function(t){return a.a.createElement("section",{className:e.buttonGroup},a.a.createElement(f.b,{className:e.info,variant:"contained",onClick:function(){return t.info("Header","message!")}},"Info"),a.a.createElement(f.b,{className:e.success,variant:"contained",onClick:function(){return t.success("Header","message!")}},"Success"),a.a.createElement(f.b,{className:e.warning,variant:"contained",onClick:function(){return t.warning(null,"message!")}},"Warning"),a.a.createElement(f.b,{className:e.error,variant:"contained",onClick:function(){return t.error("Header","message!")}},"Error"))})}}]),t}(r.Component),R=Object(b.withStyles)(function(e){return{buttonGroup:{width:"50%"},info:Object(I.a)({},M,{backgroundColor:e.palette.info.main,"&:hover":{backgroundColor:e.palette.info.darker}}),success:Object(I.a)({},M,{backgroundColor:e.palette.success.main,"&:hover":{backgroundColor:e.palette.success.darker}}),warning:Object(I.a)({},M,{backgroundColor:e.palette.warning.main,"&:hover":{backgroundColor:e.palette.warning.darker}}),error:Object(I.a)({},M,{backgroundColor:e.palette.error.main,"&:hover":{backgroundColor:e.palette.error.darker}})}})(U),D=Object(b.createMuiTheme)({palette:{primary:{main:"#2196F3"},secondary:{main:"#FFF"},info:{main:"#1976d2",darker:"#0d47a1"},success:{main:"#388e3c",darker:"#1b5e20"},warning:{main:"#f57c00",darker:"#e65100"},error:{main:"#d32f2f",darker:"#b71c1c"},contrastThreshold:3,tonalOffset:.2},typography:{useNextVariants:!0}}),G=w({palette:{}}),L=E({}),H=function(){return a.a.createElement(m.a,{to:"/"})},J=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement(b.MuiThemeProvider,{theme:D},a.a.createElement("div",null,a.a.createElement("header",{role:"banner"},a.a.createElement(f.a,{position:"static",color:"primary"},a.a.createElement(f.g,null,a.a.createElement(f.h,{variant:"h5",component:"h1",color:"secondary"},"React Context Alerts Demo")))),a.a.createElement(B,{theme:G,settings:L},a.a.createElement("main",{role:"main"},a.a.createElement(p.a,null,a.a.createElement(h.a,null,a.a.createElement(g.a,{exact:!0,path:"/",component:R}),a.a.createElement(g.a,{path:"/",component:H}))))),a.a.createElement("footer",{style:{marginTop:60,textAlign:"center"}},a.a.createElement(f.h,{variant:"caption",component:"aside"},"MIT Licensed Software"))))}}]),t}(r.Component);n(5510);c.a.render(a.a.createElement(J,null),document.getElementById("root"))}},[[5401,2,1]]]);
//# sourceMappingURL=main.c8a24df0.chunk.js.map