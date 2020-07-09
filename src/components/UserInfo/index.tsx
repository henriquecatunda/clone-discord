import React from 'react';

import {Container, Profite, Avatar, UserData, Icons, MicIcon, HeadphoneIcon, SettingsIcon  } from './styles'


const UserInfo: React.FC = () => {

    return (
    <Container>

        <Profite>
             <Avatar/>
            <UserData>

                <strong>Henrique Catunda</strong>
                <span>#0001</span>
            </UserData>
        </Profite>

        <Icons>
            <MicIcon/>
            <HeadphoneIcon/>
            <SettingsIcon/>
        </Icons>

    </Container>
    )
    
}; 

export default UserInfo;