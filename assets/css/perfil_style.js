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
      optionsContainer: {
        paddingHorizontal: 16,
      },
      option: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      optionTextContainer: {
        marginLeft: 12,
      },
      optionText: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      optionSubText: {
        fontSize: 15,
        color: '#666',
      },
});
