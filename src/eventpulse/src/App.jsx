import { Route, Routes } from "react-router-dom"
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Template /> } >
        <Route index element={<HomePage />} />
        <Route path="event" element={<EventPage />} />
        <Route path="signup" element={<SignupPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="account" element={<AccountPage />} />
        <Route path="eventcreation" element={<EventCreationPage />} />
    </Routes>
)}


export default App
