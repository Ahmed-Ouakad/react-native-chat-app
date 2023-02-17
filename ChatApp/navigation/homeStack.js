import {Text,View} from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChannelScreen from '../screen/channelScreen';
import ChannelListScreen from '../screen/channelListScreen';
import useChatClient from "../useChatClient";
import HomeScreen from '../screen/homeScreen';
import { StreamChat } from 'stream-chat';
import{API_KEY} from "../chatConfig"


import {
    OverlayProvider,
    Chat
  } from 'stream-chat-react-native';

const Stack = createNativeStackNavigator()
const chatClient = StreamChat.getInstance(API_KEY);
const HomeStack = () => {
    const { clientIsReady } = useChatClient();
    if (!clientIsReady) {
        return (
        <HomeScreen/>
        )
      }
    
    return (
        
        <OverlayProvider>
            <Chat client={chatClient}>
                <Stack.Navigator>
                    <Stack.Screen name="ChannelListScreen" component={ChannelListScreen} />
                    <Stack.Screen name="ChannelScreen" component={ChannelScreen}/>
                </Stack.Navigator>
            </Chat>
        </OverlayProvider>
        
    )
}
 export default HomeStack