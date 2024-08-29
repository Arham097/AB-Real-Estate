import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import SearchResult from "./Pages/SearchResult";
import PostProeprty from "./Pages/PostProeprty";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search-result" element={<SearchResult />}></Route>
        <Route path="/post-property" element={<PostProeprty />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
