import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import api from "../../services/api"
import styles from "../../assets/css/lista_produtos_style";
import Icon from "react-native-vector-icons/AntDesign";


const listaProdutos = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');

      setProducts(response.data);
    }

    loadProducts();

  }, []);


  return (
    <ScrollView style={styles.container}>

      <TextInput
        style={styles.searchBar}
        placeholder="Pesquisar produto"
        placeholderTextColor="#999"
      />

      <SafeAreaView>

        <View>
            {
                products.map(product => (

                    <View style={styles.card} key={product.id} className="border border-gray-300 rounded p-2 mb-2">
                        <Image source={{ uri: `https://api-produtos-9jmi.onrender.com/${product.image}` }} style={styles.productImage} />
                        <Text style={styles.productName}>{product.nome}</Text>

                        <View style={styles.viewUsuario}>
                          <Icon name="user" size={20} color={'black'}/>
                          <Text style={styles.productUser}>{product.usuario}</Text>
                        </View>

                        <View style={styles.viewUsuario}>
                          <Icon name="enviromento" size={20} color={'black'}/>
                          <Text style={styles.productLocation}>{product.Location.nome}</Text>
                        </View>
                        
                        <Text style={styles.productPrice}>R$ {product.preco}</Text>
                        <Text style={styles.productDescription}>{product.descricao}</Text>
                    </View>
                ))
            }
        </View> 
      </SafeAreaView>
    </ScrollView>
);
}

export default listaProdutos;
