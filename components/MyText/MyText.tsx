import { Text } from "react-native"
import style from "./Style";

type MyTextProps = {
    title?: string;
    fontSize?: number;
    styles?: object;
};

const MyText = ({ title = 'Hello World', fontSize, styles }: MyTextProps) => {
    return (
        <Text style={[
            style.text,
            style.fontStyles,
            { fontSize: fontSize ?? 20 },
            styles ? styles : null
        ]}>
            {title}
        </Text>
    )
}

export default MyText;