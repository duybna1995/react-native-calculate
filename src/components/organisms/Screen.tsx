import React from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle, TextStyle } from 'react-native';

interface ScreenStyles {
    screen: StyleProp<ViewStyle>
    text: StyleProp<TextStyle>
}

const defaultStyles = StyleSheet.create({
    default: {
        backgroundColor: 'black',
        fontSize: 12,
        height: '30%',
        justifyContent: 'flex-end',
        paddingLeft: 2,
        paddingRight: 2
    },
    defaultText: {
        paddingBottom: 20,
        fontSize: 50,
        color: 'white',
        textAlign: 'right'
    }
})

type ScreenProps = {
    result: number,
    style?: ScreenStyles
}

const Screen: React.FC<ScreenProps> = ({ result, style }) => {
    return (
        <View style={[defaultStyles.default, style?.screen]}>
            <Text style={[defaultStyles.defaultText, style?.text]}>{result}</Text>
        </View>
    );
};

export default Screen;