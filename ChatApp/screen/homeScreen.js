import {
    StyleSheet,
    View,
    Image,
  } from 'react-native';
  const HomeScreen = () => {
    return (
        <View style = {styles.container}>
          <Image
          style = {styles.logo}
          source={require('../assets/logo.png')}
          />
        </View>
      );
  }
  const styles = StyleSheet.create({
    container: {
      flex:1,
      padding: 50,
      justifyContent : "center",
      
    },
    logo: {
      
      alignSelf : "center",
      width: 251,
      height: 58,
    },
  });
  export default HomeScreen
