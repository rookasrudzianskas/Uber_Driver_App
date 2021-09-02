import {Dimensions, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        // zIndex: 49,
    },
    root: {
        backgroundColor: "#00000099"
    }
});

export default styles;
