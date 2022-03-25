import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import accountApi from './../../../api/accountApi';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../../Firebase/firebase';
import getOtherEmail from '../../../utils/getOtherEmail';
import { useHistory } from 'react-router';

// ==================TAB SIDEBAR================
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
// ================== END TAB SIDEBAR================


function Sidebar({ users }) {

  // Current User
  const currentUser = useSelector(state => state.account.current);
  const currentUserName = currentUser.name
  const currentUserId = currentUser.accountId

  // const [users, setUsers] = useState([]);
  const history = useHistory();
  // Tab
  const [value, setValue] = useState(0);


  // Change Tab
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Onclick redirect
  const handleOpenChat = (id) => {
    let messageId = "";
    if (currentUserId.toString() <= id.toString()) {
      messageId = `${currentUserId}-${id}`;
    } else {
      messageId = `${id}-${currentUserId}`;
    }
    history.push(`/message/${messageId}`)
    // <Redirect to="/setting/account/edit" />
  }

  // FETCH USER LIST
  // useEffect(() => {
  //   const fetchUser = async () => {
  //     try {
  //       const response = await accountApi.getAll();
  //       console.log("response: ", response);
  //       setUsers(response.data);
  //     } catch (error) {
  //       console.log('Failed to fetch userList', error)
  //     }
  //   }
  //   fetchUser();
  // }, [])

  // snpashot firestore
  // const [snapshot, loading, error] = useCollection(collection(db, "users"));
  // const users = snapshot?.docs.map(doc => ({ id: doc.id, ...doc.data() }))

  return (
    <div>
      <Box>
        <Typography>{currentUser.email}</Typography>
      </Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Conversation" {...a11yProps(0)} />
          <Tab label="Contacts" {...a11yProps(1)} />
        </Tabs>
      </Box>

      {/* Tab conservation */}
      <TabPanel value={value} index={0}>
        {
          users?.map(user => user.id !== currentUserId ? (
            <Box  key={Math.random()}
              sx={{
                display: 'fex',
                backgroundColor: 'grey',
                width: '100%',
                height: '50px',
                '&:hover': {
                  cursor: 'pointer',
                  opacity: [0.9, 0.8, 0.7],
                  transition: 'all 0.5s'
                },
              }}
              onClick={() => handleOpenChat(user.id)}
            >
              <Avatar alt="name" src={user.avatar} />
              <Typography>{user.name}</Typography>
            </Box>) :
            <></>)
        }


      </TabPanel>
      <TabPanel value={value} index={1}>
        {
          users?.map(user => user.id !== currentUserId ? (
            <Box key={Math.random()}
              sx={{
                display: 'fex',
                backgroundColor: 'grey',
                width: '100%',
                height: '50px',
                '&:hover': {
                  cursor: 'pointer',
                  opacity: [0.9, 0.8, 0.7],
                  transition: 'all 0.5s'
                },
              }}
              onClick={() => handleOpenChat(user.id)}
            >
              <Avatar alt="name" src={user.avatar} />
              <Typography>{user.name}</Typography>
            </Box>) : <></>)}


      </TabPanel>
    </div>
  );
}

export default Sidebar;