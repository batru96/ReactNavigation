import React from 'react';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import Detail from './screens/Detail';
import Home from './screens/Home';
import Menu from './screens/Menu';
import User from './screens/User';

export const HomeStack = StackNavigator({
    ManHinhHome: {
        screen: Home,
        navigationOptions: {
            title: 'Trang chu'
        }
    },
    ManHinh_Detail: {
        screen: Detail,
        navigationOptions: {
            title: 'Chi tiet'
        }
    }
});

export const UserStack = StackNavigator({
    ManHinh_User: {
        screen: User,
        navigationOptions: {
            title: 'Tai khoan'
        }
    }
});

export const Tabs = TabNavigator({
    Home: {
        screen: HomeStack,
        navigationOptions: {
            title: 'HOME'
        }
    },
    User: {
        screen: UserStack,
        navigationOptions: {
            title: 'USER'
        }
    }
},
    {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            style: {
                backgroundColor: '#dddddd'
            },
            activeTintColor: 'red',
            inactiveTintColor: 'green'
        }
    });

export const SideMenu = DrawerNavigator({
    Tabbar: {
        screen: Tabs
    },
},
    {
        drawerWidth: 300,
        drawerPosition: 'left',
        contentComponent: props => <Menu {...props} />
    }
);