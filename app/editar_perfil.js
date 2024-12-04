import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import useAuthStore from "../store/authStore";
import styles from "../assets/css/editar_perfil_style"


const editarPerfil = () => {
    const { image } = useAuthStore();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Editar Perfil</Text>
            </View>

            <View style={styles.profileSection}>
                <Image
                    source={{ uri: image }}
                    style={styles.profileImage} />
                <Text style={styles.profileName}>Lizza</Text>
            </View>

            <View>
                <Text style={styles.label}>Nome</Text>
                <TextInput style={styles.input}></TextInput>

                <Text style={styles.label}>E-Mail</Text>
                <TextInput style={styles.input}></TextInput>

                <Text style={styles.label}>CPF</Text>
                <TextInput style={styles.input}></TextInput>

                <Text style={styles.label}>Senha</Text>
                <TextInput style={styles.input} secureTextEntry></TextInput>

                <Text style={styles.label}>Telefone</Text>
                <TextInput style={styles.input}></TextInput>

                <View style={styles.viewBtnSalvar}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    )
};

export default editarPerfil;
