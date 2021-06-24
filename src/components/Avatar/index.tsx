import React from 'react';
import { Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type Props = {
    urlImage: string;
}

export function Avatar({ urlImage }: Props) {
    const { secondary50, secondary70 } = theme.colors; //desistruturacao

    return(
        <LinearGradient
        style={styles.container}
        colors={[secondary50, secondary70]} // degrade utilizando gradient
        >
            <Image 
            source={{ uri: urlImage }}
            style={styles.avatar}
            />
        </LinearGradient>
    )
}