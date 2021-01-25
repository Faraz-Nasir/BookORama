//Making the delete btn's functional

const list=document.querySelector("#book-list ul");

list.addEventListener("click",function(event){
    if(event.target.className=='delete')
    {
        const li=event.target.parentElement;
        list.removeChild(li);
    }
})

const addbook=document.querySelector("#add-book button");
console.log(addbook)
addbook.addEventListener('click',function(event){
    event.preventDefault();
    const val_added_=document.querySelector('#add-book input[type="text"]')
    console.log(val_added_.value)
    if(val_added_.value!=""){
    //creating li tags
    const li=document.createElement("li");
    const bookName=document.createElement("span");
    const deleteBtn=document.createElement("span");

    bookName.className="name";
    deleteBtn.className="delete";
    bookName.textContent=val_added_.value;
    deleteBtn.textContent="delete";
    li.appendChild(bookName);
    li.appendChild(deleteBtn);

    list.appendChild(li);
}
})

const hide=document.querySelector('#hide')

console.log(hide);

hide.addEventListener("change",function(event){
    if(hide.checked){
        list.style.display="none";
    }
    else{
        list.style.display="block";
    }
})

//SearchFilter Function

const searchBar=document.forms['search-books'].querySelector('input');
searchBar.addEventListener("keyup",function(event){
    const term=event.target.value.toLowerCase();
    const books=list.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
        const title=book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term)!=-1)
        {
            book.style.display='block';
        }
        else{
            book.style.display='none';
        }
    })
})

//Changing the name of the existing books

var bookList=document.querySelectorAll("li .name")

console.log(bookList)




bookList[0].textContent="Secrets Of Narnia"
bookList[1].textContent="How Hard Can it Be"
bookList[2].textContent="Tanmay Bhat"
bookList[3].textContent="Harry Potter And The Chembur of Secrets"



