// Ritesh Parkhi start



// Ritesh Parkhi end



//duplicates flex card

document.getElementById('duplicateCard').onclick = duplicate;

var i = 0;
var original = document.getElementById('flexCard');

function duplicate() {
    var clone = original.cloneNode(true); // "deep" clone
    clone.id = "flexCard" + ++i; // there can only be one element with an ID
    original.parentNode.appendChild(clone);
}


//  <!-- This below code is comitted by Akash Zalke -->

// document.getElementById("outer3").addEventListener("click", toggleState3);
    
// function toggleState3() {
//   let galleryView = document.getElementById("galleryView")
//   let tilesView = document.getElementById("tilesView")
//   let outer = document.getElementById("outer3");
//   let slider = document.getElementById("slider3");
//   let tilesContainer = document.getElementById("tilesContainer");
//   if (slider.classList.contains("active")) {
//     slider.classList.remove("active");
//     outer.classList.remove("outerActive");
//     galleryView.style.display = "flex";
//     tilesView.style.display = "none";
    
//     while (tilesContainer.hasChildNodes()) {
//       tilesContainer.removeChild(tilesContainer.firstChild)
//       }  
//   } else {
//     slider.classList.add("active");
//     outer.classList.add("outerActive");
//     galleryView.style.display = "none";
//     tilesView.style.display = "flex";
     
//     for (let i = 0; i < imgObject.length - 1; i++) {
//       let tileItem = document.createElement("div");
//       tileItem.classList.add("tileItem");
//       tileItem.style.background =  "url(" + imgObject[i] + ")";
//       tileItem.style.backgroundSize = "contain";  
//       tilesContainer.appendChild(tileItem);      
//     }
//   };
// }

// let imgObject = [
//   "images/1.jpg",
//   "images/2.jpg",
//   "images/3.jpg",
// ];

// let mainImg = 0;
// let prevImg = imgObject.length - 1;
// let nextImg = 1;

// function loadGallery() {

//   let mainView = document.getElementById("mainView");
//   mainView.style.background = "url(" + imgObject[mainImg] + ")";

//   let leftView = document.getElementById("leftView");
//   leftView.style.background = "url(" + imgObject[prevImg] + ")";
  
//   let rightView = document.getElementById("rightView");
//   rightView.style.background = "url(" + imgObject[nextImg] + ")";
  
//   let linkTag = document.getElementById("linkTag")
//   linkTag.href = imgObject[mainImg];

// };

// function scrollRight() {
  
//   prevImg = mainImg;
//   mainImg = nextImg;
//   if (nextImg >= (imgObject.length -1)) {
//     nextImg = 0;
//   } else {
//     nextImg++;
//   }; 
//   loadGallery();
// };

// function scrollLeft() {
//   nextImg = mainImg
//   mainImg = prevImg;
   
//   if (prevImg === 0) {
//     prevImg = imgObject.length - 1;
//   } else {
//     prevImg--;
//   };
//   loadGallery();
// };

// document.getElementById("navRight").addEventListener("click", scrollRight);
// document.getElementById("navLeft").addEventListener("click", scrollLeft);
// document.getElementById("rightView").addEventListener("click", scrollRight);
// document.getElementById("leftView").addEventListener("click", scrollLeft);
// document.addEventListener('keyup',function(e){
//     if (e.keyCode === 37) {
//     scrollLeft();
//   } else if(e.keyCode === 39) {
//     scrollRight();
//   }
// });

// loadGallery();


// <!-- Akash Zalke end -->