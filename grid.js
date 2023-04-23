//Calculator Logic

//getting Number
const num0=document.getElementById("0")
const num1=document.getElementById("1")
const num2=document.getElementById("2")
const num3=document.getElementById("3")
const num4=document.getElementById("4")
const num5=document.getElementById("5")
const num6=document.getElementById("6")
const num7=document.getElementById("7")
const num8=document.getElementById("8")
const num9=document.getElementById("9")

//getting Operators and symbols
const add=document.getElementById("+")
const sub=document.getElementById("-")
const div=document.getElementById("/")
const mul=document.getElementById("x")
const eq=document.getElementById("=")
const dec=document.getElementById(".")
const reset=document.getElementById("reset")

//getting Input field
const numInput=document.getElementById("numInput")

// console.log(one.textContent)
// console.log(num2)
// console.log(parseFloat(num2)+parseFloat(num1)
// console.log(add.textContent)

num0.addEventListener("click",()=>{
    numInput.value+=parseFloat(num0.textContent)
})
num1.addEventListener("click",()=>{
    numInput.value+=parseFloat(num1.textContent)
})

num2.addEventListener("click",()=>{
    numInput.value+=parseFloat(num2.textContent)
})
num3.addEventListener("click",()=>{
    numInput.value+=parseFloat(num3.textContent)
})

num4.addEventListener("click",()=>{
    numInput.value+=parseFloat(num4.textContent)
})
num5.addEventListener("click",()=>{
    numInput.value+=parseFloat(num5.textContent)
})
num6.addEventListener("click",()=>{
    numInput.value+=parseFloat(num6.textContent)
})
num7.addEventListener("click",()=>{
    numInput.value+=num7.textContent
})
num8.addEventListener("click",()=>{
    numInput.value+=parseFloat(num8.textContent)
})
num9.addEventListener("click",()=>{
    numInput.value+=parseFloat(num9.textContent)
})

//reset button
reset.addEventListener('click',()=>{
    numInput.value=null;
})

//operators

add.addEventListener('click',()=>{
})
sub.addEventListener('click',()=>{
    
})
mul.addEventListener('click',()=>{
    
})
div.addEventListener('click',()=>{
    
})

//decimal
dec.addEventListener('click',()=>{
    numInput.value+=dec.textContent
})


  