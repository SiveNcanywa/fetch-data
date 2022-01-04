fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    for (let item of data) {
      document.getElementById("products").innerHTML += `
           <img src="${item.image}">
           <h4>${item.price}</h4>
           <h6>${item.title}</h6>
           <p>${item.description}</p>`;
    }
  });
