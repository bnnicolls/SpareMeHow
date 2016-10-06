import { Image, View } from 'react-native'

'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { closeDrawer } from '../../actions/drawer';
import { replaceOrPushRoute } from '../../actions/route';

import {Content, Text, List, ListItem, Icon } from 'native-base';

import styles from './style';
import myTheme from '../../themes/base-theme';

class SideBar extends Component {

    navigateTo(route) {
        this.props.closeDrawer(); 
        this.props.replaceOrPushRoute(route);
    }

    render(){
        return (
            <Content theme={myTheme} style={styles.sidebar} >

                <List foregroundColor={'white'} alignItems={'center'} >
                    <Icon name='ios-home' style={{fontSize: 100}}/>
                    <ListItem onPress={() => this.navigateTo('home')} >
                      <Text>Home</Text>
                    </ListItem>
                    <ListItem iconLeft onPress={() => this.navigateTo('food')} >
                        <Icon name='ios-restaurant'/>
                        <Text>Food</Text>
                    </ListItem>
                    <ListItem iconLeft onPress={() => this.navigateTo('water')} >
                        <Icon name='ios-water'/>
                        <Text>Water</Text>
                    </ListItem>
                    <ListItem iconLeft onPress={() => this.navigateTo('mood')} >
                        <Icon name='ios-happy'/>
                        <Text>Mood</Text>
                    </ListItem>
                    <ListItem iconLeft onPress={() => this.navigateTo('exercise')} >
                        <Icon name='ios-walk'/>
                        <Text>Exercise</Text>
                    </ListItem>
                    <ListItem iconLeft onPress={() => this.navigateTo('pain')} >
                        <Icon name='ios-medkit'/>
                        <Text>Pain</Text>
                    </ListItem>
                </List>
            </Content>
        );
    }
}

function bindAction(dispatch) {
    return {
        closeDrawer: ()=>dispatch(closeDrawer()),
        replaceOrPushRoute:(route)=>dispatch(replaceOrPushRoute(route))
    }
}

export default connect(null, bindAction)(SideBar);
