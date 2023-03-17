import React, { useContext } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import InputText from '@/components/atoms/InputText';
import ButtonCustom from '@/components/atoms/ButtonCustom';
import AuthenticateContext, {AuthenticateContextProps} from '@/context/AuthenticateContext';

const LoginView: React.FC<{}> = () => {
    const { 
        username, password, setUsername, setPassword, handleSubmit 
    } = useContext<AuthenticateContextProps>(AuthenticateContext);
    return (
        <View style={style.container}>
            <View>
                <Image 
                    style={style.image}
                    source={require('@/assets/logo.png')}
                />
                <InputText 
                    onChangeText={setUsername} 
                    style={style.username} 
                    placeholder="Username"
                    placeholderTextColor='#1b86de'
                    value={username}
                />
                <InputText 
                    onChangeText={setPassword} 
                    style={style.password}
                    placeholder="*******"
                    placeholderTextColor='#1b86de'
                    isSecure={true}
                    value={password}
                />
                <View style={{ width: '100%' }}>
                    <ButtonCustom 
                        onPress={handleSubmit}
                        buttonStyle={buttonStyle} 
                        text='Login'
                    />
                </View>
            </View>
            <View style={style.sectionLostPassword}>
                <Text style={style.lostPassword}>Lost password ?</Text>
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    username: {
        marginHorizontal: 30,
        marginVertical: 0,
        borderBottomWidth: 0,
        borderColor: '#4fb0ff',
        color: '#1b86de',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },
    password: {
        marginHorizontal: 30,
        marginVertical: 0, 
        borderColor: '#4fb0ff',
        color: '#1b86de',
        borderBottomStartRadius: 5,
        borderBottomEndRadius: 5
    },
    image: {
        resizeMode: 'center',
        marginHorizontal: '10%',
        width: '80%'
    },
    sectionLostPassword: {
        marginHorizontal: '10%',
        width: '80%',
        marginVertical: 50
    },
    lostPassword: {
        color: '#1b86de',
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center'
    }
})

const buttonStyle = StyleSheet.create({
    button: {
        backgroundColor: '#1b86de',
        height: 50,
        marginHorizontal: 30,
        marginTop: 30,
    }
})

export default LoginView;