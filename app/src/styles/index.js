import { StyleSheet } from "react-native";
import COLORS from "../consts/color";

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        marginTop: 20
    },
    inputIcon: {
        marginTop: 15,
        position: "absolute"
    },
    input: {
        color: COLORS.light,
        paddingLeft: 30,
        flex: 1,
        borderBottomWidth: 0.5,
        fontSize: 18

    },

    btnPrimary:{
        backgroundColor: COLORS.primary,
        height: 50,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    btnSecondary: {
        height: 50,
        borderWidth: 1,
        borderColor: COLORS.light,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        flexDirection: 'row' 

    },
    line: {
        width: 30,
        height: 1,
        backgroundColor: COLORS.dark
    }
})

export default styles;