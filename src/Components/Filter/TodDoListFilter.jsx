
export default function ToDoListFilter({AddItemToDoList}){
   
    function AddItemToList(){
        const itemToAdd = document.getElementById("newItemInpt").value;
        if(itemToAdd != "" && itemToAdd != undefined){
            AddItemToDoList({name:itemToAdd});
        }
        else{
            alert("Please enter a task");
        }
       
    }
  
    return(
        <div>
            <input id='newItemInpt' className="width100 addItemInputBar" placeholder="add item..."></input>
            <div className="marginTop15"> 
                <button onClick={AddItemToList}  className="styleButton">Add item</button>
            </div>
             
        </div>
    )
}