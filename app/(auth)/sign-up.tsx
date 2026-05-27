import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
const SignUp = () => {
  return (
    <View>
      <Text>sign-up</Text>
      <Link href="/(auth)/sign-in" className="mt-4 px-4 py-2 rounded bg-primary text-white">
        Create an account
      </Link>
    </View>
  )
}

export default SignUp