import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";
import Homes from "./pages/Homes";
import Navbar from "./components/Navbar";
import AuthProvider from "./context/AuthContext";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-linear-to-b from-blue-100 to-blue-300">
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homes />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
