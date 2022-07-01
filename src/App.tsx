import React, { useCallback, useReducer, useRef } from 'react';
import { act } from 'react-dom/test-utils';
import './App.css';
import { Lists } from './components/Lists';

// const Box: React.FunctionComponent<{title:string}>=({title})=>{
//   return <div></div>
// }

interface Todo {
  id:number,
  text:string,
}

type actionType = 
|{type:"ADD"; text:string} 
| {type:"REMOVE"; id:number}

function App() {
  // useReducer
function reducer(state:Todo[],action:actionType){
  switch(action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: state.length,
          text :action.text
        }
      ]
      case "REMOVE":
        return state.filter(({id})=>id !== action.id)
  }

}
//todos is array
const [todos, dispatch]=useReducer(reducer,[])
const newTodoRef= useRef<HTMLInputElement>(null)

//use Call Back hook
const OnAddTodo=useCallback(()=>{
  if(newTodoRef.current){
dispatch({
   type:"ADD",
   text: newTodoRef.current?.value
})

newTodoRef.current.value=""
}
},[])


  return (


    <div className="App">
      {/* <Box title='hello'>abhfgdsh</Box> */}

     {/* <Lists /> */}
<input type="text" name="" id="" ref={newTodoRef} /> 
<button onClick={OnAddTodo}>Add</button>

     {

      todos.map((todo)=>(
        <div key={todo.id}>
          {todo.text}
        </div>
      ))
     }
    </div>
  );
    }

export default App;
