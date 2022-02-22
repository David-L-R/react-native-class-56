import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { Pokemon } from "./types/pokemon";
import { fetchPokemons } from "./utils/fetchPokemons";
import { styles } from "./styles/app";

export default function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  useEffect(() => {
    fetchPokemons(setPokemons);
  }, []);

  const img_uri =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png";

  const renderPokemonCard = ({ item }: { item: Pokemon }) => {
    const { name, image, hp, defense, attack, weight, height } = item;

    return (
      <View style={styles.card}>
        <Text style={styles.cardName}>{name}</Text>
        <Image source={{ uri: image }} style={styles.cardImage} />
        <Text style={styles.cardStats}>Health: {hp}</Text>
        <Text style={styles.cardStats}>Att: {attack}</Text>
        <Text style={styles.cardStats}>Def: {defense}</Text>
        <Text style={styles.cardStats}>Weight: {weight}</Text>
        <Text style={styles.cardStats}>Height: {height}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <Image source={{ uri: img_uri }} style={styles.img} />
      <Text style={styles.title}>Choose your favorite</Text>
      <View style={{ flex: 1, paddingBottom: 100 }}>
        <FlatList
          data={pokemons}
          renderItem={renderPokemonCard}
          keyExtractor={(item: Pokemon) => item.name}
        />
      </View>
    </View>
  );
}
