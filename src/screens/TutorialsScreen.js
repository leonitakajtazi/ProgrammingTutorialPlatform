import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const tutorials = [
  { id: '1', title: 'JavaScript Basics', category: 'JavaScript', icon: 'logo-javascript' },
  { id: '2', title: 'ES6 Features', category: 'JavaScript', icon: 'logo-javascript' },
  { id: '3', title: 'React Components', category: 'React Native', icon: 'logo-react' },
  { id: '4', title: 'State and Props', category: 'React Native', icon: 'logo-react' },
];

export default function TutorialsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>📚 Available Tutorials</Text>
      <Text style={styles.subheader}>Explore tutorials on various programming topics.</Text>

      <FlatList
        data={tutorials}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('TutorialDetail', { tutorial: item })}
          >
            <Ionicons name={item.icon} size={30} color="#fff" style={styles.icon} />
            <View style={styles.textContainer}>
              <Text style={styles.itemTitle}>{item.title}</Text>
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
    backgroundColor: '#F5F5F5',  // Light grey background
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 10,
    textAlign: 'center',
    letterSpacing: 1.2,
  },
  subheader: {
    fontSize: 18,
    color: '#7F8C8D',
    marginBottom: 30,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  item: {
    backgroundColor: '#4682B4',  // Blue color for items
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
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  itemCategory: {
    fontSize: 14,
    color: '#E1E1E1',
    marginTop: 5,
  },
});