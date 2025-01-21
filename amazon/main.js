import {todayDeal} from "./todayDeal.js"
// import {todayHomeDeal} from "./todayHomeDeal.js"
// console.log(todayDeal);


function nav2Animation(){

    var tl= gsap.timeline()

    tl.from(".nav-2 a",{
        opacity:0,
        duration:3,
        stagger:.1,




    })
}

nav2Animation()

const homeDeal=[
   {
       img:'https://m.media-amazon.com/images/I/61KKcUHzXTL._AC_SY200_.jpg',
       discount:'',
       dealOfTheDay:''
   },
   {
       img:'https://m.media-amazon.com/images/I/711pkCwAsIL._AC_SY200_.jpg',
       discount:'',
       dealOfTheDay:''
   },
   {
       img:'https://m.media-amazon.com/images/I/91bSzPG0F3L._AC_SY200_.jpg',
       discount:'',
       dealOfTheDay:''
   },
   {
       img:'https://m.media-amazon.com/images/I/71-idQ966EL._AC_SY200_.jpg',
       discount:'',
       dealOfTheDay:''
   },
   {
       img:'https://m.media-amazon.com/images/I/71tuBk9UgML._AC_SY200_.jpg',
       discount:'',
       dealOfTheDay:''
   },
   {
       img:'https://m.media-amazon.com/images/I/71DZEPZEFRL._AC_SY200_.jpg',
       discount:'',
       dealOfTheDay:''
   },
   {
       img:'https://m.media-amazon.com/images/I/81WWuDV6tyL._AC_SY200_.jpg',
       discount:'',
       dealOfTheDay:''
   },
   {
       img:'https://m.media-amazon.com/images/I/91Icme6zMyL._AC_SY200_.jpg',
       discount:'',
       dealOfTheDay:''
   },
   {
       img:'https://m.media-amazon.com/images/I/61Ednx4od8L._AC_SY200_.jpg',
       discount:'',
       dealOfTheDay:''
   },
   {
       img:'https://m.media-amazon.com/images/I/910HqJed2uL._AC_SY200_.jpg',
       discount:'',
       dealOfTheDay:''
   },
   {
       img:'https://m.media-amazon.com/images/I/811hoHfK-GL._AC_SY200_.jpg',
       discount:'',
       dealOfTheDay:''
   },
   {
       img:'https://m.media-amazon.com/images/I/811hoHfK-GL._AC_SY200_.jpg',
       discount:'',
       dealOfTheDay:''
   },
   {
       img:'https://m.media-amazon.com/images/I/81vCZmNmjHL._AC_SY200_.jpg',
       discount:'',
       dealOfTheDay:''
   },
   {
       img:'https://m.media-amazon.com/images/I/81nQC9n2mwL._AC_SY200_.jpg',
       discount:'',
       dealOfTheDay:''
   },
   {
       img:'https://m.media-amazon.com/images/I/81Lwduxlw2L._AC_SY200_.jpg',
       discount:'',
       dealOfTheDay:''
   },
   {
       img:'https://m.media-amazon.com/images/I/814pVqSpIRL._AC_SY200_.jpg',
       discount:'',
       dealOfTheDay:''
   },
   {
       img:'https://m.media-amazon.com/images/I/81eKr+1jY2L._AC_SY200_.jpg',
       discount:'',
       dealOfTheDay:''
   },
   {
       img:'https://m.media-amazon.com/images/I/91C-06XEJvL._AC_SY200_.jpg',
       discount:'',
       dealOfTheDay:''
   },
   {
       img:'https://m.media-amazon.com/images/I/710bxyzw8EL._AC_SY200_.jpg',
       discount:'',
       dealOfTheDay:''
   },
   {
       img:'https://m.media-amazon.com/images/I/71ZvCzN6iXL._AC_SY200_.jpg',
       discount:'',
       dealOfTheDay:''
   },
   {
       img:'https://m.media-amazon.com/images/I/61uNwSwVZiL._AC_SY200_.jpg',
       discount:'',
       dealOfTheDay:''
   },
   {
       img:'https://m.media-amazon.com/images/I/A1hDL33zg5L._AC_SY200_.jpg',
       discount:'',
       dealOfTheDay:''
   },
   {
       img:'https://m.media-amazon.com/images/I/7134v0c8gFL._AC_SY200_.jpg',
       discount:'',
       dealOfTheDay:''
   },
   {
       img:'https://m.media-amazon.com/images/I/51FKy0zckGL._AC_SY200_.jpg',
       discount:'',
       dealOfTheDay:''
   },
   {
       img:'https://m.media-amazon.com/images/I/61WAbj9s0WL._AC_SY200_.jpg',
       discount:'',
       dealOfTheDay:''
   },
]

