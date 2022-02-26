import React, { useEffect } from 'react';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useDispatch, useSelector } from 'react-redux';
import { getAccounts, deactiveAccount } from '../../../redux/actions/account';
import { Link } from 'react-router-dom';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export default function AccountManagement() {
    const state = useSelector(state => state.account)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAccounts())
    }, [])

    return (
        <>
            <div className="title-page">
                <ManageAccountsIcon />
                <span>Account management</span>
            </div>
            <div className="card-box">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Avatar</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                state.accounts && state.accounts.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>
                                            <div className="avatar">
                                                <img src={item.avatar}/>
                                            </div>
                                        </td>
                                        <td>{item.name}</td>
                                        <td>{item.phone}</td>
                                        <td>
                                            {   
                                                item.status === 'Active' ? 
                                                <label className="label label-active">{item.status}</label> : 
                                                <label className="label label-disabled">{item.status}</label>
                                            }
                                        </td>
                                        <td>
                                            <Link className="btn btn-edit" to={`/admin/account/${item.id}`}>
                                                <Tooltip title="Edit">
                                                    <EditIcon />
                                                </Tooltip>
                                            </Link>
                                            {
                                                item.status == 'Active' ? 
                                                <button className="btn btn-lock" onClick={() => dispatch(deactiveAccount(item.id))}>
                                                    <Tooltip title="Lock">
                                                        <LockIcon />
                                                    </Tooltip>
                                                </button> : 
                                                <button className="btn btn-unlock" onClick={() => dispatch(deactiveAccount(item.id))}>
                                                    <Tooltip title="Unlock">
                                                        <LockOpenIcon />
                                                    </Tooltip>
                                                </button> 
                                            }
                                        </td>
                                    </tr>
                                ))
                            }
                            {
                                state.accounts.length < 1 && 
                                <tr>
                                    <td colSpan="6">
                                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                            <CircularProgress />
                                        </Box>
                                    </td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
