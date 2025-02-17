// /src/screens/ProgressScreen.js
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useProgress } from '../components/ProgressContext';

export default function ProgressScreen() {
  const { progress } = useProgress();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Progress</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Completed Tutorials</Text>
        {progress.completedTutorials?.length ? (
          <FlatList
            data={progress.completedTutorials}
            keyExtractor={(item) => item}
            renderItem={({ item }) => <Text style={styles.item}>✔️ {item}</Text>}
          />
        ) : (
          <Text style={styles.noData}>No tutorials completed yet.</Text>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quiz Scores</Text>
        {Object.keys(progress.scores || {}).length ? (
          <FlatList
            data={Object.entries(progress.scores)}
            keyExtractor={([quizId]) => quizId}
            renderItem={({ item: [quizId, score] }) => (
              <View style={styles.quizScoreCard}>
                <Text style={styles.quizTitle}>Quiz: {quizId}</Text>
                <Text style={styles.quizScore}>Score: {score} points</Text>
              </View>
            )}
          />
        ) : (
          <Text style={styles.noData}>No quiz scores yet.</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f7f7', // Background color for a modern look
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2c3e50', // Dark text color for a clean look
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 25,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, // Adds shadow effect on Android
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#34495e', // Slightly lighter text for section titles
  },
  item: {
    fontSize: 16,
    marginBottom: 8,
    color: '#2c3e50',
    paddingLeft: 10,
    borderLeftWidth: 3,
    borderLeftColor: '#3498db', // Blue accent on the left side
  },
  quizScoreCard: {
    backgroundColor: '#ecf0f1',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  quizTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
  },
  quizScore: {
    fontSize: 16,
    fontWeight: '500',
    color: '#e67e22', // Orange for the score to make it stand out
    marginTop: 5,
  },
  noData: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#7f8c8d', // Light grey for "no data" message
    textAlign: 'center', // Centers the text
  },
});
