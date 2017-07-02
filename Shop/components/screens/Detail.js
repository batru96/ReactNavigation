import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Detail extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>DETAIL</Text>
                <TouchableOpacity
                    style={{ backgroundColor: 'yellow', padding: 10 }}
                    onPress={() => { this.props.navigation.goBack() }}>
                    <Text>BACK HOME</Text>
                </TouchableOpacity>
                <Text>{this.props.navigation.state.params.thamso}</Text>
            </View>
        );
    }
}
