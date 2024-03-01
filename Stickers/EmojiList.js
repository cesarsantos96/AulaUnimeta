import {useState} from'react';
import {StyleSheet,FlatList, Image, Platform, Pressable } from'react-native';
import emoji1 from './assets/emoji1.png';
import emoji2 from './assets/emoji2.png';
import emoji3 from './assets/emoji3.png';
import emoji4 from './assets/emoji4.png';
import emoji5 from './assets/emoji5.png';
import emoji6 from './assets/emoji6.png';




      export default function EmojiList({ onSelect, onCloseModal }) {
        const [emoji] = useState([
          emoji1,
          emoji2,
          emoji3,
          emoji4,
          emoji5,
          emoji6,
        ]);

        const handleSelectEmoji = (emoji) => {
          onSelect(emoji);
          onCloseModal();
        };

        return (
            <FlatList
              data={emoji}
              numColumns={3} // Ajustar para organizar os emojis em várias colunas
              keyExtractor={(item) => item} // Usar o caminho da imagem é uma boa prática
              renderItem={({ item }) => (
                <Pressable onPress={() => handleSelectEmoji(item)} style={styles.item}>
                  <Image source={item} style={styles.image} />
                </Pressable>
              )}
            />
          );
        }
      const styles = StyleSheet.create({
        listContainer: {
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
          paddingHorizontal: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
        image: {
          width: 100,
          height: 100,
          marginRight: 20,
        },
      });