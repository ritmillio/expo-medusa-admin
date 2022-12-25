import { View, TextInput } from 'react-native'
import React from 'react'

type LoginInputType = {
    value: string,
    setValue: any,
    placeholder: string,
    secureTextEntry?: boolean,
}

export default function LoginInput({value, setValue, placeholder, secureTextEntry }: LoginInputType) {
  return <TextInput className='w-11/12 border-2 border-[#622FE0] rounded-md p-4 my-5' value={value} onChangeText={setValue} placeholder={placeholder} secureTextEntry={secureTextEntry}/>
}

// #622FE0