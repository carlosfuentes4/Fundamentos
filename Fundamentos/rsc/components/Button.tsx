import { TouchableOpacity, View,Text,StyleSheet } from "react-native";

type Props={
    title: string;
    onPress: ()=>void;
}

export default function Button ({title, onPress}:Props) {

    return(<TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text} >{title}</Text>
    </TouchableOpacity>);
}

const styles=StyleSheet.create({
    button:{
        borderColor:'white',
        backgroundColor:"gray",
        borderRadius:6,
        padding:5,
        width:150,
        alignItems:'center'
    },
    text:{
        fontSize:15,
        color:'white',
        fontFamily:'bold',
    }
})