const images =
   ["https://images-eu.ssl-images-amazon.com/images/G/31/img23/Consumables/X-GL/Feb5/PC_Hero_1_3000._CB582457311_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2024/GW/August/Unrec/BAU/21Aug/2-1._CB565867124_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/2024/BAU/Hero/Unrec/D91435399_WLA-BAU-Unrec-Hero_DesktopTallHero_3000x1200._CB582928607_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2024/GW/August/Unrec/BAU/21Aug/1-1._CB565867124_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/New_Dec_3000x1200._CB538652056_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG24/Smart_Watches/MED_MAY/Tall_Hero_1500X600_BAU_NewLaunches._CB554931622_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Consumables/X-GL/Feb5/PC_Hero_1_3000._CB582457311_.jpg"


   ]

var imgIndex = 0;



const nextBtn = document.querySelector("#nextBtn")
const backBtn = document.querySelector("#backBtn");
const OfferImg = document.querySelector("#Offers-img")

nextBtn.addEventListener("click", () => {
   OfferImg.src = images[Math.floor(Math.random() * images.length)]

})
backBtn.addEventListener("click", () => {
   OfferImg.src = images[Math.floor(Math.random() * images.length)]
})

// function furnitureScroll(){


//   accessoriesScroll.addEventListener('wheel',(e)=>{
//    e.preventDefault();
//    accessoriesScroll.scrollBy({
//       left:event.deltaY < 0 ? -300 :300,
//    })
//   })
// }
// furnitureScroll()



//----------------------------------------------------------------




function offerScrollSection(){


    const todayDealBottom =document.querySelectorAll('.todays_deals_container')

    todayDealBottom.forEach(element => {
       const todayDealsProductContainer= element.querySelectorAll('.product-img img')
       const productImg= element.querySelector('.product-img')
    
       
       
     
    
       const nextBtn1= element.querySelector('.next-btn')
       const backBtn1= element.querySelector('.back-btn')
       nextBtn1.addEventListener('click',()=>{
          productImg.style.scrollBehavior='smooth'
         productImg.scrollBy(1000,0)
           })
           backBtn1.addEventListener('click',()=>{
             productImg.style.scrollBehavior='smooth'
            productImg.scrollBy(-1000,0)
              })
    
    
    
    }); 
    

    const todayDealImages= document.querySelector('.todayDealImages')
const HomeDealImages= document.querySelector('.homeDealImages')

let HomeDealImage=''
let todayDealImage=''

todayDeal.forEach((i)=>{
    todayDealImage+=`
    <img src= "${i.img}">
    `
})

homeDeal.forEach((i)=>{
    HomeDealImage+=`
    <img src= "${i.img}">
    `
})

todayDealImages.innerHTML= todayDealImage
 HomeDealImages.innerHTML= HomeDealImage
}
offerScrollSection()


