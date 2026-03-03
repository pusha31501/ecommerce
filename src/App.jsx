import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";
import Homes from "./pages/Homes";
import Navbar from "./components/Navbar";
import AuthProvider from "./context/AuthContext";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-linear-to-b from-blue-100 to-blue-300">
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homes />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
