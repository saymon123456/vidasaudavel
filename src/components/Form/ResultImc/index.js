//importa componentes necessários
import React from  "react";
import { View, Text } from "react-native";
import styles from "./style";

//função que exibe o resultado do cálculo na tela
export default function ResultImc(props){
    return(
        <View style={styles.resultImc}>
            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text style = {styles.numberImc}>{props.resultImc}</Text>
        </View>
    );    
}