import React, {useState} from 'react'
import {useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { InputGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {addTodo,deleteTodo,removeTodo} from "../actions/index"
import "./todo.css";
const Todo = () => {
    const [inputData,setInputData] = useState('');
    const list = useSelector((state)=>state.todoReducers.list);
    const dispatch = useDispatch();
  return(
    <>
    <div id='container'>
        <h1>To-Do List</h1>
        
          
        <div><InputGroup className="mb-3">
    <FormControl
      placeholder="Add items..."
      aria-describedby="basic-addon2"
      value={inputData}
      onChange={(event)=>{setInputData(event.target.value)}}
    />
    <Button variant="outline-secondary" id="button-addon2" onClick={()=>{dispatch(addTodo(inputData),setInputData(''))}}>
    <i className='fa fa-plus '></i>
    </Button>
  </InputGroup></div>

        <ul>
            {
                list.map((elem)=>{
                    return(
                    <li><span><i className='fa fa-trash' title='Delete item' onClick={()=>dispatch(deleteTodo(elem.id))} key={elem.id}></i></span>
                        {elem.data}
                    </li>
                 
                    )
            }
            )}
      
        </ul>
        {list.length?
        (<div class="text-center">
          <Button onClick={()=>dispatch(removeTodo())}>Check All</Button>
        </div>):(<div></div>)}
      </div>
   
    </>
  )
}

export default Todo;