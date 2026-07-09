import { Text } from "react-native"
import style from "./Style";

const MyText = () => {
    return (
        <Text style={[style.text, style.fontStyles]}>Hello World 2</Text>
    )
}

export default MyText;