import { GestureHandlerRootView } from 'react-native-gesture-handler';
import{useAppContext}from '../AppContext'
import {
    
    Channel,
    MessageList,
    MessageInput,
  } from 'stream-chat-react-native'; 
import {
    Text,
    View,
  } from 'react-native';
  const ChannelScreen = props => {
    const { channel } = useAppContext();
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
        <Channel channel={channel}>
          <MessageList />
          <MessageInput />
        </Channel>
        </GestureHandlerRootView>
      );
  }
  export default ChannelScreen