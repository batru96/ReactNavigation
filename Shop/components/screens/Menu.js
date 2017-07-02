import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Menu extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'green', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>MENU</Text>
            </View>
        );
    }
}
