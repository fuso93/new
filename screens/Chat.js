import React from 'react';
import {View, Text,Button} from 'react-native';
import {useNavigation} from "@react-navigation/native";



const Chat = () => {

    const navigation = useNavigation();
    return (
        <View style={{
            flex:1, justifyContent:'center', alignItems:'center'
        }}>
            <Text>
                Chat
            </Text>
            <Button
                title={"화면이동"}
                onPress={() => {navigation.navigate("ChatDetail")}}

            />


        </View>
    );
};

export default Chat;