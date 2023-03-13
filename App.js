import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style = {styles.container}>
      <View style = {styles.nav}>
        <Text>Nav</Text>
        <Text style = {styles.logo}>Zamara</Text>
      </View>
      <View style = {styles.welcome}>
        <Text style = {styles.greeting}>Welcome Stephen
        </Text>
      </View>

      <View style = {styles.profileDetails}>
        <Text style = {styles.greeting}>
          Your Profile Details
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    backgroundColor: 'white',
    padding: 30,
  }, 
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 40,
    textAlign: 'center',
  },
  logo:{
    fontSize: 40
  },
  welcome:{
    backgoundColor: 'red'
  },
  greeting : {
    textAlign: 'center'
  },
  profileDetails: {
    display: 'flex'
  }
})
