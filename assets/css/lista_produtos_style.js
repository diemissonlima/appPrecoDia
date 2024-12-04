import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 10,
  },
  searchBar: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    marginBottom: 20,
    elevation: 3,
    width: '100%', // Garante que os cartões ocupem a largura total
  },
  productImage: {
    width: 300, // Aumentado para melhor visibilidade
    height: 200, // Aumentado para melhor visibilidade
    borderRadius: 10,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  productName: {
    fontSize: 25, // Texto maior para destacar
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
  },
  productLocation: {
    fontSize: 18,
    color: 'black',
    marginBottom: 15,
  },
  productUser: {
    fontSize: 18,
    color: '#777',
    marginBottom: 15,
    fontWeight: 'bold'
  },
  productPrice: {
    fontSize: 22, // Destaque para o preço
    fontWeight: 'bold',
    color: '#008000',
  },
  viewUsuario: {
    flexDirection: 'row'
  }
  });
