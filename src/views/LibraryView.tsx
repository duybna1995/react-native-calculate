import React, { useState, useCallback, useContext } from 'react';
import * as ImagePicker from 'react-native-image-picker';
import { ScrollView, View, Image, StyleSheet, Dimensions, ImageSourcePropType } from 'react-native';
import AuthenticateContext, {LibraryContextProps} from '@/context/AuthenticateContext';
import LibraryContext, {AuthenticateContextProps} from '@/context/LibraryContext';
import ButtonCustom from '@/components/atoms/ButtonCustom';
import Library from '@/components/organisms/Library';

const LibraryView: React.FC<{}> = () => {
    const { 
        handleLogout
    } = useContext<AuthenticateContextProps>(AuthenticateContext);

    const { 
       listImages
    } = useContext<LibraryContextProps>(LibraryContext);

    const defaultImage = require('@/assets/logo.png');
    const [urlProfile, setUrlProfile] = useState<any>(defaultImage)
    const chooseImage = useCallback(() => {
        ImagePicker.launchImageLibrary({ mediaType: 'photo', includeBase64: true }, (response) => {
            if (response.didCancel) {
                console.log('cancelled');
            } else {
                const source = { uri: response };
                console.log(source.uri.assets[0])
                setUrlProfile({uri:`data:image/jpeg;base64,${source.uri.assets[0].base64}`})
            };
        })
    }, [setUrlProfile]);

    return (
        <ScrollView>
            <View style={{ width: '100%', flexDirection: 'row-reverse' }}>
                <ButtonCustom 
                    onPress={handleLogout}
                    buttonStyle={buttonLogoutStyle}
                    textStyle={buttonTextStyle.textLogout}
                    text='Logout'
                />
            </View>
            <View style={style.default}>
                <View style={[style.default, style.circle, { width: 220, height: 220, borderColor: 'rgba(247, 201, 72, 0.2)' }]}>
                    <View style={[style.default, style.circle, { width: 180, height: 180, borderColor: 'rgba(247, 201, 72, 0.5)' }]}>
                        <View style={[style.default, style.circle, , { width: 140, height: 140, borderColor: 'rgba(247, 201, 72, 0.8)', padding: 20, backgroundColor: 'rgba(247, 201, 72, 0.7)' }]}>
                            <Image 
                                source={urlProfile}
                                style={style.image}
                            />
                        </View>
                    </View>
                </View>
            </View>
            <View style={style.default}>
                <ButtonCustom 
                    onPress={chooseImage}
                    buttonStyle={buttonUpdateStyle}
                    textStyle={buttonTextStyle.textUpdate}
                    text='Update'
                />
            </View>
            <View>
                <Library items={listImages} />
            </View>
        </ScrollView>
    );
};

const style = StyleSheet.create({
    default: {
        width: '100%',
        alignItems: 'center',
        marginVertical: 5
    },
    image: {
        borderRadius: Dimensions.get('window').width * 0.5,
        width: 100,
        height: 100,
        backgroundColor: '#ffffff',
    },
    circle: {
        borderRadius: Dimensions.get('window').width * 0.5,
        borderWidth: 2,
        borderColor: '#f7c948',
        justifyContent: 'center'
    }
})

const buttonTextStyle = StyleSheet.create({
    textLogout: {
        fontSize: 12,
        color: '#bd2015'
    },
    textUpdate: {
        fontSize: 12,
        color: '#1358a8'
    }
})

const buttonLogoutStyle = StyleSheet.create({
    button: {
        backgroundColor: '#bdbdbd',
        height: 30,
        marginVertical: 10,
        marginRight: 20,
        paddingVertical: 5,
        borderRadius: 20
    }
})

const buttonUpdateStyle = StyleSheet.create({
    button: {
        backgroundColor: '#bdbdbd',
        height: 30,
        marginVertical: 10,
        paddingVertical: 5,
        borderRadius: 20,
        width: 100
    }
})

export default LibraryView;