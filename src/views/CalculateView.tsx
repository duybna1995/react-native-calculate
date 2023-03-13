import React from 'react';
import { View, StyleSheet } from 'react-native';
import { renderButton } from '@/constants/render';
import Screen from '@/components/organisms/Screen';
import ButtonCustom from '@/components/atoms/ButtonCustom';
import useCalculateHooks from '@/utils/calculate/hooks';

interface CalculateItemProps {
    name: string,
    bg: string,
    flex: number,
    value: number | string,
    type: string
}

const CalculateView: React.FC<{}> = () => {
    const { state, handlePress } = useCalculateHooks();
    return (
        <View>
            <Screen result={state.result} />
            {
                renderButton.map((itemButton: CalculateItemProps[], indexButton: number) => {
                    return (
                        <View key={indexButton} style={{ flexDirection: 'row', height: '14%' }}>
                            {
                                itemButton && itemButton.map((item: CalculateItemProps, index: number) => {
                                    let buttonStyle = StyleSheet.create({
                                        button: {
                                            backgroundColor: item.bg
                                        }
                                    });
                                    return (
                                        <View key={index} style={{ width: `${25 * item.flex}%` }}>
                                            <ButtonCustom 
                                                onPress={() => handlePress(item.type, item.value)} 
                                                key={index} 
                                                buttonStyle={buttonStyle} 
                                                text={item.name}
                                                isClicked={state.operation !== '' && state.operation === item.value.toString()}
                                                isSpecificCalCulate={['+', '-', '*', '/'].includes(item.value.toString())}
                                            />
                                        </View>
                                    );
                                })
                            }
                        </View>
                    )
                })
            }
        </View>
    );
};

export default CalculateView;