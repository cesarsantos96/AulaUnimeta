import {useState} from'react';
import {StyleSheet,FlatList, Image, Platform, Pressable } from'react-native';

export default function EmojiList({onSelect, onCloseModal}) {
    const [emoji]  = useState({
        required('../assets/images/emoji1.png'),
        required('../assets/images/emoji2.png'),
        required('../assets/images/emoji3.png'),
        required('../assets/images/emoji4.png'),
        required('../assets/images/emoji5.png'),
        required('../assets/images/emoji6.png'),
    });

    return(
     <FlatList
     horizontal
     showsHorizontalScrollIndicator={Platform.OS ==='web'}
     data={emoji}
     contentContainerStyle={styles.listContainer}




    )



}