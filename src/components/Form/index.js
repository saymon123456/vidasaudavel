//importa componentes necessários
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";

//exporta a função do formulário principal
export default function Form(){
    
    const[altura, setAltura] = useState(null)
    const[peso, setPeso] = useState(null)
    const[messageImc, setMessageImc] = useState("Preencha a altura e o peso")
    const[imc, setImc] = useState(null)
    const[textButton, setTextButton] = useState("Calcular")

//função que define qual cálculo vai ser realizado com os valores inseridos
    function imcCalculator(){
        return setImc((peso/(altura*altura)).toFixed(2))
    }

    function validationImc(){
        if(peso != null && altura != null){
            imcCalculator()
            setAltura(null)
            setPeso(null)
            setMessageImc("Seu imc é igual a: ")
            setTextButton("Calcular Novamente")
            return
        }
        setImc(null)
        setMessageImc("Preencha a altura e peso: ")
        setTextButton("Calcular")
    }
    
    
//exibe na interface o formulário principal
//respectivamente, o campo de inserir a altura, o campo de inserir o peso
    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
               <Text style={styles.formLabel}>Altura</Text> 
               <TextInput
                    style={styles.input}
                    onChangeText={setAltura}
                    value={altura}
                    placeholder="Ex.: 1.75"
                    keyboardType="numeric"
               />

               <Text style={styles.formLabel}>Peso</Text> 
               <TextInput
                    style={styles.input}
                    onChangeText={setPeso}
                    value={peso}
                    placeholder="Ex.: 75.365"
                    keyboardType="numeric"
               />

               <TouchableOpacity
                    style={styles.buttonCalculator} 
                    onPress={() => {
                        validationImc()
                    }}
               >
                <Text style={styles.textButtonCalculator}>{textButton}</Text>
               </TouchableOpacity>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc = {imc}/>
        </View>
    );
}