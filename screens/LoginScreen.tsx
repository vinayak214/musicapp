import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


import React from 'react'

const LoginScreen = () => {
  return (
    <LinearGradient colors={["#040306", "#131624"]} style={{ flex: 1 }}>
      <SafeAreaView>
        <View style={{ alignSelf: 'center', marginVertical: 120 }}>
          <Entypo style={{ textAlign: 'center' }} name="spotify" size={80} color="white" />
          <Text
            style={{
              color: "white",
              fontSize: 40,
              fontWeight: "bold",
              textAlign: "center",
              marginTop: 20,
            }}
          >
            {`Millions of Songs \nFree on spotify!`}
          </Text>
          <View style={{ marginVertical: 40 }}>
            <Pressable style={{
              backgroundColor: '#1DB954',
              padding: 10,
              marginLeft: "auto",
              marginRight: "auto",
              width: 300,
              borderRadius: 25
            }}>
              <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Sign in with Spotify</Text>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: "#131624",
                borderColor: "#C0C0C0",
                padding: 10,
                marginLeft: "auto",
                marginRight: "auto",
                width: 300,
                borderWidth: 2,
                borderRadius: 25,
                flexDirection: 'row',
                alignItems: "center",
                justifyContent: "center",
                marginVertical:10,
                
              }}>
              <MaterialIcons style={{ textAlign: 'center' }} name="phone-android" size={20} color="white" />
              <Text style={{ fontWeight: "500", textAlign: 'center', color: 'white',flex:1}}>Continue with phone number</Text>
            </Pressable>

          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})