const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close1 = document.getElementById("close");
if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active")
    })
}
if (close1) {
    close1.addEventListener("click", () => {
        nav.classList.remove("active")
    })
}
 
 
async function getData(){
    let result = await fetch('./JSON/Allstore.json')
    let data = await result.json()
    // return data;

// features = [{
//         image: "Images/Home/astarinchimes.png",
//         title: "Astarin Chimes",
//         url: "singles/Astarinchimes.html "
//     },
//     {
//         image: "Images/Home/boderry.jpg",
//         title: "Boderry Watch Co",
//         url: "singles/boderry.html "
//     },
//     {
//         image: "Images/Home/glamermaid.png",
//         title: "Glamermaid",
//         url: "singles/glamermaid.html "
//     },
//     {
//         image: "Images/Home/joybos_logo1.png",
//         title: " Joybos",
//         url: "singles/joybos.html "
//     },
//     {
//         image: "Images/Home/mrpetcam.jpeg",
//         title: "Mr.Petcam",
//         url: "singles/Mr.Petcam.html "
//     },
//     {
//         image: "Images/Home/pineapple-island.png",
//         title: " Pineapple Lsland",
//         url: "singles/Pineapple.html "
//     },
//     {
//         image: "Images/Home/proteckd.png",
//         title: "Proteck'd Apparel",
//         url: "singles/Proteck.html "
//     },
//     {
//         image: "Images/Home/pyrofarms.jpeg",
//         title: "PyroFarms",
//         url: "singles/PyroFarms.html "
//     },
//     {
//         image: "Images/Home/rhinousainc_(1).png",
//         title: "Rhino USA",
//         url: "singles/Rhino USA.html "
//     },
//     {
//         image: "Images/Home/ryzesuperfoods1.jpeg",
//         title: "RYZE Superfoods",
//         url: "singles/RYZE.html "
//     },
//     {
//         image: "Images/Home/sybotanica_logo.png",
//         title: "Sybotanica",
//         url: "singles/Sybotanica.html "
//     },
//     {
//         image: "Images/Home/tempest_(1).png",
//         title: "Tempest Weather Flow",
//         url: "singles/Tempest.html "
//     },
//     {
//         image: "Images/Home/tesgobike1.png",
//         title: "tesgoCA",
//         url: "singles/tesgoCA.html "
//     },
//     {
//         image: "Images/Home/triggeredbrand_(1).png",
//         title: "The Triggered Brand",
//         url: "singles/Triggered.html "
//     },
//     {
//         image: "Images/Home/uvlizer.png",
//         title: "Uvlizer",
//         url: "singles/Uvlizer.html "
//     },
//     {
//         image: "Images/Home/vitahotdeals.jpg",
//         title: "VitaHotDeals",
//         url: "singles/VitaHotDeals.html "
//     },
//     {
//         image: "Images/Home/YILONG_TATOO.png",
//         title: "Yilong Tattooing",
//         url: "singles/Tattooing.html "
//     },
//     {
//         image: "Images/Home/yosepower1.png",
//         title: " Yose Power",
//         url: "singles/Yose.html "
//     },
//     {
//         image: "Images/Home/luxepickleball1.png",
//         title: "Luxe Pickle Ball",
//         url: "singles/Luxe.html "
//     },
//     {
//         image: "Images/Home/Guduchi.png",
//         title: "Guduchi Ayurveda",
//         url: "singles/Guduchi.html "
//     },
//      {
//         image: "Images/Home/Guduchi.png",
//         title: "Guduchi Ayurveda",
//         url: "singles/Guduchi.html "
//     }

// ]
// console.log(features);
// product1
 
const conpro = document.querySelector(".pro-container");
let emarry=[]
function product() {
    data.map(prData => {
        console.log();
        const postEle11 = document.createElement("div");
        postEle11.classList.add("pro")
    emarry.push(postEle11)
        postEle11.innerHTML = `
        <div > 
        <img src=${prData.image}>
        <div class="dre">
           
            <h5>${prData.title}</h5>
             
            <button class="normal" ><a id="allbtn" href="${prData.url}" target="_blank">More Details </a> </button>
        </div >
        </div>
    `
        conpro.appendChild(postEle11)
    })
   
}
product()


// serach
function filterData() {
    
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    // console.log(searchTerm);
    emarry.map((curItem)=>{
        curItem.innerText.toLowerCase().includes(searchTerm.toLowerCase()) ? curItem.classList.remove('hide'):curItem.classList.add('hide') 

    })
    
    console.log(searchTerm.length);
 
    
}
}

getData()

   
 

 

 