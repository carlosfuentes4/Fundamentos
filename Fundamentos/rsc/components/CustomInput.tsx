import { View } from "react-native";
import { TextInput, StyleSheet } from "react-native";

type Props={
    type: "name" | "age";
    placeholder: string;
    value: string;
    onChange: (text:string)=>void;
}

export default function CustomInput({type,placeholder,value,onChange}:Props){

    return(<View style={styles.inputContainter} >
        <TextInput 
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        keyboardType={type==='age'?'numeric':'default'}
        />
    </View>
    );
}

const styles=StyleSheet.create({
    inputContainter:{
        flexDirection:'row',
        alignItems:'center',
        padding:5,
    },
    input:{
        borderColor:"navy",
        borderWidth:1,
        borderRadius:5,
        width:"80%",
    }
})