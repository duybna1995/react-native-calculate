import React, { useState, useEffect, useCallback } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getRandomImage } from '@/api/random'
import { loginInfo } from '@/constants/login'

const LoginHooks = () => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [isAuthenticated, setAuthenticated] = useState<boolean>(false);

    const handleSubmit = useCallback(async () => {
        try {
            if (username === loginInfo.username && password === loginInfo.password) {
                console.log('username', username)
                console.log('password', password)
                const response = await getRandomImage();
                console.log('res', response)
                const userToken = response.data.message;
                console.log('token', userToken)
                await AsyncStorage.setItem('@userToken', userToken)
                setAuthenticated(true)
                console.log('user', userToken)
            }
        } catch (error) {
            console.log(error)
        }
    }, [username, password])

    const handleLogout = useCallback(async () => {
        try {
            await AsyncStorage.removeItem('@userToken')
            setAuthenticated(false)
            console.log('remove token')
        } catch (error) {
            console.log(error)
        }
    }, [])

    const handleGetAuthenticate = useCallback(async () => {
        try {
            const userToken = await AsyncStorage.getItem('@userToken')
            console.log('token', userToken)
            if (userToken !== null) {
                setAuthenticated(true)
                return true;
            }
        } catch (error) {
            console.log(error)
        }
        setAuthenticated(false);
        return false;
    }, [])

    useEffect(() => {
        handleGetAuthenticate()
    }, [handleGetAuthenticate])

    return {
        username,
        setUsername,
        password,
        setPassword,
        isAuthenticated,
        handleSubmit,
        handleLogout
    }
}

export default LoginHooks