// import React, { useState } from "react";
// import CardsView from './Components/CardsView';
// import ListView from './ListView'
// import IconSwitch from './IconSwitch';
// import CardsVeiw from './CardsView';



// const products = [{
//   id: 1,
//   name: "Nike Metcon 2",
//   price: "130",
//   color: "red",
//   img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
// }, {
//   id: 2,
//   name: "Nike Metcon 2",
//   price: "130",
//   color: "green",
//   img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
// }, {
//   id: 3,
//   name: "Nike Metcon 2",
//   price: "130",
//   color: "blue",
//   img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
// }, {
//   id: 4,
//   name: "Nike Metcon 2",
//   price: "130",
//   color: "black",
//   img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
// }, {
//   id: 5,
//   name: "Nike free run",
//   price: "170",
//   color: "black",
//   img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
// }, {
//   id: 6,
//   name: "Nike Metcon 3",
//   price: "150",
//   color: "green",
//   img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
// }];


// function Store () {

// const [icon, setIcon]=useState("view_list")


//   function onSwitch () {

//     setIcon((prevItem)=>{

//       if (prevItem ==="view_list"){
//         return (icon="view_module")
//       } else if(prevItem ==="view_module"){
//         return (icon="view_list")
//       }
      
//     })


//   }

//   return (
//     <>
//     <CardsVeiw 
//       // cards={products}
//     />
//     <ListView 
//       items={products}
//     />
//     <IconSwitch 
//      icon={icon} onSwitch={onSwitch}
//     />
//     </>
    
//   )



// }



// export default Store