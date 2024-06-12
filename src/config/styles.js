import { StyleSheet } from 'react-native';

export const styles =  StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    innerContainer: {
        paddingHorizontal: 20,
        alignSelf: "stretch",
      },
    input:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    button:{
        marginTop:12,
    },
    error:{
        color:'red',
    },
});