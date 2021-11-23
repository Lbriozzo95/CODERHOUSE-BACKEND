document.addEventListener('submit', e =>{
    e.preventDefault();
    let form = document.querySelector('#form');
    let data = new FormData(form);

    let title = data.get('title');
    let price = data.get('price');
    let thumbnail = data.get('thumbnail');

    let req = {
        title:title,
        price:parseInt(price),
        thumbnail:thumbnail
    }

    fetch('http://localhost:3535/api/productos/addProduct', {  
      method:'POST',
      body:JSON.stringify(req),
      headers:{'content-type':'application/json'}
    })
    .then(result=>{
      return result.json();
    })
    .then(json =>{
      console.log(json);
    });
  });
