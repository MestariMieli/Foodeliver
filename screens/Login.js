import { View, Text, ScrollView, Image, TouchableOpacity, Button, TextInput } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';
import { FullWindowOverlay } from 'react-native-screens';

const Login = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View>
      <View>
        <Image
          className='relative w-full h-52 bg-gray-300 p-4'
          source={require('../images/logo.png')}
        />
          <TouchableOpacity 
          onPress={navigation.goBack}
          className='absolute top-40 left-5 p-2 bg-gray-100 rounded-full'>
          <ArrowLeftIcon size={20} color="#69BE6F"/>
          </TouchableOpacity>
          
      </View>
      <View className='items-center pt-3'>
        <View className='p-4'>
        <TextInput className="w-60 bg-gray-200 p-3"
         placeholder='Username'
                  keyboardType='default'/>
        </View>
        <View className='p-4'>
          <TextInput className="w-60 bg-gray-200 p-3"
          placeholder='Password'
          secureTextEntry={true}
          keyboardType='default'/>
        </View>
        <Button
          onPress={navigation.goBack}
          title="Login"
          color="#69BE6F"  
        />
        <TouchableOpacity className='p-4'>
          <Text className='text-green-600'>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity className='p-4'>
          <Text className='text-green-600'>New user?
          <Text className='text-green-400'> Register here</Text>
          </Text>
        </TouchableOpacity>
      </View>

    </View>
      
      

    
  )
}

export default Login;