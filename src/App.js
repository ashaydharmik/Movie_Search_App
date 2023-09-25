import Home from "./components/Home/Home"
import {Routes,Route} from "react-router-dom"
import ListMovie from "./components/ListMovie/ListMovie";
import SingleMovie from "./components/SingleMovie/SingleMovie"
import Error from "./Error";
function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/searchMovie" element={<ListMovie/>}/>
    <Route path="/singleMovie/:id" element={<SingleMovie/>}/>
    <Route path="*" element={<Error/>}/>
    </Routes>
    </>
  );
}

export default App;
