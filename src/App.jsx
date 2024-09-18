import { Outlet } from "react-router-dom"
import Hotbar from "./components/Hotbar"


function App() {
  return (
    <>
      <Hotbar/>
      <Outlet />
    </>
  )
}

export default App
