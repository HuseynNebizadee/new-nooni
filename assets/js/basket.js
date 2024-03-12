const tbody = document.querySelector("tbody");

const comingBasketData = JSON.parse(localStorage.getItem("basket"));

let tr = "";

comingBasketData.map((i,c)=>{
    tr+=`  <tr>
    <th scope="row">${c+1}</th>
    <td><img style="object-fit:cover" width="200" height="200"  src="${i.image}"/></td>
    <td>${i.title.en}</td>
    <td>${i.price}$</td>
  </tr>`
  tbody.innerHTML = tr;
})






function clearBasket() {
    localStorage.removeItem('basket');
    location.reload(); 
  alert("basket temizlendi")

    // swal("Good job!", "You clicked the button!", "success");
  }
  


// 
// 
// 
// 
