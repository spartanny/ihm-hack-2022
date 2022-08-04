import './App.css'
import { Link } from 'react-router-dom'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="mt-[20%] text-center">
        <Link to="/asin1"> PRODUCT # 1</Link>
        <br />
        <Link to="/asin2"> PRODUCT # 2</Link>
        <br />
        <Link to="/asin3"> PRODUCT # 3</Link>
      </div>
    </div>
  )
}

export default App
