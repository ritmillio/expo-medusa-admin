import { Image, SafeAreaView, View, Text, Platform, Pressable } from 'react-native'
import React, { useLayoutEffect, useState }  from 'react'
import axios from 'axios'

//Components
import LoginInput from '../components/LoginInput';


export default function LoginScreen() {

    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const platform: any = Platform.select({
        ios: () => 'iOS device',
        android: () => 'Android device',
    });

    const logInPressed = () => {
    // axios.post('http://localhost:8000/auth/login' , {
    //     email: userName,
    //     password: password,
    // }).then((resp) => {
    //     setUserToken(resp.data.accees_token)
    // })
        console.log('pressed')
    }

    return (
        <SafeAreaView className='flex-1 h-full w-full bg-white'>
            <View className='flex items-center justify-center pt-5'>
                <Image
                    resizeMode='contain'
                    className='h-32 w-32'
                    source={{ uri: 'https://user-images.githubusercontent.com/7554214/153162406-bf8fd16f-aa98-4604-b87b-e13ab4baf604.png' }}
                />
            </View>
            <View className='flex items-center'>
                <Text className='text-2xl'>Log in</Text>
                <Text className='text-sm text-gray-600'>Continue to Medusa Mobile for{' ' + platform()}</Text>
            </View>
            <View className='mx-4 mt-2 flex flex-col items-center justify-center'>
                <LoginInput placeholder="Email address" value={userName} setValue={setUsername} />
                <LoginInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
                <Pressable onPress={logInPressed} className='bg-[#622FE0] w-11/12 p-4 my-2 items-center'>
                    <Text className='text-white'>Log In</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}