
'use strict';

var React = require('react-native');

var { StyleSheet, Dimensions } = React;

var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

module.exports = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#0b80d4'
        
    },
    shadow: {
        flex: 1,
        //height: 100,
        //width: 300,
        alignSelf: 'center',
        marginTop: 50,
        //height: 300,
        
    },
    bg: {
        flex: 1,
       // marginTop: deviceHeight/1.75,
        backgroundColor: '#004d85',
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 90,
        bottom: 0,
        opacity: .8
    },
    input: {
        marginTop: 30,
        marginBottom: 20,
    },
    btn: {
        marginTop: 20,
        alignSelf: 'center',
        
    },
    text: {
        fontSize: 40,
        color: '#fff',
        marginBottom: 8,
        alignItems: 'center',
        fontFamily: 'chalkboard se'
    },
    background:{
     justifyContent: 'center', 
      alignItems: 'center', 
      flex: 1, 
      resizeMode: 'contain'
    },
    textcontainer: {
        flex: 1,
        //backgroundColor: '#d2d4dc',
        //paddingTop: 15,
        borderRadius: 15,
        borderColor: 'white',
        borderWidth: 1,
        alignItems: 'center'
    },
});
