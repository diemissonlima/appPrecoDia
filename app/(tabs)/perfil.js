import React from 'react';
import { router } from "expo-router";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import useAuthStore from '../../store/authStore';
import styles from '../../assets/css/perfil_style'
import Icon from 'react-native-vector-icons/MaterialIcons';


const Profile = () => {
    const { usuarioLogado, logout, image } = useAuthStore();

    const handleLogout = () => {
        logout();
        console.log("deslogando usuario", usuarioLogado);
        if (usuarioLogado === false) {
            router.replace('../index')
        }
      };

    const editPerfil = () => {
        router.navigate('../editar_perfil')
    }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Perfil</Text>
      </View>

      <View style={styles.profileSection}>
        <Image
          source={{ uri: image }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Lizza</Text>
      </View>

      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.option} onPress={editPerfil}>
          <Icon name="person" size={24} color="#000" />
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Editar Perfil</Text>
            <Text style={styles.optionSubText}>Email, segurança, mudar número</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Icon name="notifications" size={24} color="#000" />
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Notificações</Text>
            <Text style={styles.optionSubText}>Ativar ou desativar notificações</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Icon name="delete" size={24} color="#000" />
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Excluir minha conta</Text>
            <Text style={styles.optionSubText}>Remover conta e excluir registros</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={handleLogout}>
          <Icon name="logout" size={24} color="#000" />
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText}>Sair</Text>
            <Text style={styles.optionSubText}>Fazer logout do aplicativo</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default Profile;
