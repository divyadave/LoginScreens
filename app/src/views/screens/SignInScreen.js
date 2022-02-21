import React from 'react'
import {SafeAreaView, ScrollView, Text, View, TextInput, Touchable} from 'react-native'
import {Icon, Image}  from 'react-native-elements' 
import styles from '../../styles'
/* import COLORS from '../../consts/color' */
import COLORS from '../../consts/color'
import { TouchableOpacity } from 'react-native-gesture-handler'


function SignInScreen({navigation}) {
  return (
    <SafeAreaView style={{ paddingHorizontal: 20, backgroundColor: COLORS.white}}>
      <ScrollView showsVerticalScrollIndicator={false}>
    <View style={{ flexDirection: 'row', marginTop: 40}}>
      <Text style={{ fontWeight: 'bold', fontSize: 22, color: COLORS.dark}}>Fox</Text>
      <Text style={{ fontWeight: 'bold', fontSize: 22, color: COLORS.secondary}}>Hub</Text>
    </View>
    <View style={{ marginTop: 70}}>
      <Text style={{fontSize: 27, fontWeight: 'bold', color: COLORS.dark}}>Welcome Back,</Text>
      <Text style={{fontSize: 19, fontWeight: 'bold', color: COLORS.light}}>Sign In to continue </Text>
    </View>
    <View style={{ marginTop: 20 }}>
      <View style={styles.inputContainer}>
        <Icon name='chevron-left' type="font-awesome"
 size={20} color={COLORS.dark} style={styles.inputIcon} backgroundColor={COLORS.pink}></Icon> 
        <TextInput placeholder="Enter Email" style={styles.input}></TextInput>

      </View>
    
    </View>
    <View style={{ marginTop: 20 }}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Password" secureTextEntry style={styles.input}></TextInput>
      </View>
    </View>
      <View style={styles.btnPrimary}><Text style={{color: COLORS.white, fontWeight: 'bold', fontSize: 18} }>Sign In</Text></View>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 20}}>
      <View style={styles.line}>
      </View><Text style={{ fontWeight: 'bold', marginHorizontal: 5}}>OR</Text>
      <View style={styles.line}></View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={styles.btnSecondary}>
          <Text style={{fontWeight: 'bold'}}>Sign in with Facebook</Text>
          <Image source={require('../../assets/facebook.png')}></Image>
        </View>
        <View style={{width: 10}}></View>
        <View style={styles.btnSecondary}>
          <Text style={{fontWeight: 'bold'}}>Sign in with Google</Text>
          <Image source={require('../../assets/2991148.png')}></Image>
        </View>

      </View>
      <View style={{ flexDirection:"row", justifyContent: 'center', alignItems: 'flex-end', marginVertical: 20 }}>
        <Text>Don't have account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text style={{ color: COLORS.pink, fontWeight: 'bold' }}>Sign Up</Text>
        </TouchableOpacity>
      </View>
   
    </ScrollView>
    </SafeAreaView>
  )
}

export default SignInScreen