const productData = [
    {
      img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTZ5HU-cwoJT0ZfMQnSD3VXLDexkbOUy4QDYuC9QaWd2oSa7hNaddxpurY8M_ooHNcrHWmvEIDIDwNB4eTlxhjOR99xb18ZBxudpUgqYeAOmxfHnDTQqjjUnw',
      name: 'Wireless Bluetooth Headphones',
      price: 29.99,
      discount: 20,
    },
    {
      img: 'https://m.media-amazon.com/images/I/61Lgfcc+o-L._AC_UY327_FMwebp_QL65_.jpg',
      name: 'Portable Bluetooth Speaker',
      price: 49.99,
      discount: 15,
    },
    {
      img: 'https://m.media-amazon.com/images/I/61rbYFj7DgL._AC_UY327_FMwebp_QL65_.jpg',
      name: 'Smart Watch Fitness Tracker',
      price: 79.99,
      discount: 25,
    },
    {
      img: 'https://m.media-amazon.com/images/I/51CziEalEJL._AC_UY327_FMwebp_QL65_.jpg',
      name: 'Ergonomic Wireless Mouse',
      price: 19.99,
      discount: 10,
    },
    {
      img: 'https://m.media-amazon.com/images/I/81JG5E6nJXL._AC_UY327_FMwebp_QL65_.jpg',
      name: 'Mechanical Keyboard with RGB',
       price: 99.99,
      discount: 30,
     },
      {
      img: 'https://m.media-amazon.com/images/I/61xsC6cznjL._AC_UY327_FMwebp_QL65_.jpg',
      name: 'High-Definition Webcam',
      price: 59.99,
      discount: 18,
     },
      {
      img: 'https://m.media-amazon.com/images/I/61yJRbSSx4L._AC_UL480_FMwebp_QL65_.jpg',
      name: 'Comfortable Gaming Chair',
       price: 149.99,
      discount: 35,
     },
     {
      img: 'https://m.media-amazon.com/images/I/61JyNH3BRWL._AC_UY327_FMwebp_QL65_.jpg',
      name: 'Wireless Charging Pad',
      price: 24.99,
      discount: 12,
     },
    {
      img: 'https://m.media-amazon.com/images/I/51oMWaW7tKL._AC_UY327_FMwebp_QL65_.jpg',
      name: 'Noise Cancelling Earbuds',
        price: 69.99,
      discount: 22,
    },
    {
      img: 'https://m.media-amazon.com/images/I/51DBd7O6GEL._SX522_.jpg',
      name: 'Smart Home Assistant',
        price: 89.99,
      discount: 28,
    },
      {
      img: 'https://m.media-amazon.com/images/I/717MMGU6XmL._AC_UY327_FMwebp_QL65_.jpg',
          name: 'Digital Camera with 4k Video',
        price: 349.99,
        discount: 40,
      },
      {
       img: 'https://m.media-amazon.com/images/I/51bGfdFAG5L._AC_UY327_FMwebp_QL65_.jpg',
          name: 'Portable Mini Projector',
        price: 129.99,
        discount: 32,
      },
      {
      img: 'https://m.media-amazon.com/images/I/814SDu24dnL._AC_UY327_FMwebp_QL65_.jpg',
         name: 'External Hard Drive',
        price: 79.99,
        discount: 15,
      },
     {
        img: 'https://m.media-amazon.com/images/I/71ltsViEA8L._AC_UY327_FMwebp_QL65_.jpg',
         name: 'Gaming Headset with Microphone',
        price: 49.99,
        discount: 10,
      },
    {
      img: 'https://m.media-amazon.com/images/I/51wIMdMKyrL._AC_UY327_FMwebp_QL65_.jpg',
      name: 'Standing Desk Converter',
        price: 199.99,
      discount: 30,
     },
    {
      img: 'https://m.media-amazon.com/images/I/6121+qhMo9L._AC_UL480_FMwebp_QL65_.jpg',
      name: 'Tablet with Stylus Pen',
        price: 249.99,
      discount: 25,
     },
    {
      img: 'https://m.media-amazon.com/images/I/71eM1Lx0CiL._AC_UL480_FMwebp_QL65_.jpg',
       name: 'Laptop Cooling Pad',
        price: 14.99,
       discount: 5,
     },
    {
      img: 'https://m.media-amazon.com/images/I/51R1OTDAteL._AC_UY327_FMwebp_QL65_.jpg',
         name: 'Wireless Charging Phone Case',
        price: 29.99,
        discount: 18,
     },
  ];
  



const page3bottom= document.querySelector('#page3bottom-section')

// const page3ImageDiv= document.querySelectorAll('.page3-image-div')






const page3bottomRightImageSection= document.querySelector('#page3bottom-right-images-section')
  page3bottomRightImageSection.innerHTML=""


productData.forEach(element=>{





  
  const page3Image= document.createElement('div')
  page3Image.setAttribute('class','page3-image-div')
  
  const page3Img= document.createElement('img')
  page3Img.src=element.img
  
  const page3para= document.createElement('p')
  page3para.setAttribute('class','about-product')

  const truncatedPara= element.name.length>20? element.name.slice(0,25)+'...':element.name
  page3para.innerHTML=truncatedPara
  
  const h4= document.createElement('h4')
  h4.innerHTML=`${element.discount} %`
  
  const h3= document.createElement('h3')
  h3.innerHTML='Limited Time Deal'
  
  const page3para2= document.createElement('p') 
  page3para2.setAttribute('class','price')
  page3para2.innerHTML=`$${element.price}`
  
  page3Image.append(page3Img)
  page3Image.append(page3para)
  page3Image.append(h4)
  page3Image.append(h3)
  page3Image.append(page3para2)
 

  

  
  page3bottomRightImageSection.append(page3Image)





})

const page3ImageSlider= document.querySelector('#page3bottom-right-images-section')
const nextBtn2= document.querySelector('#page3bottom-right-section .next-btn')
const backBtn2= document.querySelector('#page3bottom-right-section .back-btn')

nextBtn2.addEventListener('click',()=>{
page3ImageSlider.style.scrollBehavior='smooth'
page3ImageSlider.scrollBy(1000,0)
  
})
backBtn2.addEventListener('click',()=>{
page3ImageSlider.style.scrollBehavior='smooth'
page3ImageSlider.scrollBy(-1000,0)
  
})
function VideoDealSlider(){
 



}

VideoDealSlider()

const body= document.querySelector('body')
const backToTopSection= document.querySelector('#backToTop')
backToTopSection.addEventListener('click',()=>{
  
document.documentElement.scrollTop=0
})