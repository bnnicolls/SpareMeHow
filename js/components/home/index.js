
'use strict';

import React, { Component } from 'react';
import {
  Image,
} from 'react-native'
import { connect } from 'react-redux';

import { openDrawer } from '../../actions/drawer';
import { replaceRoute } from '../../actions/route';

import { Container, Header, Title, Content, View, Text, Button, Icon, Card, CardItem } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';

import myTheme from '../../themes/base-theme';
import styles from './styles';

class Home extends Component {

    replaceRoute(route) {
        this.props.replaceRoute(route);
    }

    render() {
        return (
            <Container theme={myTheme}style={{backgroundColor: '#0b80d4'}}>

                <Header>
                    <Button transparent onPress={() => this.replaceRoute('login')}>
                        <Icon name='ios-power' />
                    </Button>
                    
                    <Image 
                      source = {require('../../../images/SpareMeHowThumb.png')} 
                      style = {styles.sparemelogo}
                      ></Image>
                    
                    <Button transparent onPress={this.props.openDrawer}>
                        <Icon name='ios-menu' />
                    </Button>
                </Header>
                <Content flexDirection ={'row'} alignItems={'flex-end'} >
                  <View flex={1} alignItems={'center'} paddingBottom={10}>
                          <Text style = {styles.welcometext} >
                                Welcome Back! 
                          </Text>
                          <Text style = {styles.welcometext}>
                                Jazmine
                           </Text>
                  </View>
                  <View style = {styles.circle} marginBottom={50}>
                      <Image 
                      source = {require('../../../images/woman.png')} 
                      style = {styles.avatar}
                      ></Image>
                  </View>
                  <View flexDirection={'row'} justifyContent={'space-around'} >
                      <View style={styles.circle} marginBottom={50} backgroundColor={'lightgray'}>
                      </View>
                      <View style={styles.circle} marginTop = {20} backgroundColor={'lightgray'}>
                      </View>
                      <View style={styles.circle} marginBottom={50} backgroundColor={'lightgray'}>
                      </View>
                  </View>
                          <View style={styles.quote}>
                              <Text style = {styles.text}>
                                  Spread your wings like a 
                              </Text>
                              <Text style = {styles.text}>
                                  mighty eagle and FLY!
                              </Text>
                              <Text style = {styles.text}>
                                  You can do ANYTHING!
                              </Text>
                             <Text style = {styles.authortext}>
                                  -Anonymous
                              </Text>
                          </View>
                </Content>
               
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        replaceRoute:(route)=>dispatch(replaceRoute(route))
    }
}

export default connect(null, bindAction)(Home);
