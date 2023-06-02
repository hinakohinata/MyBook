
import './App.css';
import {useState} from 'react'
import Content from './Content';
const raido =[
  {
    id:1,
    name:'Javascript'
  },{
    id:2,
    name:'React Native'
  },{
    id:3,
    name:'React JS'
  }
]
function App() {
  const styles =['i9 9900K',
'Ram 32GB RGB',
'GPU 6GB DDR6'
]
  const [lists,setLists]= useState([])
  const[list,setList]=useState(false)

  // const [counter, setCounter] = useState([]);
  
  // const Change=(x)=>{
  //   const isChecked = counter.includes(x)
  //  setCounter(prev=>([...prev,x])
    
  //  )
  // }
  const Change=()=>{
      setList(!list)
      console.log(list);
  }
  
 return (
    <div className="App">
      
      <button onClick={Change}>Click</button>
      {list&&<Content/>}
    </div>
  );
}

export default App;
