var num1 = document.querySelector('#num1') as HTMLInputElement
var num2 = document.querySelector('#num2') as HTMLInputElement
var btn = document.querySelector('button')

btn.addEventListener('click', (e)=>{
    e.preventDefault()
    const n1 = num1.value
    const n2 = num1.value

    const res = add(+n1, +n2)
    console.log(res)

})

function add(n1: number, n2:number){
    return n1+n2
}

