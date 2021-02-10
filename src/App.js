import './App.css';
import {BlogPost} from "./container/blogPost";
import {PostTile} from "./container/postTile";

function App() {
  return (
    <div className="App">

      <div>
        <BlogPost/>
      </div>
      <div></div>
      <div>
        <PostTile/>
      </div>
    </div>
  );
}

export default App;
