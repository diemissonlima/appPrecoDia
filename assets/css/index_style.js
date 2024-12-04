import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        marginTop: 25
    },

    textView: {
        textAlign: 'center',
        fontSize: 50,
        fontWeight: 'bold',
        color: 'black',
        marginVertical: 50
    },

    logo: {
        width: 300,
        height: 300
    },

    viewLogo: {
        alignItems: 'center'
    },

    textUsuario: {
        marginLeft: 15,
        marginRight: 15,
        textAlign: 'left',
        fontSize: 25,
        color: 'black'
    },

    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        fontSize: 16,
        backgroundColor: '#f9f9f9',
        marginVertical: 20,
        marginHorizontal: 20
    },

    btnEntrar: {
        width: '90%',
        height: 50,
        backgroundColor: 'green',
        borderRadius: 10,
        marginTop: 20
    },

    textBtnEntrar: {
        textAlign: 'center',
        color: 'white',
        padding: 10,
        fontSize: 25
    },

    viewBtnEntrar: {
        alignItems: 'center'
    },

    textRegistrar: {
        marginTop: 25,
        fontSize: 25,
        textDecorationLine: 'underline',
        color: 'blue',
        textAlign: 'center'
    }

});
