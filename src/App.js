
import './App.css';
import TodDoListFilter from './Components/Filter/TodDoListFilter';
import ToDoItem from './Components/ToDoListItemList/ItemList';
import { useState } from 'react';

function App() {

const [toDoList, setToDoList] =  useState([
   {
      name:"Homework"
   },
   {
      name:"Project"
   },
   {
      name:"Assignment"
   }
] );
const AddItemToDoList = (newItem)=>{
      setToDoList((prevList) => [...prevList,newItem]);
      document.getElementById("newItemInpt").value="";
};
const DeleteItemFromList  = (itemToDelete)=>{
   setToDoList((prevList) => {
      const index = prevList.findIndex(item => item.name === itemToDelete);
      if(index > -1){
         const newList = [...prevList];
         newList.splice(index,1);
         return newList
      }
      return prevList;
   });
}
const EditItemNameFromList = (newName, prevName) => {
   setToDoList((prevList) => {
     for (let i = 0; i < prevList.length; i++) {
       if (prevList[i].name === prevName) {
         prevList[i].name = newName;
         break; 
       }
     }
     return [...prevList]; 
   });
 };
  return (
    <div className="App">
      <div className='toDoListContainer'>
         <div>
            <div className='toDoListTitle'>TODO LIST</div>
            <div className='headerLine'></div>
         </div>
         <div>
            <TodDoListFilter AddItemToDoList={AddItemToDoList}/>
         </div>
         <div className='toDoItemListCont'>
         {toDoList.map((itemData) => (
              <ToDoItem EditItemNameFromList={EditItemNameFromList} DeleteItemFromList={DeleteItemFromList}  key={itemData.name} {...itemData} />
            ))}
         </div>
      </div>
    </div>
  );
}

export default App;
