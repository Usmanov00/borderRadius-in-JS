const input = document.querySelector('.name')
console.log(input)

const box = document.querySelector('.box')
box.style.width = "300px"
box.style.height = "300px"
box.style.backgroundColor = "indianred"
console.log(box)


const radius = document.querySelector('.radius')
radius.addEventListener('input',() => {
    box.style.borderRadius = `${radius.value}%`
})

const leftRadius = document.querySelector('.leftRadius')
const rightRadius = document.querySelector('.rightRadius')
const rightBottomRadius = document.querySelector('.rightBottomRadius')
const leftBottomRadius = document.querySelector('.leftBottomRadius')


// leftRadius.addEventListener('input', () =>{
//     box.style.borderRadius = `${leftRadius.value}% ${rightRadius.value}% ${rightBottomRadius.value}% ${leftBottomRadius.value}%`
// })
// rightRadius.addEventListener('input', () =>{
//     box.style.borderRadius = `${leftRadius.value}% ${rightRadius.value}% ${rightBottomRadius.value}% ${leftBottomRadius.value}%`
// })
// rightBottomRadius.addEventListener('input', () =>{
//     box.style.borderRadius = `${leftRadius.value}% ${rightRadius.value}% ${rightBottomRadius.value}% ${leftBottomRadius.value}%`
// })
// leftBottomRadius.addEventListener('input', () =>{
//     box.style.borderRadius = `${leftRadius.value}% ${rightRadius.value}% ${rightBottomRadius.value}% ${leftBottomRadius.value}%`
// })
leftRadius.addEventListener('input',radiusGenerator)
rightRadius.addEventListener('input',radiusGenerator)
rightBottomRadius.addEventListener('input',radiusGenerator)
leftBottomRadius.addEventListener('input',radiusGenerator)

function radiusGenerator (){
    box.style.borderRadius = `${leftRadius.value}% ${rightRadius.value}% ${rightBottomRadius.value}% ${leftBottomRadius.value}%`
    console.log(`${leftRadius.value}% ${rightRadius.value}% ${rightBottomRadius.value}% ${leftBottomRadius.value}%`)
}

