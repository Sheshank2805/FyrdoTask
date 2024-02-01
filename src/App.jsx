import './App.css'
import Routing from './Components/Routing'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Form from './Components/Form'

function App() {
  

  return (
    
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Routing/>}/>
          <Route path='/form' element={<Form/>}/>
        </Routes>
        </BrowserRouter>
      </div>
        
    
  )
}

export default App
