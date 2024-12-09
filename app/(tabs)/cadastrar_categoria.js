import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import api from '../../services/api'
import styles from "../../assets/css/cadastro_categoria_style"

const cadastroCategoria = () => {

    const [nome, setNome] = useState("");

    const salvar = async () => {
        const data = new FormData();
        data.append('nome', nome);

        try {
            const response = await api.post('/categories/add', {
                "nome": nome // Substitua com os dados que deseja enviar
            });

        } catch (error) {
            console.error('Erro na requisição:', error);
        } 

        setNome('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nome *</Text>
            <TextInput style={styles.input} onChangeText={setNome}></TextInput>

            <View style={styles.viewBtnSalvar}>
                <TouchableOpacity style={styles.button} onPress={salvar}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default cadastroCategoria;
