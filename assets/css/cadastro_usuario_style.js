import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: '1',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    textInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        fontSize: 16,
        backgroundColor: '#f9f9f9',
        marginHorizontal: 20
    },

    textUsuario: {
        marginTop: 50,
        marginLeft: 15,
        marginRight: 15,
        textAlign: 'left',
        fontSize: 25,
        color: 'black'
    },

    btnSalvar: {
        width: '90%',
        height: 50,
        backgroundColor: 'green',
        borderRadius: 10,
        marginTop: 40
    },

    textBtnSalvar: {
        textAlign: 'center',
        color: 'white',
        padding: 10,
        fontSize: 25
    },

    viewBtnSalvar: {
        alignItems: 'center'
    }
});
