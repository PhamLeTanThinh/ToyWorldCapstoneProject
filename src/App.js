import { Route, Switch } from 'react-router-dom';
import './App.css';
import './assets/css/style.css';
import Admin from './features/admin/dashboard';
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

import AdminLayout from './features/admin/layouts/master';
import Dashboard from './features/admin/dashboard';
import PostManagement from './features/admin/post';
import GroupManagement from './features/admin/group';
import AccountManagement from './features/admin/account/index';
import EditAccount from './features/admin/account/edit';

function App() {
    return (
        <div className="App">
            <Switch>
                {/* =========== admin router =========== */}
                <Route path='/admin/:path?'>
                    <AdminLayout>
                        <Switch>
                            <Route path='/admin' exact component={Dashboard} />
                            <Route path='/admin/post' exact component={PostManagement} />
                            <Route path='/admin/account' exact component={AccountManagement} />
                            <Route path='/admin/account/:id' exact component={EditAccount} />
                            <Route path='/admin/group' exact component={GroupManagement} />
                            <Route path='/admin/group/:id' exact component={GroupManagement} />
                        </Switch>
                    </AdminLayout>
                </Route>

                {/* =========== client router =========== */}
                <Route path="/" component={Authentication} exact />
                <Route path="/home" component={Home} exact />

                <Route path="/toys" component={Toys} />
                {/*
                <Route path="/toys/:toysId" component={DetailPage} exact /> */}
                <Route path="/exchange" component={Exchange} exact />

                <Route path="/group/:id" component={Group} />
                <Route path="/post/:postId" component={PostDetailPage} />
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}

export default App;