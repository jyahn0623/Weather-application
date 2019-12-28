import React from "react";
import {View, Text, StyleSheet, StatusBar} from "react-native";
import PropTypes from "prop-types";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';


const weatherCase = {
    Haze : {
        iconName : "weather-hail",
        gradient : ['#3a7bd5', '#f44336']
    },
    Clouds : {
        iconName : "weather-cloudy",
        gradient : ['#2196f3', '#f44336']
    },
    Clear : {
        iconName : "weather-sunny",
        gradient : ['#3a7bd5', '#3a6073']
    },
    Thunderstorm: {
        iconName : "weather-lightning",
        gradient : ['#3a7bd5', '#3a6073']
    },
    Drizzle: {
        iconName : "cloud-drizzle",
        gradient : ['#3a7bd5', '#3a6073']
    },
    Rain: {
        iconName : "weather-pouring",
        gradient : ['#3a7bd5', '#3a6073']
    },
    Snow: {
        iconName : "weather-snowy",
        gradient : ['#3a7bd5', '#3a6073']
    }
}
export default function Weather(props){
    return (
        <LinearGradient colors={['#3a7bd5', '#3a6073']} style={st.gradient}>
            <View style={st.container}>
                <StatusBar barStyle="light-content" />
                <View style={st.halfContainer}>
                    <MaterialCommunityIcons name={weatherCase[props.condition].iconName} size={100} style={{color : 'white'}}/>
                </View>
                <View style={st.halfContainer}>
                    <Text style={st.text}>{props.temp} 도씨</Text>
                    <Text style={st.text}>{props.condition}</Text>
                </View>
               
            </View>
        </LinearGradient>
        
    )
}


const st = StyleSheet.create({
    container : {
        flex : 1,
    },
    halfContainer : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"
    },
    text : {
        fontSize : 32,      
        color : "white"  
    },
    gradient : {
        flex : 1,
        padding: 15, 
        alignItems: 'center', 
        borderRadius: 5
    }
});

