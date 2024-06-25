import { useEffect } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './pages/Register/Register';

function App() {
  const {user} = useSelector(state => state.authSlice)

  useEffect(() => {
    console.log(user);
  } ,[]);


  return (
    
      <div className="App">
        <Routes>
          <Route path='/register' element={<Register />} />
        </Routes>
        
      </div>

  );
}

export default App;
