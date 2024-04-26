import Login_main from "./components/Login_main";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import System_User from "./components/System_User";
import Orgs from "./components/Orgs";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login_main />} />
        <Route path="/System_User" element={<System_User/>}/>
        <Route path="/Orgs" element={<Orgs/>}/>
      </Routes>
    </Router>
  );
}

export default App;
