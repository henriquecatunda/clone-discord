import React from 'react';

import {Container, Role, User, Avatar} from './styles'

interface UserProps {

    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({nickname, isBot}) => {

   return (

    <User>

        <Avatar className= {isBot ? 'bot' : ''} />

             <strong> {nickname}</strong>
             {isBot && <span>bot</span>}
    </User>


   );



}

const UserList: React.FC = () => {

    return (
    <Container>

       <Role> Disponivel - 1 </Role>
       <UserRow  nickname='Henrique Catunda' />

       <Role>Offline - 18 </Role>
       <UserRow  nickname='Diego Fernand' isBot/>
       <UserRow  nickname='Guilherme Rodz'/>
       


    </Container>
    )
    
}; 

export default UserList;