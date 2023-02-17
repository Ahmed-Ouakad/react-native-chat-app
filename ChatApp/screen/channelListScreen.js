import {
    Text,
    View,
    Button,
    Modal,
    Alert,
    StyleSheet,
    
  } from 'react-native';
  import { useState } from 'react';
  import {
    ChannelList,
  } from 'stream-chat-react-native'; // Or stream-chat-expo
  import {useAppContext} from "../AppContext"
  import {chatUserId,API_KEY} from '../chatConfig'
  import { GestureHandlerRootView } from 'react-native-gesture-handler';
  import Form from './form';
  
  const filters = {
    members: {
      '$in': [chatUserId]
    },
  };
  
  const sort = {
    last_message_at: -1,
  };
  
  
  const ChannelListScreen = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const { setChannel } = useAppContext();
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Modal
        style = {styles.modal}
  animationType="slide"
  transparent={true}
  visible={modalVisible}
  onRequestClose={() => {
    Alert.alert('Modal has been closed.');
    setModalVisible(!modalVisible);
  }}>
    <Form/>
  </Modal>
      <ChannelList
      onSelect={(channel) => {
        console.log("you have clicked the item of channel list")
        setChannel(channel);
        navigation.navigate('ChannelScreen');
      }}
        filters={filters}
        sort={sort}
      />
      <Button
      onPress={()=>/*setModalVisible(true)*/{}}
      title = "Create a channel"
      />
      </GestureHandlerRootView>
    );
  };
  const styles = StyleSheet.create({
    modal : {
      alignSelf : "center"
    }
  })
  export default ChannelListScreen