import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useProgress } from '../components/ProgressContext';

export default function ProgressScreen() {
  // Marrim progresin e përdoruesit nga konteksti
  const { progress } = useProgress();

  return (
    <View style={styles.container}>
      {/* Titulli kryesor i ekranit të progresit */}
      <Text style={styles.header}>Your Progress</Text>

      {/* Seksioni për tutorialet e përfunduara */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Completed Tutorials</Text>

        {/* Kontrollojmë nëse ka tutoriale të përfunduara */}
        {progress.completedTutorials?.length ? (
          <FlatList
            data={progress.completedTutorials}  // Merr të dhënat për tutorialet e përfunduara
            keyExtractor={(item) => item}  // Çdo element ka një ID unike
            renderItem={({ item }) => <Text style={styles.item}>✔️ {item}</Text>}  // Shfaqim çdo tutorial me një ikonë ✔️
          />
        ) : (
          <Text style={styles.noData}>No tutorials completed yet.</Text>  // Mesazh nëse nuk ka tutoriale të përfunduara
        )}
      </View>

      {/* Seksioni për rezultatet e kuizeve */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quiz Scores</Text>

        {/* Kontrollojmë nëse përdoruesi ka rezultate kuizesh */}
        {Object.keys(progress.scores || {}).length ? (
          <FlatList
            data={Object.entries(progress.scores)}  // Konvertojmë objektin e rezultateve në një listë çelës-vlerë
            keyExtractor={([quizId]) => quizId}  // Çdo element ka një ID unike
            renderItem={({ item: [quizId, score] }) => (
              <View style={styles.quizScoreCard}>
                {/* Emri i kuizit */}
                <Text style={styles.quizTitle}>Quiz: {quizId}</Text>
                {/* Pikët e fituara */}
                <Text style={styles.quizScore}>Score: {score} points</Text>
              </View>
            )}
          />
        ) : (
          <Text style={styles.noData}>No quiz scores yet.</Text>  // Mesazh nëse nuk ka rezultate kuizesh
        )}
      </View>

      {/* Seksioni për rezultatet e ushtrimeve */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Exercise Scores</Text>

        {/* Kontrollojmë nëse përdoruesi ka rezultate ushtrimesh */}
        {Object.keys(progress.exerciseScores || {}).length ? (
          <FlatList
            data={Object.entries(progress.exerciseScores)}  // Konvertojmë objektin e rezultateve të ushtrimeve në një listë çelës-vlerë
            keyExtractor={([exerciseId]) => exerciseId}  // Çdo element ka një ID unike
            renderItem={({ item: [exerciseId, score] }) => (
              <View style={styles.exerciseScoreCard}>
                {/* Emri i ushtrimit */}
                <Text style={styles.exerciseTitle}>Exercise: {exerciseId}</Text>
                {/* Pikët e fituara */}
                <Text style={styles.exerciseScore}>Score: {score} points</Text>
              </View>
            )}
          />
        ) : (
          <Text style={styles.noData}>No exercise scores yet.</Text>  // Mesazh nëse nuk ka rezultate ushtrimesh
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f7f9fc',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 25,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 15,
    color: '#34495e',
  },
  item: {
    fontSize: 16,
    marginBottom: 12,
    color: '#2c3e50',
    paddingLeft: 15,
    borderLeftWidth: 3,
    borderLeftColor: '#3498db',
  },
  quizScoreCard: {
    backgroundColor: '#ecf0f1',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
  },
  quizTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
  },
  quizScore: {
    fontSize: 16,
    fontWeight: '500',
    color: '#e67e22',
    marginTop: 5,
  },
  exerciseScoreCard: {
    backgroundColor: '#f4f6f7',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
  },
  exerciseTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
  },
  exerciseScore: {
    fontSize: 16,
    fontWeight: '500',
    color: '#e74c3c',
    marginTop: 5,
  },
  noData: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#7f8c8d',
    textAlign: 'center',
  },
});
