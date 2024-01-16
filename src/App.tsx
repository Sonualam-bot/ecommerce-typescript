import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/loader";
const Home = lazy(() => import("./pages/home"));
const Search = lazy(() => import("./pages/search"));
const Cart = lazy(() => import("./pages/cart"));

function App() {
  return (
    <div>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
