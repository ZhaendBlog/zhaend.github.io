$(document).ready(function(){function n(){void 0!==t.val()&&""==t.val().length||void 0!==e.val()&&0==e.val().length||void 0!==a.val()&&0==a.val().length||void 0!==o.val()&&0==o.val().length||void 0!==d.val()&&0==d.val().length?$("#zh-zhaend").addClass("disabled"):$("#zh-zhaend").removeClass("disabled")}var t,e,a,o,d;window.location.hostname==zhaendblog&&($("#zh-zhaend").addClass("disabled"),$("head").append(xlha),0!==$(".btn-chonanh").length&&($("head").append(cssCrop),$("body").append("<input class='cropanh d-none' value=''>")),t=$(".cropanh"),e=$(".zh-in-text1"),a=$(".zh-in-text2"),o=$(".zh-in-text3"),d=$(".zh-in-texta"),$("#cropanh").click(function(){$(".cropanh").val(1),n()}),e.on("input",function(){n()}),a.on("input",function(){n()}),o.on("input",function(){n()}),d.on("input",function(){n()}),$("#zh-zhaend").click(function(){0!==$(".btn-chonanh").length&&$("#cropanh").click(),$("#zh-zhaend").addClass("disabled").html("<span class='spinner-border spinner-border-sm'></span> Creando Foto"),$("#img-out").hide(),t0=$(".zh-in-text0").val(),$(".zh-out-text0").html(t0),t1=$(".zh-in-text1").val(),$(".zh-out-text1").html(t1),t2=$(".zh-in-text2").val(),$(".zh-out-text2").html(t2),t3=$(".zh-in-text3").val(),$(".zh-out-text3").html(t3),ta=$(".zh-in-texta").val(),ta&&$(".zh-out-texta").html(ta.replace(/\r?\n/g,"</div><div>")),html2canvas(document.querySelector(".zhaend-main"),{useCORS:!0,scrollX:0,scrollY:0,width:rongh2,height:daih2,scale:1,x:0,y:0}).then(t=>{zhUpload(t)})}),0!==$(".btn-chonanh").length&&(window.onload=function(){var c,e=window.Cropper,l=window.URL||window.webkitURL,r=document.querySelector(".img-container").getElementsByTagName("img").item(0),t=document.getElementById("actions"),a={aspectRatio:tyle,viewMode:vmode,preview:".img-preview",autoCrop:!0,strict:!0,background:!0,autoCropArea:1},s=new e(r,a),h=r.src,p="image/jpeg";document.createElement("canvas").getContext||$('button[data-method="getCroppedCanvas"]').prop("disabled",!0),void 0===document.createElement("cropper").style.transition&&($('button[data-method="rotate"]').prop("disabled",!0),$('button[data-method="scale"]').prop("disabled",!0)),t.querySelector(".docs-buttons").onclick=function(t){var e,a,o,n,d=t||window.event,i=d.target||d.srcElement;if(s){for(;i!==this&&!i.getAttribute("data-method");)i=i.parentNode;if(!(i===this||i.disabled||-1<i.className.indexOf("disabled"))&&(n={method:i.getAttribute("data-method"),target:i.getAttribute("data-target"),option:i.getAttribute("data-option")||void 0,secondOption:i.getAttribute("data-second-option")||void 0},e=s.cropped,n.method)){if(void 0!==n.target&&(o=document.querySelector(n.target),!i.hasAttribute("data-option")&&n.target&&o))try{n.option=JSON.parse(o.value)}catch(d){console.log(d.message)}switch(n.method){case"rotate":e&&s.clear();break;case"getCroppedCanvas":try{n.option=JSON.parse(n.option)}catch(d){console.log(d.message)}"image/jpeg"===p&&(n.option||(n.option={}),n.option.fillColor="#fff")}switch(a=s[n.method](n.option,n.secondOption),n.method){case"rotate":e&&s.crop();break;case"scaleX":case"scaleY":i.setAttribute("data-option",-n.option);break;case"getCroppedCanvas":a&&$(".anhdacat").html(a);break;case"destroy":s=null,c&&(l.revokeObjectURL(c),c="",r.src=h)}if("object"==typeof a&&a!==s&&o)try{o.value=JSON.stringify(a)}catch(d){console.log(d.message)}}}},document.body.onkeydown=function(t){var e=t||window.event;if(s&&!(300<this.scrollTop))switch(e.keyCode){case 37:e.preventDefault(),s.move(-1,0);break;case 38:e.preventDefault(),s.move(0,-1);break;case 39:e.preventDefault(),s.move(1,0);break;case 40:e.preventDefault(),s.move(0,1)}},$(".cropanh-container").hide();var o=document.getElementById("inputImage");l?o.onchange=function(){var t=this.files;s&&t&&t.length&&(t=t[0],/^image\/\w+/.test(t.type)?(p=t.type,c&&l.revokeObjectURL(c),r.src=c=l.createObjectURL(t),s.destroy(),s=new e(r,a),o.value=null,$(".cropanh").val(1),n(),$(".cropanh-container").show(),$(".btn-upanh span,.btn-chonanh").html("<i class='fas fa-upload'></i> Elige otra Foto")):window.alert("Selecciona un archivo de Imagen"))}:(o.disabled=!0,o.parentNode.className+=" disabled")}))});
