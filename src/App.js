import { Route, Link,Routes, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Hero from './components/Hero.js'
import Filter from './components/page2/filter.js'
import Cards from './components/cardContainer.js'
import Detail from './components/page3/detail.js'
import Logout from './components/logout.js'

function App() {
 
  return (
    
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<div><Hero /><Cards /></div>}>

          </Route>
          <Route path='/filter/:meal' element={<Filter/>} />
          <Route path='/detail/:id' element={<Detail key='unique'/>} />
          <Route path='/logout' element={<Logout />}/>
        </Routes>
      </Router>
     
       
    </div>
  );
}

export default App;
