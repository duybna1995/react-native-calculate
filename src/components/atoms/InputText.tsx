import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface InputTextStyles {
    height?: number
    borderWidth?: number
    padding?: number
}

type InputTextProps = {
    style?: InputTextStyles
    onChangeText(): void
    isNumberInput?: boolean
    value: string
    placeholder?: string
    placeholderTextColor?: string
    isSecure?: boolean
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      borderWidth: 1,
      padding: 10,
    },
});

const InputText: React.FC<InputTextProps> = ({ 
    onChangeText, style, value, placeholder="", placeholderTextColor="", isNumberInput = false, isSecure = false 
}) => {
    return (
        <React.Fragment>
            <TextInput
                style={[styles.input, style]}
                onChangeText={onChangeText}
                keyboardType={isNumberInput ? 'numeric' : 'default'}
                value={value}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                secureTextEntry={isSecure}
                autoCapitalize='none'
            />
        </React.Fragment>
    );
};

export default InputText;