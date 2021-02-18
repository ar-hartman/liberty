import './App.css';
import {BlogPost} from "./container/blogPost";
import {PostTileGrid} from "./container/postTileGrid";
import {Header} from "./container/Header";

function App() {
  return (
    <div className="App">
      {/*
      <div>
        <BlogPost/>
      </div>
      */}
      <div>
        <Header/>
      </div>
      <div></div>
      <div>
        <PostTileGrid headline="test headline" hook="this is a hook to engage users"/>
      </div>
      <div>
        <PostTileGrid headline="test headline" hook="this is a hook to engage users"/>
      </div>
    </div>
  );
}

export default App;
