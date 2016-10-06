import {
  TouchableHighlight, Text, Image
} from 'react-native'
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';

import { Container, Header, Title, Content, Button, Icon, View } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';

import myTheme from '../../themes/base-theme';
import styles from './style';

class BlankPage extends Component {

    popRoute() {
        this.props.popRoute();
    }

    render() {
        return (
            <Container theme={myTheme} style={styles.container}>
                <Header>
                    <Button transparent onPress={() => this.popRoute()}>
                        <Icon name='ios-arrow-back' />
                    </Button>
                    
                    <Title>#Munchies</Title>
                    
                    <Button transparent onPress={this.props.openDrawer}>
                        <Icon name='ios-menu' />
                    </Button>
                </Header>

                <Content padder>
                    <Grid>
                        <Row height={200} marginTop={50}>
                            <Col>
                                <View style={styles.circle} marginTop={50}>
                                   <Image style = {styles.selection} source = {require('../../../images/junkfood.gif')}></Image>
                                </View> 
                            </Col>
                            <Col>
                                <View style={styles.circle} marginTop={50}>
                                </View> 
                            </Col>
                            <Col>
                                <View style={styles.circle}>
                                </View> 
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <View style={styles.circle}>
                                </View> 
                            </Col>
                            <Col>
                                <View style={styles.circle} marginTop={50}>
                                </View> 
                            </Col>
                            <Col>
                                <View style={styles.circle}>
                                </View> 
                            </Col>
                        </Row>
                    </Grid>
                  <View style={styles.quote}>
                              <Text style = {styles.text}>
                                  Submit
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
        popRoute: () => dispatch(popRoute())
    }
}

export default connect(null, bindAction)(BlankPage);