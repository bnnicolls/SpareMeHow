
'use strict';

import React, { Component } from 'react';
import { DeviceEventEmitter, Dimensions, Image } from 'react-native';
import { connect } from 'react-redux';

import { replaceRoute } from '../../actions/route';

import { Container, Content, InputGroup, Input, Button, Icon, Text, View } from 'native-base';

import myTheme from '../../themes/base-theme';
import styles from './styles';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visibleHeight: Dimensions.get('window').height,
            scroll: false
        };
    }

    replaceRoute(route) {
        this.props.replaceRoute(route);
    }

    render() {
        return (
            <Container theme={myTheme} style={styles.container}>
                    <Content>
                       <View>
                        <Image source={require('../../../images/SpareMeHowThumb.png')} style={styles.shadow}></Image>
                      </View>
                           <View style={styles.textcontainer}>
                              <Text style={styles.text}>
                                    SpareMe How
                                </Text>
                              </View>
                            <View style={styles.bg}>
                                <InputGroup style={styles.input} borderType={'rounded'}>
                                    <Icon name='ios-person' />
                                    <Input placeholder='UserID' />
                                </InputGroup>
                                <InputGroup style={styles.input} borderType={'rounded'}>
                                    <Icon name='ios-unlock-outline' />
                                    <Input
                                        placeholder='Pin'
                                        secureTextEntry={true}
                                    />
                                </InputGroup>
                                <Button info style={styles.btn} textStyle={{color: '#fff'}} onPress={() => this.replaceRoute('home')}>
                                    Login
                                </Button>
                            </View>
                       
                    </Content>
            </Container>
        )
    }
}

function bindActions(dispatch){
    return {
        replaceRoute:(route)=>dispatch(replaceRoute(route))
    }
}

export default connect(null, bindActions)(Login);
