import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style = {styles.container}>
      
      <View style = {styles.nav}>
      <Image style = {styles.navImage}
        source={require('./assets/hamburger.png')}
      />
        <View>
          <Text>Home</Text>
          <Text>Staff</Text>
          <Text>Continents</Text>
          <Text>Sign Out</Text>
        </View>
          <Image style = {styles.logoImage}
          source={require('./assets/zam.png')}
          />      
      </View>
      <View style = {styles.welcome}>
        <Text style = {styles.welcomeMsg}>Welcome Stephen Amimo,
        </Text>
      </View>

      <View style = {styles.profileDetails}>
        <Text style = {styles.profileTitle}>
          Your Profile Details
        </Text>
        <View>
          <Text>Age: 50</Text>
          <Text>Gender: Male</Text>
          <Text>Email: atuny0@sohu.com</Text>
          <Text>Phone: +63 791 675 8914</Text>
          <Text>Birth Date: 2000-12-25</Text>
          <Text>Blood Group: A-</Text>
          <Text>Height: 189</Text>
          <Text>Weight: 75.4</Text>
          <Text>Eye Color: Green</Text>
        </View>
      </View>

      <View style = {styles.login}>
        <Text style = {styles.loginTitle}>
          Sign In
        </Text>
        <View>
          <TextInput styles = {styles.username} placeholder='Username'/>
          <TextInput styles = {styles.password} placeholder='Password'/>
          <Button title='Log In'/>
        </View>
      </View>
      <View style = {styles.login}>
        <Text style = {styles.loginTitle}>
          Log Out
        </Text>
        <View>
          <Text style = {styles.logoutMsg}>
            Are you sure you want to log out?</Text>
          <Button style= {styles.yesBtn} title='Yes'/>
          <Text></Text>
          <Button title='No'/>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    backgroundColor: 'white',
    padding: 30,
    flex: 1,
  }, 
 
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 40,
    textAlign: 'center',
  },
  navImage: {
    width: 40,
    height: 40,
  },
  logo:{
    fontSize: 40
  },
  logoImage: {
    backgroundColor: '#000',
    marginTop: 0,
    marginHorizontal: 10,
    width: 130,
    height: 40,
    padding: 10
  },
  welcome:{
    backgoundColor: 'red',
    marginBottom: 20
  },
  welcomeMsg:{
    fontSize: 20,
    marginTop: 30, 
  },
  greeting : {
    textAlign: 'center'
  },
  profileDetails: {
    display: 'flex'
  },
  profileTitle:{
    fontSize: 30,
  },
  login: {
    border: '1px solid #000',
  }, 
  loginTitle: {
    textAlign: 'center',
    border: '1px solid #000',
    fontSize: 30,
  }, 
  yesBtn: {
    marginBottom: 90,
  },
  logoutMsg: {
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 30,
    fontSize: 17,
  }
})
