import './App.css'
import Counter from './counter';
import Team from './Team';

function App() {

  function handleClick(){
    alert('button clicked');
  }
  
  const handleClick2 = () =>{
    alert('button 2 clicked')
  }
 
  const addToFive = (num) =>{
    alert(num + 5);
  }

return (
    <>
     <h3>React Core Concept 2</h3>
     
     <Users></Users>

     <Team></Team>

     <Counter></Counter>

     <button onClick={handleClick}>Click Me</button>
     <button onClick={handleClick2}>click2</button>
     <button onClick={() =>{alert('third clicked')}}>Third</button>
     {/* vejailla button */}
     <button onClick={() => addToFive(3)}>Four</button>
    </>
  )
}

export default App
