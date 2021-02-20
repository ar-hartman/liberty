import './App.css';
import {BlogPost} from "./container/blogPost";
import {PostTileGrid} from "./container/postTileGrid";
import {Header} from "./container/Header";
import {AuthorImage} from "./components/blog_post/authorImage";

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
      <div>
        <BlogPost/>
      </div>
      <div>
       {/* <PostTileGrid headline="test headline" hook="this is a hook to engage users"/> */}
      </div>
      <div>
       {/* <PostTileGrid headline="test headline" hook="this is a hook to engage users"/> */}
      </div>
    </div>
  );
}

export default App;
