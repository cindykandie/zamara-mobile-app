import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, ScrollView, Pressable } from 'react-native';


const CreateStaffView = () => {
    return (
        <View style = {styles.createForm}>
        <Text style = {styles.loginTitle}>
          Create Staff
         </Text>
         <View>
           <Text>Staff Number</Text>
           <TextInput styles = {styles.username} placeholder='1234'/>

           <Text>Staff Name</Text>
           <TextInput styles = {styles.username} placeholder='John Doe'/>

          <Text>Staff Email</Text>
          <TextInput styles = {styles.username} placeholder='john@example.com'/>
          
         <Text>Department</Text>
         <TextInput styles = {styles.username} placeholder='ICT'/>

           <Text>Salary</Text>
           <TextInput styles = {styles.username} placeholder='60000'/>
           <Button title='Create Staff'/>
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
export default CreateStaffView;
