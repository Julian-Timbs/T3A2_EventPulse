import { Route, Routes } from "react-router-dom"
import Template from "./pages/TemplatePage"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/loginPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Template />} >
        <Route index element={<HomePage />} />
        <Route path="auth" element={<LoginPage />} />
      </Route>
    </Routes>
  )
}


export default App
