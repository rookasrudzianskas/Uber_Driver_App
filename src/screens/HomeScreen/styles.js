import {Dimensions} from "react-native";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    roundButton: {
        position: 'absolute',
        backgroundColor: "white",
        padding: 13,
        borderRadius: 30,

    },
    roundButton1: {
        position: 'absolute',
        backgroundColor: "white",
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 12,
        paddingBottom: 12,
        borderRadius: 30,

    }
});

export default styles;
