import { Route, Routes } from "react-router-dom"
import Template from "./pages/TemplatePage"
import HomePage from "./pages/HomePage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Template />} >
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  )
}


export default App
