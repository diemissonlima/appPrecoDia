import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import axios from "axios";
import styles from "../../assets/css/cadastro_categoria_style"

const cadastroCategoria = () => {

    const [nome, setNome] = useState("");
    const [response, setResponse] = useState(null);

    const salvar = async () => {
        const data = new FormData();
        data.append('nome', nome);

        try {
            const result = await axios.post('https://api-produtos-6p7n.onrender.com/categories', {
                nome: data.nome // Substitua com os dados que deseja enviar
            });

        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    };

    const cadastrar = async () => {
        const data = new FormData();
        data.append('nome', nome);

        const url = 'https://api-produtos-6p7n.onrender.com/categories'

        const response = await fetch(url, {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        console.log(data)

        if (response.status === 201) {
            alert('Produto cadastrado com sucesso!');
        } else {
            alert('Erro ao cadastrar o produto!');
        }

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
