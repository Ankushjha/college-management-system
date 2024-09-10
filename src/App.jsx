import { Route, Routes } from "react-router-dom"
import Home from './components/Home'
import PrivateNavbar from "./components/PrivateNavbar"
import PublicNavbar from "./components/PublicNavbar"
import PublicLayout from './components/layout/PublicLayout'
import PrivateLayout from './components/layout/PrivateLayout'
import Register from "./components/pages/userManagement/Register"
import SigninLanding from "./components/pages/userManagement/SigninLanding"

function App() {

  return (
    <>
      <Routes>
        <Route element={<PrivateLayout />} >
          <Route path="/" element={<Home />} />
          {/* <Route path="/public-navbar" element={<PublicNavbar />} /> */}
          <Route path="/private-navbar" element={<PrivateNavbar />} />
          <Route path="/public-layout" element={<PublicLayout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<SigninLanding />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
