

import { useNavigation, useRouter } from 'expo-router';
import React, { Component, useEffect } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Colors } from '../../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SignUp() {
  
  const navigation = useNavigation();
  const router = useRouter();
  useEffect(()=>{ 
    navigation.setOptions({
      headerShown : false
    })

  } ,[])

    return (
      <View style={{backgroundColor:'tomato', height:'100%' , padding:30 }}>

        <TouchableOpacity onPress={ ()=>router.back() }>
           <Ionicons style={{ marginBottom:30 }} name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        <Text style={{ fontFamily:'outfit-bold', fontSize:35 }}> Create New Account  </Text>



        {/* USER FULL NAME */}
        <View style={{marginTop:30}}>
          <Text style={{ fontFamily:'outfit', color:'#fff' }}>User Full Name</Text>

          <TextInput placeholder='Enter User Full Name' style={styles.input} placeholderTextColor="#fff"/>

        </View>


        {/* EMAIL */}
        <View style={{marginTop:20}}>
          <Text style={{ fontFamily:'outfit', color:'#fff' }}>Email</Text>

          <TextInput placeholder='Enter EMail' style={styles.input} placeholderTextColor="#fff"/>

        </View>

        {/* PASSWORD */}
        <View style={{marginTop:20}}>
          <Text style={{ fontFamily:'outfit', color:'#fff' }}>Passord</Text>

          <TextInput secureTextEntry={true}  style={styles.input} placeholderTextColor="#fff"
           placeholder='Enetr Password' /> 

        </View>


        {/* Create Account Button */}
        <View style={{marginTop:50 , padding:20, backgroundColor:Colors.WHITE,
        borderRadius:15 }}> 

          <Text style={{textAlign:'center', color:'tomato'}}>Create Account </Text>
        </View>

        {/*   */}
        <TouchableOpacity
          onPress={ ()=>router.replace('auth/sign-in') }
        style={{ borderRadius:15, borderWidth:2, borderColor:'#fff' , marginTop:20 , padding:20,
        borderRadius:15 }}> 

          <Text style={{textAlign:'center', color:Colors.WHITE, }}>Log In  </Text>
        </TouchableOpacity>


      </View>

      
    )
   
}



const styles = StyleSheet.create({
  input:{
    padding:15,
    borderWidth:2,
    borderColor:Colors.WHITE,
    borderRadius:15,
    fontFamily:'outfit'
  }
})