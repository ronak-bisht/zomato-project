import { Route, Link,Routes, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Hero from './components/Hero.js'
import Filter from './components/page2/filter.js'
import Cards from './components/cardContainer.js'
import Detail from './components/page3/detail.js'
import Logout from './components/logout.js'
import { useReducer,createContext } from 'react';
import {initialState, reducer } from './reducer/useReducer.js'

export const UserContext = createContext()
function App() {
 const [state,dispatch]=useReducer(reducer,initialState)

  return (
    
    <div>
      <UserContext.Provider value={{state, dispatch}}>
      <Router>
        <Routes>
          <Route path="/" element={<div><Hero /><Cards /></div>}>

          </Route>
          <Route path='/filter/:meal' element={<Filter/>} />
          <Route path='/detail/:id' element={<Detail key='unique'/>} />
          <Route path='/logout' element={<Logout />}/>
        </Routes>
      </Router>
      </UserContext.Provider>
       
    </div>
  );
}

export default App;
