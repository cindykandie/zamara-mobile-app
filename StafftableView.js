import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, ScrollView, Pressable } from 'react-native';


const StafftableView = () => {
    return (
    <View style = {styles.table}>
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
              <Text>50000</Text>
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
              <Text>60000</Text>
          </View>
      </View>
     
  )
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
      flex: 1,
      marginTop: 70
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
      borderWidth: 1,
      marginTop: 70,
    },
    tableHead: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      fontSize: 20, 
      backgroundColor: "#3bcd6b",
    },
    tableBody: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      fontSize: 20, 
      borderWidth: 1
    },
    createForm: {
      margin: 20,
      marginTop: 70
    }
  })
export default StafftableView;
