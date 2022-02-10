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
import UserProfile from './features/profile/index';
import { useSelector } from 'react-redux';
import PrivateRoute from './components/privateRoute';
import SettingAccount from './features/settingAccount/SettingAccount';


function App() {

  


  return (
    <div className="App">
      <Switch>

        <Route path="/" component={Authentication} exact/>

        <PrivateRoute path="/admin" component={Admin} exact roles={[0,1]} />

        <PrivateRoute path="/home" component={Home} exact roles={[2]} />

        <Route path="/toys" component={Toys}/>
        <Route path="/exchange" component={Exchange} exact/>
        
        <PrivateRoute path="/group/:id" component={Group} exact roles={[1,2]} />

        <PrivateRoute path="/post/:postId" component={PostDetailPage} exact roles={[1,2]} />

        <PrivateRoute path="/setting/account/:accountId" component={SettingAccount} exact roles={[2]} />
        {/* <PrivateRoute path="/setting/account/:accountId/edit" component={SettingAccount} exact roles={[2]} /> */}

        <PrivateRoute path="/account/:accountId" component={UserProfile} exact roles={[1,2]} />
        
        
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
