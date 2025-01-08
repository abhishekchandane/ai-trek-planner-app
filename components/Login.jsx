import { View, Text, Image,StyleSheet, TouchableOpacity  } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'

export default function login() {

  const router = useRouter()

  return (
    <View>
      
      <Image source={ require('./../assets/images/log.jpg') } 
        style={{
            width : '100%' ,
            height : 500
        }}
      />

        <View style={styles.container}>
        <Text style={{  
          fontSize:35, fontFamily:'outfit-bold',
           color:'#fff', textAlign:'center'
          }}>
            Let's Trek   
        </Text>
        <Text style={{  
          fontSize:18, fontFamily:'outfit',
           color:'#fff', textAlign:'center',
           marginTop : 20,
          }}>
            Design By Abhishek Chandane   
        </Text>


          <TouchableOpacity onPress={ ()=> router.push('auth/sign-in')} 
          style={styles.button}>
            <Text style={{
              textAlign:'center',
              fontFamily:'outfit',
              fontSize : 17
              
            }}>
              Find Your Destination
            </Text>
          </TouchableOpacity>


        </View>

    </View>
  )
}


const styles = StyleSheet.create({
  container :{
    backgroundColor :'tomato',
    marginTop : 20,
    height:'100%',
    borderTopLeftRadius : 30,
    borderTopRightRadius: 30,
    padding:20
  },
  button:{
    marginTop:30,
    padding:15,
    backgroundColor: Colors.WHITE,
    borderRadius:99 ,

  }
})
