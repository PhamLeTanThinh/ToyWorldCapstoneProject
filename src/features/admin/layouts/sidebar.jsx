import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import GroupIcon from '@mui/icons-material/Group';
import { Link } from 'react-router-dom';

export default function SidebarAdmin() {
    return (
        <>
            <input type="checkbox" id="sidebar-toggle"></input>
            <div className="sidebar">
                <div className="sidebar-header">
                    <h3 className="brand">
                        <span className="ti-unlink" />
                        <span>ToysWorld</span>
                    </h3>
                    <label htmlFor="sidebar-toggle" className="ti-menu-alt" />
                </div>
                <div className="sidebar-menu">
                    <ul>
                        <li>
                            <Link to="/admin">
                                <HomeIcon />
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/post">
                                <DescriptionIcon />
                                <span>Post</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/account">
                                <ManageAccountsIcon />
                                <span>Account</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/group">
                                <GroupIcon />
                                <span>Group</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}