//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const celebrities = [
    { name: "Sakib", profession: "Cricketer" },
    { name: "Messi", profession: "Footballer" },
    { name: "Aamir Khan", profession: "Actor" },
    { name: "Ronaldo", profession: "Footballer" },
    { name: "Elon Mask", profession: "Entrepreneur" }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        {
          celebrities.map(celebrity => <Person person={celebrity}></Person>)
        }
        <Users></Users>
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div style={{
      border: '2px solid yellow',
      borderRadius: '5px',
      width: '75%',
      margin: '15px',
      backgroundColor: 'orange',
      color: 'black'
    }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

function Person(props) {
  const { name, profession } = props.person;
  return (
    <div style={{
      border: '2px solid lightsalmon',
      margin: '10px',
      width: '50%'
    }}>
      <h3>{name}</h3>
      <p>{profession}</p>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div style={{
      marginTop: '20px'
    }}>
      <h3>Total users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

export default App;
