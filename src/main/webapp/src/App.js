import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import PostList from "./comp/PostList";
import InputBar from "./comp/InputBar";
import MenuBar from "./comp/MenuBar";
import {Route, Routes} from "react-router-dom"
import {About} from "./pages/About";

function App() {
    return (
        <div className="App">
            <MenuBar/>
            <Routes>
                <Route path="/about" element={<About/>}>
                </Route>
                <Route path="/" element={<PostList/>}>
                </Route>
                <Route path="/add" element={<InputBar/>}>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
