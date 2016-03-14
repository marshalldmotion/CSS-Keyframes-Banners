
(function(compId){var _=null,y=true,n=false,x1='6.0.0',x9='rgba(255,255,255,0.00)',x2='5.0.0',x4='rgba(0,0,0,0)',x21='Rectangle',zx='scaleX',x25='true',x22='0',x10='solid',m='rect',x17='0px',i='none',x3='6.0.0.400',x16='group',o='opacity',lf='left',x15='ClickThrough',x19='50px',x20='auto',e13='${head-04}',x24='rgba(0,104,255,1.00)',zy='scaleY',x11='rgba(255,255,255,1)',x23='pointer',g='image',xc='rgba(0,0,0,1)',e12='${learn-more}',x18='320px',e14='${arysta-logo-rev}';var g8='learn-more.png',g5='wood-background.jpg',g7='arysta-logo-rev.png',g6='head-04.png';var im='images/',aud='media/',vid='media/',js='',fonts={},opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'},resources=[],scripts=[],symbols={"stage":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:'wood-background',t:g,r:['0px','0px','320px','50px','auto','auto'],f:[x4,im+g5,'0px','0px']},{id:'head-04',t:g,r:['93px','6px','142px','39px','auto','auto'],o:'0',f:[x4,im+g6,'0px','0px']},{id:'arysta-logo-rev',t:g,r:['121px','15px','79px','22px','auto','auto'],o:'0',f:[x4,im+g7,'0px','0px'],tf:[[],[],[],['0.7','0.7']]},{id:'learn-more',t:g,r:['244px','8px','70px','35px','auto','auto'],f:[x4,im+g8,'0px','0px']},{id:'Border',t:m,r:['0px','0px','318px','48px','auto','auto'],f:[x9],s:[1,"rgb(0, 0, 0)",x10]},{id:'ClickThrough_btn',symbolName:'ClickThrough_btn',t:m,r:['0px','0px','undefined','undefined','auto','auto']}],style:{'${Stage}':{isStage:true,r:['null','null','320px','50px','auto','auto'],overflow:'hidden',f:[x11]}}},tt:{d:2500,a:n,data:[["eid275",zy,1836,664,"easeOutBack",e12,'0.75','1'],["eid225",o,1222,778,"easeOutQuad",e13,'0','1'],["eid273",zx,1836,664,"easeOutBack",e12,'0.75','1'],["eid235",o,0,750,"easeOutQuart",e14,'0','1'],["eid274",o,1836,664,"easeOutQuad",e12,'0','1'],["eid272",lf,638,854,"easeOutQuad",e14,'121px','6px'],["eid236",zx,0,750,"easeOutQuart",e14,'0.7','1'],["eid237",zy,0,750,"easeOutQuart",e14,'0.7','1']]}},"ClickThrough_btn":{v:x1,mv:x2,b:x3,stf:i,cg:i,rI:n,cn:{dom:[{id:x15,t:x16,r:[x17,x17,x18,x19,x20,x20],c:[{r:[x17,x17,x18,x19,x20,x20],s:[0,xc,i],t:m,id:x21,o:x22,cu:x23,f:[x24]}]}],style:{'${symbolSelector}':{isStage:x25,r:[undefined,undefined,x18,x19]}}},tt:{d:0,a:y,data:[]}}};AdobeEdge.registerCompositionDefn(compId,symbols,fonts,scripts,resources,opts);})("EDGE-1122761953");
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;Edge.registerEventBinding(compId,function($){
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){function initEB(){if(!EB.isInitialized()){EB.addEventListener(EBG.EventName.EB_INITIALIZED,startAd);}else{startAd();}}
function startAd(){var myVideo=document.getElementById("Stage_trail");var video1=new EBG.VideoModule(myVideo);sym.play();}
initEB();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'ClickThrough_btn'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${ClickThrough}","click",function(sym,e){EB.clickthrough();});
//Edge binding end
})("ClickThrough_btn");
//Edge symbol end:'ClickThrough_btn'

//=========================================================

//Edge symbol: 'pause_btn'
(function(symbolName){})("pause_btn");
//Edge symbol end:'pause_btn'
})})(AdobeEdge.$,AdobeEdge,"EDGE-1122761953");