import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class App extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>HOME</Text>
                <TouchableOpacity
                    style={{ backgroundColor: 'yellow', padding: 10 }}
                    onPress={() => {
                        this.props.navigation.navigate('ManHinh_Detail', { thamso: 'Hello there' })
                    }}>
                    <Text>Chuyen Qua Detail</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ backgroundColor: 'red', padding: 10 }}
                    onPress={() => {
                        this.props.navigation.navigate('DrawerOpen');
                    }}>
                    <Text>Chuyen Qua Detail</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
