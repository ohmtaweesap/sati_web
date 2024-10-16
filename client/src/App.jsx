import { Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";
import Home from "./pages/Home";
import Balance from "./pages/Balance";
import CheckBalance from "./pages/CheckBalance";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/balance" element={<Balance />} />
      <Route path="/CheckBalance" element={<CheckBalance />} />
    </Routes>
)};

export default App;
