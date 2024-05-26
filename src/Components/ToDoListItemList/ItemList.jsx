import './ToDoItem.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function ToDoItem({name,DeleteItemFromList,EditItemNameFromList}){
function DeleteItem(){
    DeleteItemFromList(name);
}
function EditItem(){
    var newName = document.getElementById("editInptBar").value;
    EditItemNameFromList(newName,name);
}
  
     

    return(
        <div className='itemContainer'>
                <div className='itemTitle'>
                    {name}
                </div>
                <div className='buttonCont'>
                    <button onClick={()=> DeleteItem(name)} className='actionButtons'>Delete</button>
                    <Popup  trigger=
                      {<button className='actionButtons marginLeft5' > Edit </button>}
                      position="right center">
                        <div className='displayFlex editContainer'>
                           <input  id='editInptBar' className='addItemInputBar marginTop0'></input>
                           <button className='styleButton marginLeft5'  onClick={EditItem} >Update</button>
                        </div>
                    
                     </Popup>
                </div>
        </div>
    )
}