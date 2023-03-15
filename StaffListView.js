import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, ScrollView, Pressable } from 'react-native';


const StafflistView = () => {
    return (
    <View style = {styles.table}>
        <Text style = {styles.loginTitle}>
          Staff List
        </Text>
          <View style= {styles.tableHead}>
              <Text>Staff Name</Text>
              
          </View>
          <View style= {styles.tableBody}>
              <Text>John Doe</Text>
          </View>
          <View style= {styles.tableBody}>
              <Text>Mary Jane</Text>
              
          </View>
          <View style= {styles.tableBody}>
              <Text>Chris Maina</Text>    
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
export default StafflistView;
