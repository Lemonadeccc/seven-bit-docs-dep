import{i as d,j as u,r as a,o as _,c as b,a as s,w as t,d as o}from"../app.fddf7692.js";const m={class:"box"},w=d({__name:"drawer3",setup(p){const e=u(!1),n=()=>{e.value=!0},l=()=>{e.value=!1},c=()=>{e.value=!1};return(h,f)=>{const r=a("sb-drawer"),i=a("sb-button");return _(),b("div",m,[s(r,{width:340,header:!1,visible:e.value,onOk:l,onCancel:c},{title:t(()=>[o(" Title ")]),body:t(()=>[o("You can customize modal body text by the current situation. This modal will be closed immediately once you press the OK button.")]),_:1},8,["visible"]),s(i,{onClick:n},{default:t(()=>[o("Open Drawer")]),_:1})])}}});export{w as default};
