import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import React from 'react'
import { authorize, refresh, revoke } from 'react-native-app-auth';

const config = {
  clientId: "d719202bb8b148f4a53b1a1363680088",
  redirectUrl: "musicapp://callback",
  scopes: [
    "user-read-email",
    "user-library-read",
    "user-read-recently-played",
    "user-top-read",
    "playlist-read-private",
    "playlist-read-collaborative",
    "playlist-modify-public" // or "playlist-modify-private"
  ],
  serviceConfiguration: {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
  },
}


const LoginScreen = () => {

  const authenticate = async () => {    
    try {
      const result = await authorize(config);
      console.log('Authorization Result:', result);
      // The 'result' object contains the access token and other information.
      // You can store the access token for later use or start making API requests to Spotify.
    } catch (error) {
      console.error('Authorization Error:', error);
    }
  }
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
            <Pressable
              onPress={authenticate}
              style={{
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
                marginVertical: 10,

              }}>
              <MaterialIcons style={{ textAlign: 'center' }} name="phone-android" size={20} color="white" />
              <Text style={{ fontWeight: "bold", textAlign: 'center', color: 'white', flex: 1 }}>Continue with phone number</Text>
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
                marginVertical: 10,

              }}>
              <AntDesign style={{ textAlign: 'center' }} name="google" size={20} color="red" />
              <Text style={{ fontWeight: "bold", textAlign: 'center', color: 'white', flex: 1 }}>Sign in with Google</Text>
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
                marginVertical: 10,

              }}>
              <Entypo style={{ textAlign: 'center' }} name="facebook" size={20} color="blue" />
              <Text style={{ fontWeight: "bold", textAlign: 'center', color: 'white', flex: 1 }}>Sign in with Facebook</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})