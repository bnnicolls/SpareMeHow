
'use strict';

var React = require('react-native');

var { StyleSheet, Dimensions } = React;
var deviceWidth = Dimensions.get('window').width;

module.exports = StyleSheet.create({
    row: {
    	flex: 2,
    	alignItems: 'center'
    },
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#453F41',
        alignItems: 'center', 
        flexDirection: 'column'
      
      
    },
    text: {
        fontSize: 18,
        color: '#fff',
        paddingBottom: 8,
        alignItems: 'center',
        fontFamily: 'chalkboard se'
    },
    welcometext: {
        fontFamily: 'chalkboard se',
        fontSize: 30
    },
    authortext:{
        color: '#e51937',
        fontFamily: 'chalkboard se',
        fontSize: 15,
        alignSelf: 'flex-end',
        paddingRight: 10
    },
    background: {

        width: null,
        height: null,
        flex: 1,
        alignItems: 'center',

    },
    quote: {
        backgroundColor: '#004d85',
        width: deviceWidth,
        height: 130,
        paddingTop: 5, 
        alignItems: 'center'
      
    },
    sparemelogo: {
        width: 64,
        height: 64,
        alignSelf: 'center' 
    },
    circle:{
        width: 115,
        height: 115,
        backgroundColor: '#fff',
        borderRadius: 60,
        alignSelf: 'center',
        
    },
    avatar:{
        width: 100,
        height: 100,
        alignSelf: 'center', 
        marginTop: 5
    },
    top:{
        alignSelf: 'flex-start'
    }
});
