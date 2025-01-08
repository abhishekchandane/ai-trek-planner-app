

import { useNavigation, useRouter } from 'expo-router';
import React, { Component, useEffect } from 'react'
import { Text, View } from 'react-native'

export default function SignUp() {
  
  const navigation = useNavigation();
  const router = useRouter();
  useEffect(()=>{ 
    navigation.setOptions({
      // headerShown : false
    })

  } ,[])

    return (
      <View style={{ marginTop:50 , padding:30 }}>
        <Text style={{  }}> Create New Account  </Text>
      </View>
    )
   
}
