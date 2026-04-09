import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Docs from "./pages/Docs";
import Examples from "./pages/Examples";
// import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/docs" element={<Docs />} />
      <Route path="/examples" element={<Examples />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}
