import {Dimensions, StyleSheet} from "react-native";

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        zIndex: 49,
    },
});

export default styles;
