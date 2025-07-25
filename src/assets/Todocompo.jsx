import react, {useState} from 'react';

function Todocompo(){
    
    const [task , setTask] = useState(["play cricket"]);
    const [newtask, setNewTask] = useState("");

    function addNewTask(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if(newtask.trim() !== ""){
            setTask(t=>[...t,newtask]);
        }
    }

    function deleteTask(index){
        const updatedtask = task.filter((_,i) => i!==index);
        setTask(updatedtask);
    }

    function upTask(index){
        const updatedtask= [...task];
        if(index > 0){
            [updatedtask[index],updatedtask[index-1]]=[updatedtask[index-1],updatedtask[index]];
            setTask(updatedtask);
        }
    }
    
    function downTask(index){
        const updatedtask= [...task];
        if(index < updatedtask.length-1){
            [updatedtask[index+1],updatedtask[index]]=[updatedtask[index],updatedtask[index+1]];
            setTask(updatedtask);
        }
    }

    return(
    <>
    <div className='todolist'>
        <h1>To-Do-List</h1>  
    </div>
    <input type="text" value={newtask} placeholder='enter a task...' onChange={addNewTask}></input>
    <button  onClick={addTask}>add task</button>
    <ol>
        {task.map((t,index)=> <li key={index}><span> {t} </span> <button onClick = { () => deleteTask(index)}>delete</button> <button onClick={()=>upTask(index)}>move up</button> <button onClick={()=>downTask(index)}>move down</button></li>)}
    </ol>
    </> 
    )
}
export default Todocompo;