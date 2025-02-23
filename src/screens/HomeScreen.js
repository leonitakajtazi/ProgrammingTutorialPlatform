import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Lista e përmbajtjeve të veçuara që do të shfaqen në ekranin kryesor
const featuredContent = [
  { id: '1', title: 'JavaScript Basics', icon: 'logo-javascript' },
  { id: '2', title: 'HTML', icon: 'logo-html5' },
  { id: '3', title: 'CSS', icon: 'logo-css3' },
  { id: '4', title: 'React Native', icon: 'logo-react' },
];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Titulli kryesor i ekranit */}
      <Text style={styles.header}>💻 Code Your Success!</Text>

      {/* Nën-titulli motivues */}
      <Text style={styles.subheader}>
        Unlock your potential with hands-on tutorials.
      </Text>

      {/* Seksioni i materialeve të të mësuarit */}
      <Text style={styles.sectionTitle}>🔥 Learning Materials</Text>

      {/* FlatList për të shfaqur listën e materialeve të të mësuarit */}
      <FlatList
        data={featuredContent} // Merr të dhënat nga array `featuredContent`
        keyExtractor={(item) => item.id} // Çdo element duhet të ketë një ID unike
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item} // Stili për çdo element të listës
            onPress={() => {
              if (item.title === 'JavaScript Basics') {
                // Navigimi në ekranin 'LearningMaterials' kur shtypet një element
                navigation.navigate('Tutorials', { screen: 'LearningMaterials' });
              } else {
                navigation.navigate('Tutorials', { screen: 'LearningMaterials' });
              }
            }}
          >
            {/* Ikona për secilin kurs */}
            <Ionicons name={item.icon} size={30} color="#4682B4" style={styles.icon} />
            <View style={styles.textContainer}>
              {/* Teksti për titullin dhe përshkrimin e shkurtër */}
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemSubtitle}>Tap to learn more!</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4682B4', // Ngjyra e sfondit të erët blu
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center', // Qendrimi i tekstit
    letterSpacing: 1.2, // Hapësira midis shkronjave
  },
  subheader: {
    fontSize: 18,
    color: '#DDE6F0',
    marginBottom: 30,
    textAlign: 'center', // Qendrimi i tekstit
    fontStyle: 'italic', // Stili i tekstit në kursiv
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    color: '#fff', // Ngjyra e titullit të seksionit
  },
  item: {
    backgroundColor: '#F5F5F5', // Ngjyra e sfondit të dritë për kontrast
    padding: 18,
    borderRadius: 12, // Këndet e zaura
    marginBottom: 15,
    flexDirection: 'row', // Layout me drejtime horizontale
    alignItems: 'center', // Qendrimi i elementeve në qendër
    shadowColor: '#000', // Ngjyra e hijes
    shadowOpacity: 0.15, // Transparenca e hijes
    shadowOffset: { width: 0, height: 4 }, // Pozita e hijes
    shadowRadius: 6, // Rrezja e hijes
    elevation: 5, // Lartësia e hijes në Android
  },
  icon: {
    marginRight: 10, // Distanca e ikonës nga teksti
  },
  textContainer: {
    flex: 1, // Merr gjithë hapësirën e mbetur
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C3E50', // Ngjyra e titullit
  },
  itemSubtitle: {
    fontSize: 14,
    color: '#7F8C8D', // Ngjyra e përshkrimit të shkurtër
    marginTop: 5, // Distanca në majë
  },
});
