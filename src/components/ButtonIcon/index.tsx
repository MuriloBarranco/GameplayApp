import React from "react";

import {
    Text,
    View,
    Image,
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native';

import DiscordImg from '../../assets/discord.png';
import { styles } from './styles';


type Props = TouchableOpacityProps & { //Minhas props recebem todas propriedades do TouchableOpacityProps e mais essas outras de baixo
    title: string; //nome da propriedade e que tipo é
    //tipando o button 
}

export function ButtonIcon({title, ...rest} : Props) {
    return( 
        <TouchableOpacity style={styles.container} activeOpacity={0.7}>
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon} />
            </View>

            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}