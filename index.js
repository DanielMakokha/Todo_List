const form=document.querySelector('form');
const input=document.querySelector('input');
const list=document.querySelector('ul');
form.addEventListener('submit',function(e) {
    e.preventDefault();
    toDo();
    input.value='';
})
function toDo(){
    if (input.value=== '') {
        alert('The input is empty');
    }else{
        const value=input.value;
        //creating li element
        const newLi=document.createElement('li');
        //adding the value of the input to the li
        newLi.textContent=value;
        //Adding the delete button
        const deleteBtn=document.createElement('button');
        //Changing the content of the list
        deleteBtn.textContent='Delete'
        //appending li to the ul
        list.append(newLi)
        ///adding the delete button
        newLi.append('',deleteBtn)

        //adding the event listener       

    }
}
//For deleting
list.addEventListener('click',function(e){
    if (e.target.nodeName ==='BUTTON') {
        e.target.closest('LI').remove();
    }
})