import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import EditPost from "./EditPost";
import About from "./About";
import Missing from "./Missing";
import { Route, Routes } from "react-router-dom"; // Use Routes instead of Switch
//import useAxiosFetch from "./hooks/useAxiosFetch";
import { DataProvider } from "./context/DataContext";

function App() {
  // const {data , fetchError, isLoading} = useAxiosFetch("http://localhost:3500/posts") //not used because didnot understand the custom hooks

  return (
    <div className="App">
      <DataProvider>
        <Header title="REACT JS BLOG" />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" component={Home} /> */}
          <Route path="/post" element={<NewPost />} />
          <Route path="/edit/:id" element={<EditPost />}></Route>
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
