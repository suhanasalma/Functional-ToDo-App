const todoInput = document.getElementById('todo-input');
const ul =document.getElementById('ul');

function createLi(){
   const li = document.createElement('li');
   li.innerHTML = `<div class= 'li-flex'> 
         ${todoInput.value} 
         <div>
         <button onclick=checked(this) class='inside-li-button'><i class="fa-solid fa-check-double"></i></button> 
         <button onclick = deleted(this) class='inside-li-button'><i class="fa-solid fa-trash"></i></button>
         </div></div>`;
   return li

}


function checked(el){
   el.parentNode.parentNode.classList.toggle('checked')
  
}

function deleted (el){
   el.parentNode.parentNode.style.display = 'none'
}

const personal = document.getElementById('personal');
personal.addEventListener('click',function(){
   const list = createLi();
   list.classList.add('personal')
   if(todoInput.value===''){
         alert('Add your to do list')
   }else{
      const addTodo = document.getElementById('add-todo');
      addTodo.addEventListener('click',function(){
         list.classList.add('clear')
         ul.appendChild(list)
         todoInput.value = '';
      })
      
   }
   
})


const business = document.getElementById('business');
business.addEventListener('click',function(){
   const list = createLi();
   list.classList.add('business')
   if(todoInput.value===''){
         alert('Add your to do list')
   }else{
      const addTodo = document.getElementById('add-todo');
      addTodo.addEventListener('click',function(){
         list.classList.add('clear')
         ul.appendChild(list)
         todoInput.value = '';
      })
      
   }
   
})


const clearTodo = document.getElementById('clear-todo')

clearTodo.addEventListener('click', function(){
   const getEl = document.getElementsByClassName('clear');
   for(let el of getEl){
      el.style.display = 'none'
   }


})

