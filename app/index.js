import React, { useState } from "react";
import { router } from "expo-router";
import { Text, View, Image, TextInput, TouchableOpacity, Alert } from "react-native";
import useAuthStore from "../store/authStore";
import styles from "../assets/css/index_style"

const Inicio = () => {

    const registrarUsuario = () => {
        router.navigate('cadastro_usuario');
    }

    const [usuario, setUsuario] = useState("emilys");
    const [senha, setSenha] = useState("emilyspass");

    const { login, mensagemErro, usuarioLogado } = useAuthStore();

    const handleInputUsuario = (text) => {
        setUsuario(text);

        console.log(usuario)
    }

    const handleInputSenha = (text) => {
        setSenha(text);

        console.log(senha)
    }

    const handleLogin = async () => {

        if(usuario && senha){
            login(usuario, senha);
        }else{
            Alert.alert('Preencha os campos de usuário e senha!!!')
        }

        if(mensagemErro != ""){
            Alert.alert(mensagemErro);
        }

        if (usuarioLogado){
            Alert.alert(
                'Login',
                'Usuario logado com sucesso, clique em OK para continuar!!',
                [{
                    onPress: () => router.replace('(tabs)/lista_produtos')
                }]
            )
        }

    }


    return (
        <View style={styles.container}>
            <View style={styles.viewLogo}>
                <Image style={styles.logo} source={require('../assets/images/logo.png')} />
            </View>

            <Text style={styles.textView}>Login</Text>

            <Text style={styles.textUsuario}>Usuário</Text>
            <TextInput style={styles.textInput} onChangeText={handleInputUsuario}></TextInput>

            <Text style={styles.textUsuario}>Senha</Text>
            <TextInput style={styles.textInput} secureTextEntry onChangeText={handleInputSenha}></TextInput>

            <View style={styles.viewBtnEntrar}>
                <TouchableOpacity style={styles.btnEntrar} onPress={handleLogin}>
                    <Text style={styles.textBtnEntrar}>Entrar</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={registrarUsuario}>
                <Text style={styles.textRegistrar}>Registrar</Text>
            </TouchableOpacity>

        </View>
    );
}

export default Inicio;
