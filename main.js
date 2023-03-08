let allSpans=document.querySelectorAll('.buttons span');
let results=document.querySelector('.results > span');
let myinput=document.getElementById('input-text');
let inputkey=document.getElementById('input-key');
allSpans.forEach(span=>{
    span.addEventListener('click',(e)=>{
        if(e.target.classList.contains('check')){
            checkItems();
                }
        if(e.target.classList.contains('add')){
            addItems()
        }if(e.target.classList.contains('delete')){
            deleteItems()
        }if(e.target.classList.contains('show')){
            showItems()
        }
    })
})
function checkInput(){
    if(myinput.value===''){
        results.innerHTML='Results is empty';
    }
}
function checkItems(){
    if(myinput.value !==''){
        if(localStorage.getItem(inputkey.value)){
            results.innerHTML=`Found in local storage <span>${myinput.value}</span>`;
        }
        else{
            results.innerHTML=`Not found <span>${myinput.value}</span>`
        }
    }
    else{
        checkInput();
    }
}
function addItems(){
    if(myinput.value !==''){
        localStorage.setItem(inputkey.value,myinput.value);
        results.innerHTML=`Item added is <span>${myinput.value}</span>`
        myinput.value='';
        inputkey.value='';
    }
}function deleteItems(){
    if(myinput.value !==''){
        if(localStorage.getItem(inputkey.value)){
            localStorage.removeItem(inputkey.value)
            results.innerHTML=`item in local storage <span>${myinput.value}</span> Deleted` ;
        }
        else{
            results.innerHTML=`Not found <span>${myinput.value}</span>`
        }
    }
}
function showItems(){
    if(localStorage.length){
        results.innerHTML='';
        for(let [key,value] of Object.entries(localStorage)){
            results.innerHTML+=`<span style="display:block">${value}</span>`;
        }
    }
    else{
        results.innerHTML=`local storage is empty `
    }
}