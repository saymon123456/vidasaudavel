//importa componentes necessários
import { StyleSheet } from "react-native";

//define o design do resultado, para quando ele for exibido
const styles = StyleSheet.create({
    resultImc:{
        flex: 1,
        marginTop: 15,
        paddingTop: 60,
        borderRadius: 50,
        alignItems: "center",
        width:"100%",
    },
    information:{
        fontSize: 18,
        color: "#FF0043",
        fontWeight: "bold",
    },
    numberImc:{
        fontSize: 48,
        color: "#FF0043",
        fontWeight: "bold",
    }
});

//exporta os estilos definidos aqui
export default styles