~~~text
1)
import './App.css';
import React from 'react';

const SingleComponent=()=>{
  return (
    <h1>This is single component.</h1>
  )
};

const MultipleComponent=()=>{
  return(
    <div>
      <h1>Its me, Hi!</h1>
      <p>
        I'm the problem its me.
      </p>
    </div> 
  )
}

const App=()=>{
  return (
    <div>
      <SingleComponent/>
      <MultipleComponent/>
    </div>
  )
};

export default App;

2)
import React from 'react';
const User=()=>{
 return( <h1>This is me</h1>)
};
export default User;



import React from 'react';
import User from './user';

const App=()=>{
  return(
    <div>
      <User/>
    </div>
  )
};
export default App;

3)
import './App.css';
import React from 'react';



const ParentComponent = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.message}</p>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <ParentComponent title="Props Example" message="Welcome to the props example!" />
    </div>
  );
};

export default App;

4)
import React from 'react';

const EventComponent = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Event Example</h1>
      <EventComponent />
    </div>
  );
};

export default App;


5)
import "./App.css";
import React,{useState} from "react";



const Counter = ()=>{
  const[count,setcount]=useState(0);

  const Incr = () =>{
    setcount(count+1);
  }

  const Decr = () =>{
    setcount(count-1);
  }
  return(
    <div>
      <h1> Counter:{count}</h1>
      <button onClick={Incr}>Increment</button>
      <button onClick={Decr}>Increment</button>
    </div>
  )

}


const App = () =>{
  return(
    <div>
    <h1>Counter Example</h1>
    <Counter/>
    </div>
  );
};

export default App;
 ~~~
