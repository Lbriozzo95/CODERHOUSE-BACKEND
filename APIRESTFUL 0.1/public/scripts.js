
document.addEventListener('submit', e =>{
  e.preventDefault();
  let form = document.querySelector('#form');
  let data = new FormData(form);
  let title = data.get('title');
  let price = data.get('price');
  let thumbnail = data.get('thumbnail');

  let req = {
    title:title,
    price:price,
    thumbnail:thumbnail
  }
  fetch('http://localhost:3535/api/productos/addProduct', {

    method:'POST',
    body:JSON.stringify(req),
    headers:{'Content-type':'application/json'}

  }).then((res)=>{
    return res.json()
  }).then((data) =>{
    console.log(data)
  }).catch((err)=>{
    console.log(err)
  })
})


// document.addEventListener('submit', e => {
//   e.preventDefault();
//   let image = document.querySelector('#image');
//   let imgData = new FormData(image);
//   imgData.append('image', files[0])

//   fetch('/api/productos/uploadImage', {

//     method:'POST',
//     body:imgData

//   }).then(response => response.json())
//     .then(data => {console.log(data)})
//     .catch(error => {console.log(error)})
// })

