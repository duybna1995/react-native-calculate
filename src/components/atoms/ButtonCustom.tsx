import React from 'react';
import { TouchableOpacity, Text, StyleSheet, StyleProp, TextStyle } from 'react-native';

interface ButtonStyles {
    button:
     {
        backgroundColor?: string;
        paddingVertical?: number;
        paddingHorizontal?: number;
    }
}

const defaultStyles = StyleSheet.create({
    defaultText: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    defaultButton: {
        backgroundColor: 'black',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 0.25,
        borderStyle: 'solid',
        borderColor: 'black',
        height: '100%',
        justifyContent: 'center'
    }
})

type ButtonProps = {
    text: string
    onPress(): void
    buttonStyle?: ButtonStyles
    textStyle?: StyleProp<TextStyle>,
    isSpecificCalCulate?: boolean,
    isClicked?: boolean
}

const ButtonCustom: React.FC<ButtonProps> = ({ text, onPress, buttonStyle, textStyle, isSpecificCalCulate ,isClicked }) => {
    return (
        <TouchableOpacity 
            onPress={onPress} 
            style={[
                defaultStyles.defaultButton, 
                buttonStyle?.button, 
                { borderColor: isSpecificCalCulate && isClicked ? 'red' : 'black',
                 borderWidth: isSpecificCalCulate && isClicked ?  2 : 0.25 }
            ]}>
            <Text style={[defaultStyles.defaultText, textStyle]}>{text}</Text>
        </TouchableOpacity>
    );
};

export default ButtonCustom;