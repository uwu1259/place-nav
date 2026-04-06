import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/home";
import Company from "./pages/company";
import CompanyDetail from "./pages/company-detail";
import CompanyAnalytics from "./pages/company-analytics";
import CompanyQuestion from "./pages/company-question";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/company/:id" element={<CompanyDetail />} />
        <Route path="/company-analytics" element={<CompanyAnalytics />} />
        <Route path="/company-question" element={<CompanyQuestion />} />
      </Routes>
    </Router>
  );
}

export default App;