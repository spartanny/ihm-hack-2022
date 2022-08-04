import './App.css'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className="header">
        <img
          src="../public/images/amazon_PNG11.png"
          width="110"
          height="20"
        ></img>
      </div>
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <Link to="/asin1"> PRODUCT # 1</Link>
      <br />
      <Link to="/asin2"> PRODUCT # 2</Link>
      <br />
      <Link to="/asin3"> PRODUCT # 3</Link>
    </div>
  )
}

export default App
