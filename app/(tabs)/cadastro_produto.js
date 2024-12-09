import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image, ScrollView } from 'react-native';
import api from '../../services/api';
import styles from '../../assets/css/cadastro _produto_style';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { router } from 'expo-router';
import openCamera from '../camera';


const cadastroProduto = () => {
  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);

  const [local, setLocal] = useState('');
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [categoria, setCategoria] = useState('');
  const [observacao, setObservacao] = useState('');
  const [selectedImage, setSelectedImage] = useState(null); // Para armazenar os dados da foto


  useEffect(() => {
    async function loadCategories() {
        const response = await api.get('/categories');
        setCategories(response.data);
    }

    async function loadLocations() {
        const response = await api.get('/locations');
        setLocations(response.data);

    }

 
    loadCategories();
    loadLocations();

}, []);

  const validarFormulario = () => {
    if (!local || !nome || !preco || !categoria|| !selectedImage) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
      return false;
    }

    salvarDados();
  };


  const salvarDados = async () => {
    const data = new FormData();
    data.append('nome', nome);
    data.append('preco', preco);
    data.append('descricao', observacao);
    data.append('usuario', 'Diemisson');
    data.append('categoriaId', categoria);
    data.append('localId', local);
    data.append('image', {
          uri: selectedImage,
          type: 'image/jpeg',
          name: 'image.jpg',
    })

    const url = "https://api-produtos-9jmi.onrender.com/products";

    const response = await fetch(url, {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    });

    if (response.status === 201) {
      Alert.alert('Sucesso', 'Produto cadastrado com sucesso!!', [{
        onPress: () => router.replace('(tabs)/lista_produtos')
      }])

    } else {
      Alert.alert('Erro ao cadastrar produto!!')
    }

    setLocal('');
    setNome('');
    setPreco('');
    setCategoria('');
    setObservacao('');
    setSelectedImage(null);

  };

  const takePicture = () => {
    router.navigate('../camera')
  }


  const pickImage = async () => {
    // Solicita permissão para acessar a galeria
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
        alert("Permissão para acessar a galeria é necessária!");
        return;
    }

    // Abre o seletor de imagem
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
    });

    if (!result.canceled) {
        setSelectedImage(result.assets[0].uri);
    }

};

const removeImage = () => {
  setSelectedImage(null);
}


  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>Local *</Text>
        <View style={styles.pickerContainer}>
          <Picker selectedValue={local} onValueChange={(itemValue, itemIndex) => setLocal(itemValue)} style={styles.picker}>

          <Picker.Item label='Selecione um local...' value="" />
            {locations.map(location => (
              <Picker.Item key={location.id} label={location.nome} value={location.id} />
            ))}

          </Picker>
        </View>

        <Text style={styles.label}>Nome *</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>Preço *</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o preço"
          value={preco}
          onChangeText={setPreco}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Categoria *</Text>
        <View style={styles.pickerContainer}>

          <Picker selectedValue={categoria} style={styles.picker} onValueChange={(itemValue, itemIndex) => setCategoria(itemValue)}>

            <Picker.Item label='Selecione uma categoria...' value="" />
            {categories.map(category => (
              <Picker.Item key={category.id} label={category.nome} value={category.id} />
            ))}

          </Picker>

        </View>

        <Text style={styles.label}>Observação</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Digite a observação"
          value={observacao}
          onChangeText={setObservacao}
          multiline
        />

        <Text style={styles.label}>Foto *</Text>

        {selectedImage ? (
          <View style={styles.imageContainer}>
            <Image source={{ uri: selectedImage }} style= {{ width: 300, height: 200, marginVertical: 20 }} />
            <TouchableOpacity style={styles.buttonRemove} onPress={removeImage}>
              <Text style={styles.removeText}>Remover Imagem</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>

            <TouchableOpacity style={styles.photoButton} onPress={takePicture}>
              <Text style={styles.photoButtonText}>Tirar foto</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.photoButton} onPress={pickImage}>
              <Text style={styles.photoButtonText}>Adicionar foto</Text>
            </TouchableOpacity>

          </View>
        )}

        <TouchableOpacity style={styles.button} onPress={validarFormulario}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default cadastroProduto;
