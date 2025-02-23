import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useProgress } from '../components/ProgressContext';

export default function ProgressScreen() {
  const { progress } = useProgress();

  return (
    <View style={styles.container}>

      <Text style={styles.header}>Your Progress</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Completed Tutorials</Text>
        <FlatList
          data={progress.completedTutorials}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.item}>✔️ {item}</Text>
            </View>
          )}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quiz Scores</Text>
        <FlatList
          data={Object.entries(progress.scores)}
          keyExtractor={([quizId]) => quizId}
          renderItem={({ item: [quizId, score] }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.item}>📝 {quizId}: {score} points</Text>
            </View>
          )}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Exercise Scores</Text>
        <FlatList
          data={progress.exerciseScores ? Object.entries(progress.exerciseScores) : []}
          keyExtractor={([exerciseId]) => exerciseId}
          renderItem={({ item: [exerciseId, score] }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.item}>🏋️ {exerciseId}: {score} points</Text>
            </View>
          )}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    padding: 10,  // Reduced padding for a more compact layout
  },

  header: {
    fontSize: 26,  // Slightly smaller header
    fontWeight: 'bold',
    color: '#343A40',
    marginBottom: 15,  // Reduced margin
    textAlign: 'center',
  },

  section: {
    marginBottom: 20,  // Reduced margin between sections
  },

  sectionTitle: {
    fontSize: 18,  // Smaller title for a more compact look
    fontWeight: '600',
    color: '#495057',
    marginBottom: 8,  // Reduced margin for section titles
  },

  itemContainer: {
    backgroundColor: '#ffffff',
    padding: 10,  // Reduced padding inside item container
    borderRadius: 8,
    marginVertical: 3,  // Smaller margin between items
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,  // Slightly reduced shadow for a softer effect
  },

  item: {
    fontSize: 14,  // Smaller text size
    color: '#6C757D',
    marginBottom: 4,  // Smaller space between items
    fontWeight: '500',
  },
});
