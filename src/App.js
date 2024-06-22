import { useEffect } from 'react';
import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const {user} = useSelector(state => state.authSlice)

  useEffect(() => {
    
  } ,[]);


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
