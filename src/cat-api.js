function fetchBreeds() {
  // Mostrar el cargador
  const loader = document.querySelector('.loader');
    loader.style.display = 'none';

  fetch('https://api.thecatapi.com/v1/breeds')
    .then(response => {
      if (!response.ok) {
        console.log('Fallo, revise el llamado');
      }
      return response.json();
    })
    .then(data => {
      let selectCat = document.querySelector('select.breed-select');
      let infoCat = document.querySelector('.cat-info');
      infoCat.style.display = 'flex';
      infoCat.style.width = '900px';
      let htmlRender = '';
      const erro = document.querySelector('.error');
      erro.style.display = 'none';

      data.forEach(objeto => {
        htmlRender += `<option value="${objeto.id}" url="${objeto.reference_image_id}">${objeto.name}</option>`;
      });

      selectCat.innerHTML = htmlRender;
      // Agregar evento change al select
        selectCat.addEventListener('change', function () {
          
        const selectedId = selectCat.value;
        const selectedBreed = data.find(objeto => objeto.id === selectedId);
          
          if (selectedBreed) {
            // cargador mientras carga de la imagen
              loader.style.display = 'block';

            // Cargar la imagen
            const image = new Image();
            image.onload = function () {
              // Ocultar el cargador una vez que la imagen se ha cargado
              loader.style.display = 'none';
              infoCat.innerHTML = `
                        <img src="https://cdn2.thecatapi.com/images/${selectedBreed.reference_image_id}.jpg"  width="300px"  style="margin:10px 20px 0px 0px"/>
                        <div>
                        <h3>${selectedBreed.name}</h3>
                        <p>${selectedBreed.description}</p>
                        <h5>Temperamento:</h5><p>${selectedBreed.temperament}</p>
                        </div>
                    `;
            };

            // Manejar errores en la carga de la imagen
            image.onerror = function () {
              loader.style.display = 'none';
              infoCat.innerHTML = '<p>Error al cargar la imagen</p>';
            };

            // Asignar la URL de la imagen
            image.src = `https://cdn2.thecatapi.com/images/${selectedBreed.reference_image_id}.jpg`;
          } else {
          infoCat.innerHTML = '';
        }
      });
    })
    .catch(err => {
      erro.style.display = 'inline';
    });
}

export { fetchBreeds };
export let selectCat;
