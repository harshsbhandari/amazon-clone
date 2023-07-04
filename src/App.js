import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import HomePage from "./components/HomePage"
import LoginPage from "./components/LoginPage"
import CheckoutPage from "./components/CheckoutPage"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="login"
            element={<LoginPage />}
          />

          <Route
            path="checkout"
            element={<CheckoutPage />}
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
