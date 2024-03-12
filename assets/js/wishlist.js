const tbody = document.querySelector("tbody");

const comingwishlistData = JSON.parse(localStorage.getItem("wishlist"));

let tr = "";

comingwishlistData.map((i,c)=>{
    tr+=`  <tr>
    <th scope="row">${c+1}</th>
    <td><img style="object-fit:cover" width="200" height="200"  src="${i.image}"/></td>
    <td>${i.title.en}</td>
    <td>${i.price}$</td>
  </tr>`
  tbody.innerHTML = tr;
})






function clearWish() {
    localStorage.removeItem('wishlist');
    location.reload(); 
    alert('Wishlist təmizlənsinmi?');
}
  
