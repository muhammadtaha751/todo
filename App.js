import logo from './logo.svg';
import './App.css';
import { useState } from 'react';





// const name = "Hello World";
// const obj = { name: "Hello World Object" }
// const data = ['We', 'are', 'United']
// const list = [{ name: "Hello World 1" }, { name: "Hello World 2" }, { name: "Hello World 3" }]
// const complex = [{ company: 'XYZ', jobs: ['Javascript', 'React'] }, { company: 'ABC', jobs: ['AngularJs', 'Ionic'] }]

function App() {
  const [list,setList] =useState([]) 
  const [userInput,setUserInput] = useState('')



  function addItem() {
const tempList = [...list]
tempList.push(userInput)
setList(tempList)
  }
  function updateInputState(e){
setUserInput(e.target.value)
  }


  function deleteItem(index){
const tempList = [...list]
tempList.splice(index,1)
setList(tempList)


  }
  function editItem(){
    const tempList = [...list]

setList(tempList)
  }
//   const [text,settext]=useState(false)
// function hide(){
//   settext(!text)
// }
// const [show,setHide] = useState(false)
// function show_func(){
  
//   setHide(!show)
// }
  return (
    <div className="App">
      <header className="App-header">

<input onChange={updateInputState} placeholder='Enter your item'></input>
<button onClick={addItem}>Add</button>
<ul>
{list.map(function(item,index){
  return <li>{item}
  <button onClick={ () => deleteItem (index)}>Delete</button>
  <button onClick={editItem (index)}>Edit</button>
  </li>
})}
</ul>



        {/* <img src='https://media.giphy.com/media/4PT6v3PQKG6Yg/giphy.gif' className="App-logo" alt="logo" />
        <p>{name}</p>
        <p>{obj.name}</p>
        <ol>
          {data.map(function (item) {
            return <li>{item}</li>
          })}
        </ol>

        <ol>
          {list.map(function (item) {
            return <li>{item.name}</li>
          })}
        </ol>
        <table border={2}>
          <tr>
            <th>company</th>
            <th>jobs</th>
          </tr>
          {complex.map(function(item){
 return <tr>
  <td> {item.company} </td>
  <td> {item.jobs} </td>
</tr>



          })}
        
        </table>
<h1>{}</h1>
{text == false && <p>Hello world</p>}
<button onClick={hide}>hide</button>
{show == false && <img width={100} src='https://previews.123rf.com/images/ericmilos/ericmilos0912/ericmilos091200136/6109526-3d-render-of-light-bulb-on-white.jpg?fj=1' ></img>}
{show == true &&<img width={100} src='https://previews.123rf.com/images/murika/murika1511/murika151100069/48123160-bright-glowing-incandescent-light-bulb-on-a-white-background.jpg' ></img>}
     <button onClick={show_func}>Show</button> */}
     




      </header>
    </div>
  );
}

export default App;
