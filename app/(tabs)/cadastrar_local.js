import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import api from '../../services/api'
import styles from "../../assets/css/cadastro_local_style"
import { router } from "expo-router";

const cadastroLocal = () => {

    const [nome, setNome] = useState("");
    const [cep, setCep] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [numero, setNumero] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");


    const validateForm = () => {
        if(nome && cep && logradouro && numero && bairro && cidade && estado) {
            salvarCadastro();

        } else {
            Alert.alert('Preencha todos os campos!!!')
        }
    }



    const salvarCadastro = async () => {
        const data = new FormData();
        data.append('nome', nome)
        data.append('cep', cep)
        data.append('logradouro', logradouro)
        data.append('numero', parseInt(numero))
        data.append('bairro', bairro)
        data.append('cidade', cidade)
        data.append('estado', estado)

        try {
            const response = await api.post('/locations', {
                "nome": nome,
                "cep": cep,
                "logradouro": logradouro,
                "numero": numero,
                "bairro": bairro,
                "cidade": cidade,
                "estado": estado
            });

           if(response.ok) {
            Alert.alert(
                'Sucesso',
                'Local cadastrado com sucesso', 
                [{
                    onPress: () => router.navigate('lista_produtos')
                }]
        )
           }

        } catch (error) {
            console.error('Erro na requisição:', error)

        }

        setNome('');
        setCep('');
        setLogradouro('');
        setNumero('');
        setBairro('');
        setCidade('');
        setEstado('');
        
    };


    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nome *</Text>
            <TextInput style={styles.input} onChangeText={setNome}></TextInput>

            <Text style={styles.label}>CEP *</Text>
            <TextInput style={styles.input} keyboardType="numeric" onChangeText={setCep}></TextInput>

            <Text style={styles.label}>Logradouro *</Text>
            <TextInput style={styles.input} onChangeText={setLogradouro}></TextInput>

            <Text style={styles.label}>Nº *</Text>
            <TextInput style={styles.input} keyboardType="numeric" onChangeText={setNumero}></TextInput>

            <Text style={styles.label}>Bairro *</Text>
            <TextInput style={styles.input} onChangeText={setBairro}></TextInput>

            <Text style={styles.label}>Cidade *</Text>
            <TextInput style={styles.input} onChangeText={setCidade}></TextInput>

            <Text style={styles.label}>Estado *</Text>
            <TextInput style={styles.input} onChangeText={setEstado}></TextInput>

            <View>
                <TouchableOpacity style={styles.button} onPress={validateForm}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
            </View>

        </View>

    );
}

export default cadastroLocal;
