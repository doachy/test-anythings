import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import ProgressCircle from 'react-native-progress-circle'
 
render() {
    return (
        <ProgressCircle
            percent={30}
            radius={50}
            borderWidth={8}
            color="#3399FF"
            shadowColor="#999"
            bgColor="#fff"
        >
            <Text style={{ fontSize: 18 }}>{'30%'}</Text>
        </ProgressCircle>
    )
}