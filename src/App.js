import './App.css';
import {Header} from "./container/Header";
import { PageBody } from './container/pageBody';

function App() {
  return (
    <div className="App">
      <div>
        <Header/>
      </div>
      <div>
        <PageBody/>
      </div>
    </div>
  );
}

export default App;
