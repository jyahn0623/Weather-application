import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Loading(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>My name is Ahn Juyoung!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : "flex-end", // 끝으로 몰아
        paddingHorizontal : 30, // css가 아닌 react-native에서 쓰는 두가지 속성 (두 개)
        paddingVertical : 100,
        backgroundColor : "#FDF6AA"
    },
    text : {
        color : "#2c2c2c",
        fontSize : 30 // px은 안 먹네.
    }
})