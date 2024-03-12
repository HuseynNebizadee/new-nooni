


const langBtn = document.querySelectorAll('#lang-btn');
const langItem = document.querySelectorAll('.lang');
const oll =  document.querySelector("#ip")
Acer = true
const langData = {
  en: ['HOME', 'SHOP', 'BLOG', 'ABOUT US', 'CONTACT US', 'Home / Blog', 'Blog Noon’i', 
   'ABOUT','Our Story' ,'Influencers','Join our team', 'Join our shop','CUSTOMER SERVICES' ,
      'Home', 'Features' , 'Pricing' ,'FAQs', 'SIGN UP FOR EMAILS', 'Enjoy 15% off* your first order when sign up to our newsletter',
      'Home',
      'About',
      'Shop',
      'Product',
      'Blog'
    ],
    

  az: ["Ana Səhifə", "Məhsullar", "Məqalə", "Haqqımızda", "Əlaqə", "Ana Səhifə / Məqalə", "Məqalə Nooni"
  
        ,"Haqqimizda","Bizim hekaye","Bizə qoşul","Mağazaya qoşul","Təsirlər"
      ,"Müştəri servisi","Ana Səhifə","Xüsusiyyətləri","Qiymət","Suallar"
        ,"Email ilə qeydiyyat","Bülletenimizə üzv olanda ilk sifarişinizdə 15% endirimdən həzz alın","Ana Səhifə",
        "Haqqımızda",
        "Mağaza",
        "Məhsullar",
        "Məqalə"
      ]
}

fetch("https://mocki.io/v1/f96e3c4b-aaef-45e9-9fff-3bc9a684713b")   

.then(res=>res.json())
.then(data=>{
    let oll = ""
    data.map(item=>{
        oll+=`
        
        <div id="box-parent" style="width:80%" class="col-12 col-sm-6 col-md-12">
            <div id="box"  class="d-flex card shadow">
                <img id="blog-img" style="object-fit:cover; height: 400px; 
                "  src="${item.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${item.price}$</h5>
                  <p  style="font-weight: bold;" class="card-text">${item.title.en.slice(0,60)}...</p>
                  <p class="card-text">${item.description.en}...</p>
                  <a id="cardd" class="btn btn-link" href="#">Read More</a>
                </div>
              </div>
        </div>

        
        `
    })
    document.querySelector("#ip").innerHTML= oll
})
.catch(err=>console.log(err));




if (localStorage.getItem("lang") === null) {
  localStorage.setItem("lang","eng")
}else{
  function multiLang() {
    if (Acer == true) {
      for (let i = 0; i < langData.az.length; i++) {
        langItem[i].innerHTML = langData.az[i];
    }
      fetch("https://mocki.io/v1/f96e3c4b-aaef-45e9-9fff-3bc9a684713b")   


      
      .then(res=>res.json())
      .then(data=>{
          let oll = ""
          data.map(item=>{
              oll+=`
              
              
              
              <div id="box-parent" style="width:80%" class="col-12 col-sm-6 col-md-12">
                  <div id="box"  class="d-flex card shadow">
                      <img id="blog-img" style="object-fit:cover; height: 400px; 
                      "  src="${item.image}" class="card-img-top" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">${item.price}$</h5>
                        <p style="font-weight: bold;" class="card-text">${item.title.az.slice(0,60)}...</p>
                        <p class="card-text">${item.description.az}...</p>
                        <a id="cardd" class="btn btn-link" href="#">Read More</a>
                      </div>
                    </div>
              </div>
              
              
              
              
              
              
              `
          })
          document.querySelector("#ip").innerHTML= oll
      })
      .catch(err=>console.log(err));
      
      
      
      
      langBtn[0].innerHTML = "EN";
      localStorage.setItem("lang","aze")
      Acer= false
    } else {
      for (let i = 0; i < langData.en.length; i++) {
        langItem[i].innerHTML = langData.en[i];
    }
      fetch("https://mocki.io/v1/f96e3c4b-aaef-45e9-9fff-3bc9a684713b")   



.then(res=>res.json())
.then(data=>{
  let oll = ""
  data.map(item=>{
      oll+=`
      
      
      
      <div id="box-parent" style="width:80%" class="col-12 col-sm-6 col-md-12">
          <div id="box"  class="d-flex card shadow">
              <img id="blog-img" style="object-fit:cover; height: 400px; 
              "  src="${item.image}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${item.price}$</h5>
                <p  style="font-weight: bold;" class="card-text">${item.title.en.slice(0,60)}...</p>
                <p class="card-text">${item.description.en}...</p>
                <a id="cardd" class="btn btn-link" href="#">Read More</a>
              </div>
            </div>
      </div>

      
      `
  })
  document.querySelector("#ip").innerHTML= oll
})
.catch(err=>console.log(err));
    langBtn[0].innerHTML = "AZ";
Acer = true
localStorage.setItem("lang","eng")
    
  }
}}

langBtn[0].onclick = multiLang;







