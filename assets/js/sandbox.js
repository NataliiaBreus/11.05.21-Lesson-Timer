/*
const btn = document.getElementById('btn');

btn.addEventListener('click', (e)=>{
    while(true){}
});

function sum(){
    return 2 + 2;
}
setTimeout(()=>alert(),2000);
console.log(sum());
clearTimeout()
*/
// с помощью setInterval написать ф-ю, которая будет выводить раз в секунду числа от 1 до 20

function count(){
    let counter = 0;
   const id = setInterval(()=>{
    console.log(++counter);
    if(counter >=20){
        clearInterval(id);
    }
   }, 500)
}

         

        