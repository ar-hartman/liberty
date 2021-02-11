import './App.css';
import {BlogPost} from "./container/blogPost";
import {PostTile} from "./container/postTile";
import {PostTileGrid} from "./container/postTileGrid";

function App() {
  return (
    <div className="App">

      <div>
        <BlogPost/>
      </div>
      <div></div>
      <div/>
        <PostTileGrid/>
    </div>
  );
}

export default App;
