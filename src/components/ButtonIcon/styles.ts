import { StyleSheet} from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({ 
    container: { 
        width: '100%',
        height: 56,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        flexDirection: 'row',    // Para ficar um do lado do outro     
        alignItems: 'center',
        marginTop: -40
        
    },
    title: { 
        flex: 1, // para o botao esticar
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: 'center'
    },
    iconWrapper: {
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1, // para aplicar borda do lado do icone
        borderColor: theme.colors.line   
    },
    icon: {
        width: 24,
        height: 18
    }

});