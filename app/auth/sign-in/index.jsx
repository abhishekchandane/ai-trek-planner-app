


import { useNavigation, useRouter } from 'expo-router'
import React, { Component, useEffect } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Colors } from './../../../constants/Colors' 
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SignIn() {
    const navigation = useNavigation();
    const router = useRouter();
    useEffect(()=>{ 
      navigation.setOptions({
        headerShown : false
      })

    } ,[])

    return (
      <View style={{
        padding:24,  
        backgroundColor:'tomato', 
        height:'100%', paddingTop:80}}   > 

        <TouchableOpacity onPress={ ()=>router.back() }>
           <Ionicons style={{ marginBottom:30 }} name="arrow-back" size={24} color="black" />
        </TouchableOpacity>

        <Text 
          style={{ fontFamily:'outfit-bold', fontSize:30, color:Colors.WHITE }}> 
            Sign In
        </Text>

        <Text 
          style={{ fontFamily:'outfit ', fontSize:30, color:Colors.WHITE, marginTop:20 }}> 
            Welcome Back
        </Text>

        <Text 
          style={{ fontFamily:'outfit ', fontSize:30, color:Colors.WHITE, marginTop:10 }}> 
            You've Been Missed
        </Text>

        {/* EMAIL */}
        <View style={{marginTop:30}}>
          <Text style={{ fontFamily:'outfit', color:'#fff' }}>Email</Text>

          <TextInput placeholder='Enter EMail' style={styles.input} placeholderTextColor="#fff"/>

        </View>

        {/* PASSWORD */}
        <View style={{marginTop:20}}>
          <Text style={{ fontFamily:'outfit', color:'#fff' }}>Passord</Text>

          <TextInput secureTextEntry={true}  style={styles.input} placeholderTextColor="#fff"
           placeholder='Enetr Password' /> 

        </View>


        {/* Sign In Button */}
        <View style={{marginTop:50 , padding:20, backgroundColor:Colors.WHITE,
        borderRadius:15 }}> 

          <Text style={{textAlign:'center', color:'tomato'}}>Sign In</Text>
        </View>

        {/* Create Account  Button */}
        <TouchableOpacity
          onPress={ ()=>router.replace('auth/sign-up') }
        style={{ borderRadius:15, borderWidth:2, borderColor:'#fff' , marginTop:20 , padding:20,
        borderRadius:15 }}> 

          <Text style={{textAlign:'center', color:Colors.WHITE, }}>Create Account</Text>
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
