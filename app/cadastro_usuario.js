import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from "../assets/css/cadastro_usuario_style"

const cadastroUsuario = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [usuario, setUsuario] = useState('');

    const HandleSalvar = () => {
        console.log({ email, senha, nomeCompleto, usuario })
    }


    return (
        <View>
            <Text style={styles.textUsuario}>E-mail</Text>
            <TextInput style={styles.textInput} onChangeText={setEmail}></TextInput>

            <Text style={styles.textUsuario}>Senha</Text>
            <TextInput style={styles.textInput} secureTextEntry onChangeText={setSenha}></TextInput>

            <Text style={styles.textUsuario}>Nome Completo</Text>
            <TextInput style={styles.textInput} onChangeText={setNomeCompleto}></TextInput>

            <Text style={styles.textUsuario}>Usuário</Text>
            <TextInput style={styles.textInput} onChangeText={setUsuario}></TextInput>

            <View style={styles.viewBtnSalvar}>
                <TouchableOpacity style={styles.btnSalvar} onPress={HandleSalvar}>
                    <Text style={styles.textBtnSalvar}>Salvar</Text>
                </TouchableOpacity>
            </View>

        </View>

    );
}

export default cadastroUsuario;
