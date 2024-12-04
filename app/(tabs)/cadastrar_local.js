import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from "../../assets/css/cadastro_local_style"

const cadastroLocal = () => {

    const [nome, setNome] = useState("");
    const [cep, setCep] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [numero, setNumero] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");


    const HandleSalvar = () => {
        console.log({ nome, cep, logradouro, numero, bairro, cidade, estado })
    }


    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nome</Text>
            <TextInput style={styles.input} onChangeText={setNome}></TextInput>

            <Text style={styles.label}>CEP</Text>
            <TextInput style={styles.input} secureTextEntry onChangeText={setCep}></TextInput>

            <Text style={styles.label}>Logradouro</Text>
            <TextInput style={styles.input} onChangeText={setLogradouro}></TextInput>

            <Text style={styles.label}>Nº</Text>
            <TextInput style={styles.input} onChangeText={setNumero}></TextInput>

            <Text style={styles.label}>Bairro</Text>
            <TextInput style={styles.input} onChangeText={setBairro}></TextInput>

            <Text style={styles.label}>Cidade</Text>
            <TextInput style={styles.input} onChangeText={setCidade}></TextInput>

            <Text style={styles.label}>Estado</Text>
            <TextInput style={styles.input} onChangeText={setEstado}></TextInput>

            <View>
                <TouchableOpacity style={styles.button} onPress={HandleSalvar}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
            </View>

        </View>

    );
}

export default cadastroLocal;