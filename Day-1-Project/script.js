const minusBtn = document.querySelector(".minus-btn");
const plusBtn = document.querySelector(".plus-btn");
const count = document.querySelector(".count");
const changBy = document.querySelector(".changBy");
const resetBtn = document.querySelector(".reset-btn");

minusBtn.addEventListener("click",()=>{
    const countValue = parseInt(count.innerText);
    const changByValue = parseInt(changBy.value);
    count.innerText=countValue-changByValue;
})
plusBtn.addEventListener("click",()=>{
    const countValue = parseInt(count.innerText);
    const changByValue = parseInt(changBy.value);
    count.innerText=countValue+changByValue;
})

resetBtn.addEventListener("click",()=>{
    count.innerText=0;
    changBy.value=1;
})