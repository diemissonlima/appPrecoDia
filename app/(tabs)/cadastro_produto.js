import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import api from '../../services/api'
import styles from '../../assets/css/cadastro _produto_style'
import { Picker } from '@react-native-picker/picker';
import { launchImageLibrary } from 'react-native-image-picker';


const FormScreen = () => {
  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);
  const [local, setLocal] = useState('');
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [categoria, setCategoria] = useState('');
  const [observacao, setObservacao] = useState('');
  const [foto, setFoto] = useState(null); // Para armazenar os dados da foto


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


}
    , []);


  const validarFormulario = () => {
    if (!local || !nome || !preco || !categoria) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
      return false;
    }
    if (isNaN(preco)) {
      Alert.alert('Erro', 'O preço deve ser um número válido.');
      return false;
    }
    return true;
  };


  const salvarDados = async () => {
    if (!validarFormulario()) return;

    const formData = new FormData();
    formData.append('local', local);
    formData.append('nome', nome);
    formData.append('preco', parseFloat(preco));
    formData.append('categoria', categoria);
    formData.append('observacao', observacao);

    console.log(formData);

    if (foto) {
      formData.append('foto', {
        uri: foto.uri,
        type: foto.type,
        name: foto.fileName || 'foto.jpg',
      });
    }

    try {
      const response = await fetch('https://api-produtos-9jmi.onrender.com/products', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (!response.ok) {
        throw new Error(`Erro ao salvar: ${response.status}`);
      }

      const data = await response.json();
      Alert.alert('Sucesso', 'Produto salvo com sucesso!');
      console.log('Produto salvo:', data);

      setLocal('');
      setNome('');
      setPreco('');
      setCategoria('');
      setObservacao('');
      setFoto(null);
    } catch (error) {
      console.error('Erro ao salvar o produto:', error);
      Alert.alert('Erro', 'Não foi possível salvar o produto.');
    }
  };


  const selecionarFoto = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
      },
      (response) => {
        if (response.didCancel) {
          console.log('Seleção de imagem cancelada.');
        } else if (response.errorCode) {
          console.error('Erro ao selecionar imagem:', response.errorMessage);
          Alert.alert('Erro', 'Não foi possível selecionar a imagem.');
        } else {
          const fotoSelecionada = response.assets[0];
          setFoto(fotoSelecionada);
        }
      }
    );
  };


  return (
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
      {foto ? (
        <View style={styles.imageContainer}>
          <Image source={{ uri: foto.uri }} style={styles.image} />
          <TouchableOpacity onPress={() => setFoto(null)}>
            <Text style={styles.removeText}>Remover</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity style={styles.photoButton} onPress={selecionarFoto}>
          <Text style={styles.photoButtonText}>Adicionar foto</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.button} onPress={salvarDados}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormScreen;
