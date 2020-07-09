import React from 'react';

import {Grid} from './styles';

import ServerList from '../serverList';
import ServerName from '../ServerName';
import ChannelInfo from '../ChanneInfo';
import ChannelList from '../ChannelList';
import UserInfo from '../UserInfo';
import UserList from '../UserList';
import ChannelData from '../ChannelData';

const Layout: React.FC = () => {

    return (
     <Grid>

        <ServerList/>
        <ServerName/>
        <ChannelInfo/>
        <ChannelList/>
        <UserInfo/>
        <UserList/>
        <ChannelData/>

        
    </Grid> 
    )
    
}; 

export default Layout;