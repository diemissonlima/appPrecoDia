import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      header: {
        padding: 16,
        alignItems: 'center',
        marginTop: 15
      },
      headerText: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
      },
      profileSection: {
        backgroundColor: '#0f9d58',
        alignItems: 'center',
        marginVertical: 30,
      },
      profileImage: {
        width: 150,
        height: 150,
        borderRadius: 50,
        backgroundColor: '#ccc',
        marginTop: 20
      },
      profileName: {
        marginTop: 12,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff'
      },

      label: {
        fontSize: 20,
        marginBottom: 8,
        marginHorizontal: 10
      },
      input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        marginHorizontal: 10,
        fontSize: 16,
      },
      button: {
        alignItems: 'center',
        backgroundColor: '#28a745',
        padding: 15,
        borderRadius: 5,
        marginHorizontal: 10
      },
      buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
      },
});
