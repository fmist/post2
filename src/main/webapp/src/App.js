import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import Navbar from "./comp/Navbar";
import PostList from "./comp/PostList";
import InputBar from "./comp/InputBar";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <PostList/>
            <InputBar/>
        </div>
    );
}

export default App;
