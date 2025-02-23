import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Lista e kurseve me kategori dhe ikona përkatëse
const tutorials = [
  { id: 'js1', title: 'JavaScript Basics', category: 'JavaScript', icon: 'logo-javascript', quizId: 'js1', exerciseId: 'ex1' },
  { id: 'wd1', title: 'HTML Basics', category: 'HTML', icon: 'logo-html5', quizId: 'wd1', exerciseId: 'ex5' },
  { id: 'wd2', title: 'CSS Styling', category: 'CSS', icon: 'logo-css3', quizId: 'wd2', exerciseId: 'ex8' },
  { id: 'rn1', title: 'React Native Basics', category: 'React Native', icon: 'logo-react', quizId: 'rn1', exerciseId: 'ex12' }
];

export default function TutorialsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Titulli dhe përshkrimi i ekranit */}
      <Text style={styles.header}>📚 Quizify & Practice</Text>
      <Text style={styles.subheader}>Test and improve your skills with quizzes and exercises!</Text>

      {/* FlatList për të shfaqur listën e kurseve */}
      <FlatList
        data={tutorials}  // Jepet lista e tutorialeve
        keyExtractor={(item) => item.id}  // ID e elementeve për t'i bërë ato unik
        renderItem={({ item }) => (
          // Klikimi mbi një kurs e çon te detajet e tij
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('TutorialDetail', {
              tutorial: item,  // Dërgohet e gjithë tutoriali
              quizId: item.quizId,  // ID për kuizin përkatës
              exerciseId: item.exerciseId  // ID për ushtrimin përkatës
            })}
          >
            {/* Ikona përkatëse e kursit */}
            <Ionicons name={item.icon} size={30} color="#fff" style={styles.icon} />
            
            <View style={styles.textContainer}>
              {/* Titulli i kursit */}
              <Text style={styles.itemTitle}>{item.title}</Text>
              {/* Kategoria e kursit */}
              <Text style={styles.itemCategory}>{item.category}</Text>
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
    backgroundColor: '#F5F5F5',  // Ngjyra e pasme për ekranin
    padding: 20,  // Hapësira rreth përmbajtjes
  },
  header: {
    fontSize: 28,  // Madhësia e fontit të titullit
    fontWeight: 'bold',  // Pesha e fontit për titullin
    color: '#2C3E50',  // Ngjyra e titullit
    marginBottom: 10,  // Hapësira poshtë titullit
    textAlign: 'center',  // Qendrimi i tekstit
    letterSpacing: 1.2,  // Hapësira midis shkronjave
  },
  subheader: {
    fontSize: 18,  // Madhësia e fontit të përshkrimit
    color: '#7F8C8D',  // Ngjyra e përshkrimit
    marginBottom: 30,  // Hapësira poshtë përshkrimit
    textAlign: 'center',  // Qendrimi i përshkrimit
    fontStyle: 'italic',  // Stili i fontit si kursiv
  },
  item: {
    backgroundColor: '#4682B4',  // Ngjyra e pasme e elementeve të listës
    padding: 18,  // Hapësira brenda secilit element
    borderRadius: 12,  // Rrafshet e këndeve
    marginBottom: 15,  // Hapësira midis elementeve
    flexDirection: 'row',  // Vendosja e ikonës dhe titullit në një rresht
    alignItems: 'center',  // Qendrimi i elementeve vertikalisht
    shadowColor: '#000',  // Ngjyra e hijes
    shadowOpacity: 0.15,  // Transparenca e hijes
    shadowOffset: { width: 0, height: 4 },  // Pozicioni i hijes
    shadowRadius: 6,  // Rrezatimi i hijes
    elevation: 5,  // Elevimi i elementit për të krijuar efektin e hijes
  },
  icon: {
    marginRight: 15,  // Hapësira midis ikonës dhe tekstit
  },
  textContainer: {
    flex: 1,  // Lejon që teksti të zërë hapësirën mbetur
  },
  itemTitle: {
    fontSize: 18,  // Madhësia e fontit për titullin e kursit
    fontWeight: '600',  // Pesha e fontit për titullin
    color: '#fff',  // Ngjyra e fontit të titullit
  },
  itemCategory: {
    fontSize: 14,  // Madhësia e fontit për kategorinë
    color: '#E1E1E1',  // Ngjyra e kategorisë
    marginTop: 5,  // Hapësira midis titullit dhe kategorisë
  },
});
