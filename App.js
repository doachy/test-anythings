import * as React from 'react';
import { Button, View, Text, ImageBackground, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AnalogClock from 'react-native-clock-analog';

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() =>
                    navigation.navigate('Details', {
                        itemId: 86,
                        otherParam: 'anything you want here',
                    })
                }
            />
        </View>
    );
}

function DetailsScreen({ navigation }) {
    const { itemId, otherParam } = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Text>itemId: {JSON.stringify(itemId)}</Text>
            <Text>otherParam: {JSON.stringify(otherParam)}</Text>
            <Button
                title="Go to Details... again"
                onPress={() =>
                    navigation.push('Details', {
                        itemId: Math.floor(Math.random() * 100),
                    })
                }
            />
        </View>
    );
}

const Stack = createStackNavigator();

function App() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri:
              'https://i.pinimg.com/originals/62/6f/84/626f84c40696c1308a77fd8331e12b3e.jpg',
          }}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 500,
            width: 500,
          }}>
          <AnalogClock
            size={100}
          />
          <View style={{ marginBottom: 5 }} />
          <AnalogClock
            colorClock="#fff"
            colorNumber="#000000"
            colorCenter="#000000"
            colorHour="#000000"
            colorMinutes="#000000"
            hour="5"
            minutes={55}
          />
        </ImageBackground>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});

export default App;