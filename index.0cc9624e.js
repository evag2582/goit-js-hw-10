!function(){var e;(e=document.querySelector(".loader")).style.display="none",fetch("https://api.thecatapi.com/v1/breeds").then((function(e){return e.ok||console.log("Fallo, revise el llamado"),e.json()})).then((function(n){var t=document.querySelector("select.breed-select"),c=document.querySelector(".cat-info");c.style.display="flex",c.style.width="900px";var o="";document.querySelector(".error").style.display="none",n.forEach((function(e){o+='<option value="'.concat(e.id,'" url="').concat(e.reference_image_id,'">').concat(e.name,"</option>")})),t.innerHTML=o,t.addEventListener("change",(function(){var o=t.value,a=n.find((function(e){return e.id===o}));if(a){e.style.display="block";var r=new Image;r.onload=function(){e.style.display="none",c.innerHTML='\n                        <img src="https://cdn2.thecatapi.com/images/'.concat(a.reference_image_id,'.jpg"  width="300px"  style="margin:10px 20px 0px 0px"/>\n                        <div>\n                        <h3>').concat(a.name,"</h3>\n                        <p>").concat(a.description,"</p>\n                        <h5>Temperamento:</h5><p>").concat(a.temperament,"</p>\n                        </div>\n                    ")},r.onerror=function(){e.style.display="none",c.innerHTML="<p>Error al cargar la imagen</p>"},r.src="https://cdn2.thecatapi.com/images/".concat(a.reference_image_id,".jpg")}else c.innerHTML=""}))})).catch((function(e){erro.style.display="inline"}))}();
//# sourceMappingURL=index.0cc9624e.js.map
