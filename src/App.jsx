// components
import NavbarComponent from "./components/NavbarComponent"

// outlet
import { Outlet } from "react-router-dom"

// axios baseurl
import axios from 'axios'

axios.defaults.baseURL = "https://dummyjson.com"

function App() {

  return (
    <div>
      <NavbarComponent />  
      <Outlet />
    </div>
  )
}

export default App
