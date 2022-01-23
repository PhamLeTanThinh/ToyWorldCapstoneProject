import { Route, Switch } from 'react-router-dom';
import './App.css';
import Admin from './features/admin/index';
import NotFound from './components/NotFound/index';
import Authentication from './features/authentication';
// import {useState} from "react"
// import { auth } from './Firebase/firebase';
import Home from './features/home/index';
import Toys from './features/toys/index';
import Exchange from './features/exchange/index';
import Group from './features/group/index';
import DetailPage from './features/toys/ListPage.jsx/DetailPage';
import PostDetailPage from './features/group/PostDetailPage';


function App() {

  return (
    <div className="App">
      <Switch>
        <Route path="/admin" component={Admin} />

        <Route path="/" component={Authentication} exact/>
        <Route path="/home" component={Home} exact/>

        <Route path="/toys" component={Toys}/>
        {/* <Route path="/toys/:toysId" component={DetailPage} exact/> */}
        <Route path="/exchange" component={Exchange} exact/>
        
        <Route path="/group/:id" component={Group} />
        <Route path="/post/:postId" component={PostDetailPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
