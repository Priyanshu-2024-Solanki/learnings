import { useState } from "react";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { filterAtom, filterTodo, todoAtom } from "./store/atoms/count";

function App()
{
  return <div>
    <RecoilRoot>
     <AddTodo/>
     <FilterTodo/>
     <ShowTodo/>
   </RecoilRoot>
  </div>
}

function FilterTodo()
{
  const [filter , setFilter] = useState('');
  const changeFilter = useSetRecoilState(filterAtom);

  return <div>
    <label>Filter </label>
    <input onChange={(e) => setFilter(e.target.value)}></input>
    <br></br>
    <br></br>
    <button onClick={() => {
      changeFilter(filter);
    }}>Filter Todos</button>
  </div>
}

function AddTodo()
{
  const [title , setTitle] = useState('');
  const [description , setDescription] = useState('');
  const [todo , setTodo] = useRecoilState(todoAtom);

  function addTodo()
  {
    setTodo([...todo , {
      title,
      description
    }]);
  }

  return <div>
     <label >Title </label>
    <input  onChange={(e) => setTitle(e.target.value)}></input>
    <br></br>
    <br></br>
    <label >Description </label>
    <input onChange={(e) => setDescription(e.target.value)}></input>
    <br></br>
    <br></br>
    <button onClick={addTodo}>Add Todo</button>
     <br></br>
     <br></br>
     <br></br>
  </div>
}

function ShowTodo()
{
  const filterTodos = useRecoilValue(filterTodo);

  return <div>
    {filterTodos.length!==0 && 
     filterTodos.map((todo , index) => {
      return <div key={index}>
        <h2>{todo.title}</h2>
        <h5>{todo.description}</h5>
      </div>
})}
  </div>
}

export default App;