if (localStorage.getItem("lang")=="aze") {
  for (let i = 0; i < langData.az.length; i++) {
    langItem[i].innerHTML = langData.az[i];
}
  fetch("https://mocki.io/v1/f96e3c4b-aaef-45e9-9fff-3bc9a684713b")   


      
  .then(res=>res.json())
  .then(data=>{
      let oll = ""
      data.map(item=>{
          oll+=`
          
          
          
          <div id="box-parent" style="width:80%" class="col-12 col-sm-6 col-md-12">
              <div id="box"  class="d-flex card shadow">
                  <img id="blog-img" style="object-fit:cover; height: 400px; 
                  "  src="${item.image}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${item.price}$</h5>
                    <p style="font-weight: bold;" class="card-text">${item.title.az.slice(0,60)}...</p>
                    <p class="card-text">${item.description.az}...</p>
                    <a id="cardd" class="btn btn-link" href="#">Read More</a>
                  </div>
                </div>
          </div>
          
          
          
          
          
          
          `
      })
      document.querySelector("#ip").innerHTML= oll
  })
  .catch(err=>console.log(err));
  
  
  
  
  langBtn[0].innerHTML = "EN";
  Acer= false
}else{
  
  for (let i = 0; i < langData.en.length; i++) {
    langItem[i].innerHTML = langData.en[i];
}


  fetch("https://mocki.io/v1/f96e3c4b-aaef-45e9-9fff-3bc9a684713b")   



  .then(res=>res.json())
  .then(data=>{
    let oll = ""
    data.map(item=>{
        oll+=`
        
        
        
        <div id="box-parent" style="width:80%" class="col-12 col-sm-6 col-md-12">
            <div id="box"  class="d-flex card shadow">
                <img id="blog-img" style="object-fit:cover; height: 400px; 
                "  src="${item.image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${item.price}$</h5>
                  <p  style="font-weight: bold;" class="card-text">${item.title.en.slice(0,60)}...</p>
                  <p class="card-text">${item.description.en}...</p>
                  <a id="cardd" class="btn btn-link" href="#">Read More</a>
                </div>
              </div>
        </div>
  
        
        `
    })
    document.querySelector("#ip").innerHTML= oll
  })
  .catch(err=>console.log(err));
      langBtn[0].innerHTML = "AZ";
   Acer = true
  // localStorage.setItem("lang","eng")
      
   





}






































fetch("https://mocki.io/v1/f96e3c4b-aaef-45e9-9fff-3bc9a684713b")
    .then(res => res.json())
    .then(data => {
        const searchInput = document.getElementById('searchInput');
        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase();

            const filteredData = data.filter(item => {
                return item.title.toLowerCase().includes(searchTerm);
            });

            displayFilteredData(filteredData,searchTerm);
        });

        function displayFilteredData(filteredData,searchTerm) {
            let col = "";
            filteredData.forEach(i => {
                let colClass = searchTerm ? "col-12 col-sm-12 col-md-4 col-lg-8" : "col-12 col-sm-12 col-md-4 col-lg-4";
                col += `
          <div data-aos="fade-up" class="${colClass}">
          <div class="card w-75 " id="cc">
              <img  src="${i.image}" class="card-img-top card-image" style="height:auto; width:300px;object-fit:contain;margin-top:5px" alt="...">
              <span class="butt">
              <button><i class="fa-solid fa-cart-shopping" id="cartShopBtn"></i></button>
              <button class="but"><i class="fa-regular fa-heart" id="LikeShopBtn"></i></button>
            </span>
              <div class="card-body">
               <h5 class="card-title">${i.title.en}</h5>
               <p class="card-text">${i.text.slice(0, 90)}...</p>
               <p class="card-text" id="price">${i.price}</p>
               <a href="../pages/readmore.html?id=${i.id}" id="basket-btn" class="read" >Read More</a>
              </div>
          </div>
          </div>
          ;`
            });
            row.innerHTML = col;
        }

    });






































let Swich = true;
const Modebtn = document.querySelector("#modeBtn")
const item = document.querySelector(".light")
if (localStorage.getItem("mode") === null) {
  localStorage.setItem("mode","light")
}else{
  Modebtn.addEventListener("click",()=>{
    if (Swich == true) {
      item.className="dark"
      document.body.style.backgroundColor = "black"
          Modebtn.style.backgroundColor = "#fff"
          Modebtn.innerHTML = '<i style="padding: 7px;" class="fa-regular fa-sun"></i>'
          Modebtn.style.color = "black"
          localStorage.setItem("mode","dark")
          Swich=false
        }else{
          Modebtn.innerHTML = '<i style="padding: 10px;" class="fa-regular fa-moon"></i>'
          document.body.style.backgroundColor = "#fff"
          item.className="light"
          Modebtn.style.backgroundColor = "black"
          Modebtn.style.color = "#fff"
          localStorage.setItem("mode","light")
          Swich=true
        }
        
      })
}




if (localStorage.getItem("mode")=="light") {
  item.className="light"
  Modebtn.style.backgroundColor = "black"
  Modebtn.style.color = "#fff"
  document.body.style.backgroundColor = "#fff"
  Modebtn.innerHTML = '<i style="padding: 10px;" class="fa-regular fa-moon"></i>'

}else{
  Modebtn.innerHTML = '<i style="padding: 7px;" class="fa-regular fa-sun"></i>'
  document.body.style.backgroundColor = "black"
  item.className="dark"
  Modebtn.style.backgroundColor = "#fff"
  Modebtn.style.color = "black"
}






// dur igid
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}