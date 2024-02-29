import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Button({ label, theme, onPress }) {
  if (theme === "primary") {
    return (
      <View
        style={[styles.buttonContainer, { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 }]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: "#fff" }]}
          onPress={onPress}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68, // Corrigido: height
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center', // Adicionar alinhamento dos itens do botão
    padding: 3,


  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center', // Corrigido: alignItems
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 10,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});