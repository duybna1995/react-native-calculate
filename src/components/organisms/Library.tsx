import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

type LibraryProps = {
    items: any
}

const Library: React.FC<LibraryProps> = ({ items }) => {
    return (
        <View style={{ 
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center'
        }}>
            {
                items.map((item: any, index: number) => {
                    return (
                        <View key={index} style={style.view}>
                            { item.url !== '' ? (
                                <Image 
                                    style={style.image}
                                    source={{uri: item.url}}
                                    resizeMode='cover'
                                />
                            ) : (
                                <Text>{item.text}</Text>
                            )}
                        </View>
                    );
                })
            }
        </View>
    );
};

const style = StyleSheet.create({
    image: {
        marginHorizontal: 5,
        width: '100%',
        height: undefined,
        flex: 1,
    },
    view: {
        backgroundColor: 'grey', 
        width: '30%', 
        height: 100,
        marginHorizontal: 5,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Library;