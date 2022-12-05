import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import Bar from "./comp/MenuBar";
import PostList from "./comp/PostList";
import InputBar from "./comp/InputBar";

function App() {
    return (
        <div className="App">
            <Bar/>
            <PostList/>
            <InputBar/>
        </div>
    );
}

export default App;
