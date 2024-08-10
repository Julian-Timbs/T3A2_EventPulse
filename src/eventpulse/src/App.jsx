import { Route, Routes } from "react-router-dom"
import Template from "./pages/TemplatePage"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/loginPage"
import SignupPage from "./pages/SignupPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Template />} >
        <Route index element={<HomePage />} />
        <Route path="auth" element={<LoginPage />} />
        <Route path="signup" element={<SignupPage />} />
      </Route>
    </Routes>
  )
}


export default App
