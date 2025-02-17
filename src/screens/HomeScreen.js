// HomeScreen.js
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const featuredContent = [
  { id: '1', title: 'JavaScript Basics', icon: 'logo-javascript' },
  { id: '2', title: 'HTML', icon: 'logo-html5' },
  { id: '3', title: 'CSS', icon: 'logo-css3' },
  { id: '4', title: 'React Native', icon: 'logo-react' },
];


export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>💻 Code Your Success!</Text>
      <Text style={styles.subheader}>
        Unlock your potential with hands-on tutorials.
      </Text>

      <Text style={styles.sectionTitle}>🔥 Learning Materials</Text>

      <FlatList
        data={featuredContent}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              if (item.title === 'JavaScript Basics') {
      navigation.navigate('Tutorials', { screen: 'LearningMaterials' });
    
    } else {
      navigation.navigate('Tutorials', { screen: 'LearningMaterials' });
    }
            }}
          >
            <Ionicons name={item.icon} size={30} color="#4682B4" style={styles.icon} />
            <View style={styles.textContainer}>
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
    backgroundColor: '#4682B4', // Dark blue background
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
    letterSpacing: 1.2,
  },
  subheader: {
    fontSize: 18,
    color: '#DDE6F0',
    marginBottom: 30,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    color: '#fff',
  },
  item: {
    backgroundColor: '#F5F5F5', // Light background for contrast
    padding: 18,
    borderRadius: 12,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
  },
  icon: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2C3E50',
  },
  itemSubtitle: {
    fontSize: 14,
    color: '#7F8C8D',
    marginTop: 5,
  },
});
