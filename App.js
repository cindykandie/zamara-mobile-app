import { StyleSheet, Text, View, Image, TextInput, Button, ScrollView } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [value, setValue] = useState('')
  const [dataPoints, setDataPoints] = useState([])

  function handleOnChangeText(textEntered){
    setValue(textEntered)
  }
  function handlePressBtn(){
    console.log(value)
    setDataPoints(currentData => [...currentData, value])
  }
  console.log(dataPoints)
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
      <ScrollView>
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
            <View style = {styles.rowBtns}>
              <Button style= {styles.yesBtn} title='Yes' color={'red'}/>
              <Text></Text>
              <Button style= {styles.yesBtn} title='No' color={'green'}/>
            </View>
          
        </View>
      </View>
      <View style = {styles.staffSection}>
      
      <View style = {styles.table}>
      {
          dataPoints.map((item, index) =>
          <Text key={`item${index}`}>{item}</Text>)
      }

          <View style= {styles.tableHead}>
              <Text>Staff No.</Text>
              <Text>Staff Name</Text>
              <Text>Staff Email</Text>
              <Text>Department</Text>
              <Text>Salary</Text>
          </View>
          <View style= {styles.tableBody}>
              <Text>ZAAC001</Text>
              <Text>John Doe</Text>
              <Text>jd@zamara.co.k</Text>
              <Text>ICT</Text>
              <Text>50,000</Text>
          </View>
          <View style= {styles.tableBody}>
              <Text>ZARIB001</Text>
              <Text>Mary Jane</Text>
              <Text>Smj@zamara.co.ke</Text>
              <Text>ICT</Text>
              <Text>40000</Text>
          </View>
          <View style= {styles.tableBody}>
              <Text>ZAAC002</Text>
              <Text>Chris Maina</Text>
              <Text>cc@zamara.co.ke</Text>
              <Text>HR</Text>
              <Text>60,000</Text>
          </View>
      </View>
        
        <Text style = {styles.loginTitle}>
          Create Staff
        </Text>
        <View>
          <Text>Staff Number</Text>
          <TextInput onChangeText = {handleOnChangeText} styles = {styles.username} placeholder='1234'/>

          <Text>Staff Name</Text>
          <TextInput onChangeText = {handleOnChangeText} styles = {styles.username} placeholder='John Doe'/>

          <Text>Staff Email</Text>
          <TextInput onChangeText = {handleOnChangeText} styles = {styles.username} placeholder='john@example.com'/>
          
          <Text>Department</Text>
          <TextInput onChangeText = {handleOnChangeText} styles = {styles.username} placeholder='Finance'/>

          <Text>Salary</Text>
          <TextInput onChangeText = {handleOnChangeText} styles = {styles.username} placeholder='60000'/>
          <Button onPress = {handlePressBtn} title='Create Staff'/>
        </View>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    backgroundColor: 'white',
    paddingVertical: 30,
    paddingHorizontal: 15,
    flex : 1
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
    marginTop: 20,
  }, 
  loginTitle: {
    textAlign: 'center',
    fontSize: 30,
  }, 
  yesBtn: {
    marginBottom: 20,
    width: '400px',
    backgroundColor: 'red',
  },
  logoutMsg: {
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 30,
    fontSize: 17,
  },
  rowBtns: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flex: 0
  }, 
  table:{
    borderWidth: 1
  },
  tableHead: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    fontSize: 20, 
    backgroundColor: "#3bcd6b"
  },
  tableBody: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    fontSize: 20, 
    borderWidth: 1

  }
})
