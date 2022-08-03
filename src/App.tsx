import './App.css'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Link to="/asin1"> PRODUCT # 1</Link>
      <Link to="/asin2"> PRODUCT # 2</Link>
      <Link to="/asin3"> PRODUCT # 3</Link>
    </div>
  )
}

export default App
