var tvtad="";$(document).ready(function(){if(window.location.hostname==zhaendblog){$("#tad-taianhve").hide();$(".tad-ketqua").hide();$("#zh-zhaend").click(function(){$(".load-anh").fadeIn(500,function(){b()})});var j=document.getElementById("Cimg");var a=document.getElementById("Limg");var d=document.getElementById("Limg1");var e=document.getElementById("Nimg");function b(){c=document.querySelector("canvas"),ctx=c.getContext("2d"),corners=vitri,step=1;g();function g(){var n,m,s,q,h,o,l,i,r=j.width-1,k=j.height-1;ctx.clearRect(0,0,c.width,c.height);for(y=0;y<k;y+=step){for(x=0;x<r;x+=step){h=f(corners[0],corners[3],y/k);o=f(corners[1],corners[2],y/k);l=f(corners[0],corners[3],(y+step)/k);i=f(corners[1],corners[2],(y+step)/k);n=f(h,o,x/r);m=f(h,o,(x+step)/r);s=f(l,i,(x+step)/r);q=f(l,i,x/r);ctx.drawImage(j,x,y,step,step,n.x,n.y,Math.ceil(Math.max(step,Math.abs(m.x-n.x),Math.abs(q.x-s.x)))+1,Math.ceil(Math.max(step,Math.abs(n.y-q.y),Math.abs(m.y-s.y)))+1)}}ctx.save();ctx.drawImage(a,0,0,c.width,c.height);ctx.restore();if(e){ctx.save();ctx.globalAlpha=0.8;var p=ctx.createPattern(e,"repeat");ctx.fillStyle=p;ctx.fillRect(0,0,c.width,c.height);ctx.restore()}if(d){ctx.save();ctx.globalCompositeOperation="screen";ctx.drawImage(d,0,0,c.width,c.height);ctx.restore()}c.toBlob(function(t){var u=URL.createObjectURL(t);$("#img-out").html("<img src='"+u+"' alt='Crea Fotomontajes Online - Zhaend.Net' class='img-thumbnail'></img>");$("#tad-taianhve").attr("download",tenanhxuat).attr("href",u)});$("#tad-taianhve").show();$(".tad-ketqua").show();$(".load-anh").fadeOut(500)}function f(l,i,h){return{x:l.x+(i.x-l.x)*h,y:l.y+(i.y-l.y)*h}}}}});
