!function(){const e=document.querySelector(".loader");e.style.display="none",fetch("https://api.thecatapi.com/v1/breeds").then((e=>(e.ok||console.log("Fallo, revise el llamado"),e.json()))).then((n=>{let t=document.querySelector("select.breed-select"),i=document.querySelector(".cat-info");i.style.display="flex",i.style.width="900px";let o="";document.querySelector(".error").style.display="none",n.forEach((e=>{o+=`<option value="${e.id}" url="${e.reference_image_id}">${e.name}</option>`})),t.innerHTML=o,t.addEventListener("change",(function(){const o=t.value,r=n.find((e=>e.id===o));if(r){e.style.display="block";const n=new Image;n.onload=function(){e.style.display="none",i.innerHTML=`\n                        <img src="https://cdn2.thecatapi.com/images/${r.reference_image_id}.jpg"  width="300px"  style="margin:10px 20px 0px 0px"/>\n                        <div>\n                        <h3>${r.name}</h3>\n                        <p>${r.description}</p>\n                        <h5>Temperamento:</h5><p>${r.temperament}</p>\n                        </div>\n                    `},n.onerror=function(){e.style.display="none",i.innerHTML="<p>Error al cargar la imagen</p>"},n.src=`https://cdn2.thecatapi.com/images/${r.reference_image_id}.jpg`}else i.innerHTML=""}))})).catch((e=>{erro.style.display="inline"}))}();
//# sourceMappingURL=index.ce367f80.js.map
