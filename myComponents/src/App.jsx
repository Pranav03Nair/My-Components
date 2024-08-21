import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Card1 from "./components/cards/Card1";

const App = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Router>
        <Routes>
          <Route path="/components/card1" element={<Card1 />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
