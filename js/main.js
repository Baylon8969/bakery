window.onload = function(){

    const save_for_later_container = document.querySelector('.small-container_3');

    // adding data to localstorage
    const addToSaveBtn = document.getElementsByClassName('btn-primary');
    let items = [];

    //i'm using for loop to add a click event to each items button
    for(let i=0; i<addToSaveBtn.length; i++){

        addToSaveBtn[i].addEventListener("click",function(e){
        
            if(typeof(Storage) !== 'undefined'){
                
                let item = {
                             id:i+1,
                             pic: e.target.parentElement.children[0].src,
                             name:e.target.parentElement.children[1].textContent,
                             p: e.target.parentElement.children[2].textContent,
                             no:1
                            };
                        
                if(JSON.parse(localStorage.getItem('items')) === null){
                        items.push(item);
                        localStorage.setItem("items",JSON.stringify(items));
                        window.location.reload();
                }else{
                        const localItems = JSON.parse(localStorage.getItem("items"));
                        
                        localItems.map(data=>{

                            if(item.id == data.id){
                                item.no = data.no + 1;
                            }else{
                                items.push(data);
                            }
                            
                        });
                        
                        items.push(item);
                        localStorage.setItem('items',JSON.stringify(items));
                        window.location.reload();
                    
                    }
                    
                }else{

                    alert('local storage is not working on your browser');
                }

                    itemNumbers()
            });
    }

    // update and display the number of items in the "save for later" folder//
    let no = 0;
    function itemNumbers(){
       
        no = 0;
        
	    JSON.parse(localStorage.getItem('items')).map(data=>{
		    no = no+data.no
	    });
            if(no == 1){
                alert("there is "+ no +" item in the filder")
            }else{
                alert("there are "+ no +" items in the folder")
            }
            
    }

    const counter = document.getElementById('nmbrofitms');
    
	JSON.parse(localStorage.getItem('items')).map(data=>{
		no = no+data.no
	});
	counter.innerHTML = no;

    //adding items in the "save for later" folder
	const save_for_later = save_for_later_container.querySelector('.row');
	let tableData = '';
    tableData += '<h1>items</h1>';
    
    let itmInLocalStorage = JSON.parse(localStorage.getItem('items'))[0]

	if(itmInLocalStorage === null){
        alert('Empty')
	}else{
        JSON.parse(localStorage.getItem('items')).map(data=>{

            tableData +=`<div class="col-4">
                            <img src='${data.pic}'>
                            <h4>${data.name}</h4>
                            <p>${data.p}</p>
                            <span id="nmbrofitms">${data.no}</span>
                        </div>`;
            });
	}
	save_for_later.innerHTML = tableData;
}

//like button
let likebtn = document.querySelectorAll('.heart-box')

for(let i=0; i<likebtn.length; i++){

    console.log()

    likebtn[i].addEventListener('click', function(e){
        
        console.log(e.target.parentElement)

        if(e.target.parentElement.children[0].classList.contains("far")){
            e.target.parentElement.children[0].classList.remove("far")
            e.target.parentElement.children[0].classList.add("fas")
         }else{
            e.target.parentElement.children[0].classList.remove("fas")
            e.target.parentElement.children[0].classList.add("far")
         }
    })

    

}

$(document).ready(function(){
    $(".dropdown").hover(function(){
        $(this).find('ul').fadeIn(300);    
    },function(){
        $(this).find('ul').fadeOut(300);
    });
    
    
    $(".dropdown").click(function(){

        $(this).find('ul').slideDown(5000).css("font-size", "1.5em").slideUp(5000);
    });
      
});






