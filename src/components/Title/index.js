//importa componentes necessários
import React from  "react";
import { View, Text } from "react-native";
import styles from "./style"

//função que exibe o título do aplicativo
export default function Title(){
    return(
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>App - Vida Saudável</Text>
        </View>
    );
}