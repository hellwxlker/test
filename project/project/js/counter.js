const numbers = document.querySelectorAll(".number")

numbers.forEach((num)=>{
    numbers.innerHTML = "0"
    function changeNum(){
        let finalRes = +(num.getAttribute("data-num")) // 1000
        let increment = Math.ceil(finalRes/100) // 10
        let value = +num.innerHTML // 0
        if(value < finalRes){
            value += increment
            num.innerHTML = value 
            setTimeout(changeNum, 400)
        }else{
            num.innerHTML = finalRes
        }

    }
    changeNum()
})

console.log(numbers);

