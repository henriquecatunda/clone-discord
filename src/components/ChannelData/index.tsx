import React, {useRef, useEffect} from 'react';

import {Container, Mensagens, InputWrapper, Input, InputIcon } from './styles'

import ChannelMessage from '../ChannelMessage'; 
import { Mention } from '../ChannelMessage/styles';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {

        const div = messagesRef.current;

        if(div){

            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return (
    <Container>

        <Mensagens ref={messagesRef}>

            <ChannelMessage  author= "Henrique Catunda"
                date="08/07/2020"
                content="Esta é uma mensagem">
            </ChannelMessage>

            <ChannelMessage  author= "Henrique Catunda"
                date="08/07/2020"
                content="Esta é uma mensagem">
            </ChannelMessage>

            <ChannelMessage  author= "Henrique Catunda"
                date="08/07/2020"
                content="Esta é uma mensagem">
            </ChannelMessage>

            <ChannelMessage  author= "Henrique Catunda"
                date="08/07/2020"
                content="Esta é uma mensagem">
            </ChannelMessage>

            <ChannelMessage  author= "Henrique Catunda"
                date="08/07/2020"
                content="Esta é uma mensagem">
            </ChannelMessage>

            <ChannelMessage  author= "Henrique Catunda"
                date="08/07/2020"
                content="Esta é uma mensagem">
            </ChannelMessage>

            <ChannelMessage  author= "Henrique Catunda"
                date="08/07/2020"
                content="Esta é uma mensagem">
            </ChannelMessage>

            

            <ChannelMessage 
            author= "Diogo Fernandes"
                date="08/07/2020"
                content={

                <>
                <Mention>@Henrique Catunda</Mention>, Esta é uma mensagem 
                </>
                }
                hasMention
                isBot>
            </ChannelMessage>

            
        </Mensagens>

        <InputWrapper>
            <Input   placeholder=" Conversarem #Chat-livre"/>
            <InputIcon/>
        
        </InputWrapper>
    

    </Container>
    )
    
}; 

export default ChannelData;