import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./component/Home";
import Events from "./pages/Events";
import SingleEvent from "./pages/SingleEvent";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:slug" element={<SingleEvent />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
