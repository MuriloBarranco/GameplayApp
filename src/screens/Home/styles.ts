import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
export const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    header: {
        width: '100%',
        paddingHorizontal: 24, // externo
        flexDirection: 'row', //um do lado do outro
        justifyContent: 'center',
        marginTop: getStatusBarHeight() + 26,
        marginBottom: 42,
    }
})