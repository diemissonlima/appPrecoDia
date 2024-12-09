import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
      },
      label: {
        fontSize: 16,
        marginBottom: 8,
      },
      input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        fontSize: 16,
      },
      textArea: {
        height: 100,
        textAlignVertical: 'top',
      },
      pickerContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 20,
      },
      picker: {
        height: 50,
        width: '100%',
      },
      photoButton: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 20,
      },
      photoButtonText: {
        color: '#fff',
        fontSize: 16,
      },
      imageContainer: {
        marginBottom: 5,
        alignItems: 'center',
      },
      image: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
      },
      button: {
        backgroundColor: '#28a745',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
      },
      buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
      },
      removeText: {
        color: 'white',
        fontSize: 14,
      },
      buttonRemove: {
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10
      }
});
