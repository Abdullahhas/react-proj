import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import { Route, Routes } from "react-router-dom"; // Use Routes instead of Switch
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        {/* Route for the Home page */}
        <Route path="/" element={<Home />} />

        {/* Route for creating a new post */}
        <Route path="/post" element={<NewPost />} />

        {/* Route for a specific post */}
        <Route path="/post/:id" element={<PostPage />} />

        {/* Route for the About page */}
        <Route path="/about" element={<About />} />

        {/* Fallback for missing routes */}
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
