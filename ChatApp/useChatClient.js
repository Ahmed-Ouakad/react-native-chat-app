import { useEffect, useState } from 'react';
import {StreamChat} from 'stream-chat'
import { API_KEY, chatUserId, chatUserName} from './chatConfig';

const user = {
    id: chatUserId,
    name: chatUserName,
  };
const chatClient = StreamChat.getInstance(API_KEY);

const useChatClient = () => {
    const [clientIsReady, setClientIsReady] = useState(false);
  
    useEffect(() => {
        const setupClient = async () => {
          try {
           await chatClient.connectUser(user, chatClient.devToken(chatUserId));
            setClientIsReady(true);
    
            
          } catch (error) {
            if (error instanceof Error) {
              console.error(`An error occurred while connecting the user: ${error.message}`);
            }
          }
        };
    
        
        if (!chatClient.userID) {
          setupClient();
        }
      }, []);

    return {
      clientIsReady,
    };
  };
  export default useChatClient