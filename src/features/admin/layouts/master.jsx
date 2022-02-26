import React from 'react';
import store from '../../../redux/store';
import { Provider } from 'react-redux';
import '../../../assets/css/admin.css';
import SidebarAdmin from './sidebar';

function AdminLayout({ children }) {
    return (
        <Provider store={store}>
            <React.Fragment>
                <SidebarAdmin />
                <div className="main-content">
                    <main>
                        {children}
                    </main>
                </div>
            </React.Fragment>
        </Provider>
    );
}

export default AdminLayout;