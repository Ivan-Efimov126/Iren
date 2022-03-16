'use strict'
let s05Area12 = Array.from(document.querySelectorAll('.s05 .area-12'))
let s05Area12Img = Array.from(document.querySelectorAll('.s05 .area-12 img'))
s05Area12.forEach(element => {
  element.addEventListener('mouseover', () => {
    s05Area12.forEach(element => {
      element.classList.remove("active")
    })
    element.classList.add("active")
  })
});