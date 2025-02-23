import React, { useState,useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

export default function LearningMaterials({ route,navigation }) {
  const [activeTutorial, setActiveTutorial] = useState('JavaScript'); // Menaxhon tutorialin aktiv


 

  // Funksion që gjeneron listën e tutorialeve për gjuhën përkatëse
  const renderTutorials = (tutorials) => {
    if (!tutorials || tutorials.length === 0) {
      return <Text style={styles.errorText}>Nuk ka tutoriale për këtë kurs.</Text>; // Mesazh gabimi kur nuk ka tutoriale
    }
  
    return (
      <View>
        {tutorials.map((tutorial, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.sectionTitle}>{tutorial.title}</Text> {/* Titulli i tutorialit */}
            <Text style={styles.tutorialText}>{tutorial.content}</Text> {/* Përmbajtja e tutorialit */}
          </View>
        ))}
      </View>
    );
  };
  const tutorialsJavaScript = [
    {
      title: '📗 Variablat',  
      content: `Variablat ruajnë të dhëna që mund të përdoren më vonë. JavaScript ka tri mënyra për shpalljen e variablave:
      - \`var\`: I vjetër, jo shumë i rekomanduar.
      - \`let\`: Më e përdorur, ka fushë të dukshme të bllokut.
      - \`const\`: Nuk mund të ndryshohet pas shpalljes.
    
      Shembuj:
      \`\`\`javascript
      var x = 5; // mund të ndryshohet
      let y = 10; // mund të ndryshohet
      const z = 20; // nuk mund të ndryshohet
      \`\`\`
      `,
    },
    {
      title: '📙 Funksionet',
      content: `Funksionet realizojnë detyra specifike dhe mund të kenë parametra dhe vlera kthimi.
    
      Shembuj:
      \`\`\`javascript
      function add(a, b) { return a + b; }
      console.log(add(5, 3)); // 8
    
      const multiply = (a, b) => a * b;
      console.log(multiply(5, 3)); // 15
      \`\`\`
      `,
    },
    {
      title: '📒 Kushtet', 
      content: `Kushtet kontrollojnë logjikën e programit me \`if\`, \`else if\`, dhe \`else\`. Përdorin operatorë logjikë si \`&&\`, \`||\`, dhe \`!\`.
    
      Shembuj:
      \`\`\`javascript
      let age = 20;
    
      if (age >= 18 && age < 21) {
        console.log("Ju jeni të rritur, por jo ende mund të pini alkool.");
      } else if (age >= 21) {
        console.log("Ju mund të pini alkool.");
      } else {
        console.log("Ju jeni nën moshën e pijes.");
      }
    
      let day = "Saturday";
      switch (day) {
        case "Monday":
          console.log("Filloni punën!");
          break;
        case "Saturday":
          console.log("Keni pushim!");
          break;
        default:
          console.log("Një ditë tjetër.");
      }
      \`\`\`
      `,
    },
  ];
  
  // Lista e tutorialeve për HTML
  const tutorialsHTML = [
    {
      title: '📘 Strukturimi i faqeve me HTML',
      content: `HTML përdoret për të strukturuar faqet. Elementët kryesorë janë: <html>, <head>, <body>, <h1>, <p> dhe të tjerë.
        
        Shembuj:
        
<View style={styles.exampleContainer}>
    <Text style={styles.exampleText}>
        \`\`\`html
        <html>
          <head><title>Faqja ime</title></head>
          <body><h1>Përshëndetje!</h1><p>Kjo është një faqe HTML.</p></body>
        </html>
        \`\`\`
      </Text>
  </View>`,
    },
    {
      title: '📘 Titujt (Headings)',
      content: `Titujt janë përdorur për të strukturuar përmbajtjen. HTML ofron 6 nivele të titujve nga <h1> deri te <h6>.
  
        Shembuj:
        \`\`\`html
        <h1>Titulli Kryesor</h1>
        <h2>Sub-titulli</h2>
        \`\`\`
      `,
    },
    {
      title: '📘 Paragrafi (Paragraph)',
      content: `Elementi <p> përdoret për të krijuar paragrafë.
  
        Shembuj:
        \`\`\`html
        <p>Kjo është një paragraf.</p>
        \`\`\`
      `,
    },
    {
      title: '📘 Lidhje (Anchor Tag)',
      content: `Elementi <a> krijon lidhje që çojnë në faqe të tjera. Atributi href specifikon URL-në.
  
        Shembuj:
        \`\`\`html
        <a href="https://www.example.com">Kliko këtu</a>
        \`\`\`
      `,
    },
    {
      title: '📘 Imazhi (Image Tag)',
      content: `Elementi <img> shton imazhe në faqen HTML. Atributet kryesore janë src (burimi) dhe alt (përshkrimi).
  
        Shembuj:
        \`\`\`html
        <img src="logo.png" alt="Logo" width="300" />
        \`\`\`
      `,
    },
    {
      title: '📘 Lista e pa renditur (Unordered List)',
      content: `Elementi <ul> krijon një listë të pa renditur, ndërsa <li> për secilën pikë.
  
        Shembuj:
        \`\`\`html
        <ul><li>Apple</li><li>Banana</li></ul>
        \`\`\`
      `,
    },
    {
      title: '📘 Lista e renditur (Ordered List)',
      content: `Elementi <ol> krijon një listë të numëruar, ndërsa <li> për secilën pikë.
  
        Shembuj:
        \`\`\`html
        <ol><li>First</li><li>Second</li></ol>
        \`\`\`
      `,
    },
    {
      title: '📘 Formulari (Form)',
      content: `Formularët mblidhin informacion nga përdoruesit. Përdorim <form>, <input>, <label>, dhe <button>.
  
        Shembuj:
        \`\`\`html
        <form><label for="name">Emri:</label><input type="text" id="name" /><button>Submit</button></form>
        \`\`\`
      `,
    },
    {
      title: '📘 Tabela (Table)',
      content: `Elementi <table> krijon një tabelë. <tr> është një rresht, <td> është qeliza, dhe <th> është titulli.
  
        Shembuj:
        \`\`\`html
        <table><tr><th>Emri</th></tr><tr><td>Alice</td></tr></table>
        \`\`\`
      `,
    },
  ];
    
  // Lista e tutorialeve për CSS
  const tutorialsCSS = [
    {
      title: '📘 Styling me CSS',
      content: `CSS përdoret për të stiluar elementët HTML. Përdorni selektorët për të ndryshuar pamjen.
  
      Shembuj:
      \`\`\`css
      h1 { color: blue; font-size: 30px; }
      p { color: #333; font-family: Arial; line-height: 1.5; }
      \`\`\`
      `,
    },
    {
      title: '📘 Selektorët CSS',
      content: `Selektorët zgjedhin elementët për t'i stiluar:
      - **Selektori i Tipit**: \`h1\`, \`p\`.
      - **Selektori i Klasës**: \`.myClass\`.
      - **Selektori i ID-së**: \`#header\`.
      - **Selektori Universal**: \`*\`.
  
      Shembuj:
      \`\`\`css
      h1 { font-size: 32px; }
      .myClass { color: red; }
      #header { background-color: yellow; }
      \`\`\`
      `,
    },
    {
      title: '📘 Përdorimi i Ngjyrave në CSS',
      content: `Ngjyra mund të përdoret me emra, HEX, RGB ose HSL.
  
      Shembuj:
      \`\`\`css
      p { color: red; }
      h1 { color: #3498db; }
      .background { background-color: rgb(255, 99, 71); }
      \`\`\`
      `,
    },
    {
      title: '📘 Fontet dhe Madhësia e Tekstit',
      content: `Ndryshoni fontin dhe madhësinë e tekstit. Mund të importoni fontet nga Google Fonts.
  
      Shembuj:
      \`\`\`css
      body { font-family: 'Arial'; font-size: 16px; }
      h1 { font-size: 32px; font-weight: bold; }
      \`\`\`
      `,
    },
    {
      title: '📘 Marginat dhe Padding-u',
      content: `Marginat janë hapësira jashtë elementëve, ndërsa padding-u është brenda elementëve.
  
      Shembuj:
      \`\`\`css
      .container { margin: 20px; padding: 15px; }
      \`\`\`
      `,
    },
    {
      title: '📘 Flexbox për Layouts',
      content: `Flexbox pozicionon dhe shtrinë elementët lehtësisht.
  
      Shembuj:
      \`\`\`css
      .container { display: flex; justify-content: space-between; align-items: center; }
      .item { flex: 1; }
      \`\`\`
      `,
    },
    {
      title: '📘 Grid System për Layouts',
      content: `CSS Grid krijon rreshta dhe kolona për layout-e komplekse.
  
      Shembuj:
      \`\`\`css
      .container { display: grid; grid-template-columns: repeat(3, 1fr); }
      .item { grid-column: span 2; }
      \`\`\`
      `,
    },
    {
      title: '📘 Përdorimi i Transicioneve',
      content: `CSS mundëson ndryshime të buta në pamjen e elementeve.
  
      Shembuj:
      \`\`\`css
      .button { transition: background-color 0.3s; }
      .button:hover { background-color: #3498db; }
      \`\`\`
      `,
    },
    {
      title: '📘 Përdorimi i Box Model',
      content: `Box model kontrollon dimensionet dhe hapësirën e elementeve: margin, border, padding dhe përmbajtja.
  
      Shembuj:
      \`\`\`css
      .box { margin: 20px; padding: 15px; border: 1px solid #ccc; }
      \`\`\`
      `,
    },
  ];
  
  // Lista e tutorialeve për React Native
  const tutorialsReactNative = [
    {
      title: '📘 Komponentët në React Native',
      content: `Komponentët janë blloqe të UI që përdoren për të krijuar aplikacione. Mund të jenë elemente të thjeshta si \`Text\` dhe \`View\`.
  
      Shembuj:
      \`\`\`javascript
      import React from 'react';
      import { View, Text } from 'react-native';
  
      function App() {
        return <View><Text>Mirësevini!</Text></View>;
      }
  
      export default App;
      \`\`\`
      `,
    },
    {
      title: '📘 Stili dhe Layout në React Native',
      content: `Përdorim \`StyleSheet\` për të stiluar komponentët në React Native.
  
      Shembuj:
      \`\`\`javascript
      import React from 'react';
      import { View, Text, StyleSheet } from 'react-native';
  
      function App() {
        return <View style={styles.container}><Text style={styles.text}>Mirësevini!</Text></View>;
      }
  
      const styles = StyleSheet.create({
        container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' },
        text: { fontSize: 20, color: '#333' }
      });
  
      export default App;
      \`\`\`
      `,
    },
    {
      title: '📘 Menaxhimi i Gjendjes me useState',
      content: `Përdorim \`useState\` për të mbajtur dhe ndryshuar gjendjen e aplikacionit.
  
      Shembuj:
      \`\`\`javascript
      import React, { useState } from 'react';
      import { View, Text, TouchableOpacity } from 'react-native';
  
      function App() {
        const [count, setCount] = useState(0);
  
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 30 }}>Numri: {count}</Text>
            <TouchableOpacity onPress={() => setCount(count + 1)}>
              <Text style={{ fontSize: 20, color: 'blue' }}>Rrit Numrin</Text>
            </TouchableOpacity>
          </View>
        );
      }
  
      export default App;
      \`\`\`
      `,
    },
    {
      title: '📘 Navigimi në React Native me React Navigation',
      content: `Përdorim \`react-navigation\` për të kaluar ndërmjet ekraneve.
  
      Shembuj:
      \`\`\`javascript
      import React from 'react';
      import { Button } from 'react-native';
      import { NavigationContainer } from '@react-navigation/native';
      import { createStackNavigator } from '@react-navigation/stack';
  
      const Stack = createStackNavigator();
  
      function HomeScreen({ navigation }) {
        return <Button title="Shko në ekranin tjetër" onPress={() => navigation.navigate('Details')} />;
      }
  
      function DetailsScreen() {
        return <Text>Ky është ekrani i detajeve!</Text>;
      }
  
      export default function App() {
        return (
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        );
      }
      \`\`\`
      `,
    },
    {
      title: '📘 Përdorimi i Imazheve në React Native',
      content: `Përdorim komponentin \`Image\` për të shfaqur imazhe nga URL ose lokal.
  
      Shembuj:
      \`\`\`javascript
      import React from 'react';
      import { View, Image } from 'react-native';
  
      function App() {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={{ uri: 'https://example.com/image.jpg' }} style={{ width: 200, height: 200 }} />
          </View>
        );
      }
  
      export default App;
      \`\`\`
      `,
    },
  ];
 

  // Lista e kurseve të disponueshme
  const menuItems = [
    { name: 'JavaScript', tutorials: tutorialsJavaScript },
    { name: 'HTML', tutorials: tutorialsHTML },
    { name: 'CSS', tutorials: tutorialsCSS },
    { name: 'React Native', tutorials: tutorialsReactNative },
  ];

  const selectedCourse = menuItems.find(item => item.name === activeTutorial);
  const tutorialsToShow = selectedCourse ? selectedCourse.tutorials : [];

  return (
    <ScrollView contentContainerStyle={styles.container}>
 
     <FlatList
  horizontal
  data={menuItems}
  renderItem={({ item }) => (
    <TouchableOpacity
      style={[
        styles.menuItem,
        activeTutorial === item.name && styles.activeMenuItem
      ]}
      onPress={() => setActiveTutorial(item.name)}
    >
      <Text style={styles.menuText}>{item.name}</Text>
    </TouchableOpacity>
  )}
  keyExtractor={(item) => item.name}
  showsHorizontalScrollIndicator={false}
  contentContainerStyle={styles.menuContainer}
  style={styles.menuList} // Shtoni këtë stil për të kontrolluar lartësinë e menusë
/>

      <Text style={styles.title}>📜 {activeTutorial} Basics</Text>
      <Text style={styles.description}>
        {activeTutorial === 'JavaScript' && 'JavaScript është një gjuhë për zhvillim aplikacionesh web dhe mobile.'}
        {activeTutorial === 'HTML' && 'HTML është gjuha për strukturuar faqe web.'}
        {activeTutorial === 'CSS' && 'CSS përdoret për stilizimin e faqeve web.'}
        {activeTutorial === 'React Native' && 'React Native përdoret për zhvillimin e aplikacioneve mobile.'}
      </Text>

      <View>
        {tutorialsToShow.map((tutorial, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.sectionTitle}>{tutorial.title}</Text>
            <Text style={styles.tutorialText}>{tutorial.content}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    alignItems: 'stretch',  // Përdor 'stretch' për të shtrirë të gjithë elementet në gjerësi të njëjtë
    width: '100%',
  },


  
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#34495e',
    marginBottom: 15,
    textAlign: 'center',
    width: '100%',
    letterSpacing: 0.5, // Rrit hapësirën mes shkronjave për një pamje më moderne
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#7f8c8d',
    marginBottom: 20,
    width: '100%',
    lineHeight: 22,  // Përdor linjë më të hapur për lexim më të rehatshëm
    fontFamily: 'Helvetica Neue', // Font më modern dhe i pastër
  },
  card: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 15,
    alignSelf: 'stretch',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 10,
  },
  tutorialText: {
    fontSize: 14,
    color: '#34495e',
    textAlign: 'left',
  },
  menuContainer: {
  paddingVertical: 10,
  flexDirection: 'row', // Rregullon butonat në një rresht horizontal
},
  menuItem: {
  paddingVertical: 12,
  paddingHorizontal: 16, // Përdorim padding horizontal për ta bërë butonin më të gjerë sipas tekstit
  marginHorizontal: 5,
  borderRadius: 10,
  backgroundColor: '#3498db',
  alignSelf: 'flex-start', // Siguron që butonët të mos shtrihen në të gjithë gjerësinë
},
  activeMenuItem: {
    backgroundColor: '#2980b9',
  },
  menuText: {
    fontSize: 15,
    color: '#fff',
  },
  exampleContainer: {
    backgroundColor: '#ecf0f1',  // Background ngjyrë gri për shembujt
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderLeftWidth: 5,
    borderLeftColor: '#2980b9',  // Kufiri i majtë në ngjyrë blu
  },
  exampleText: {
    fontSize: 14,
    color: '#2c3e50',
    fontFamily: 'Courier New', // Përdor font monospaced për shembujt e kodit
    whiteSpace: 'pre-wrap',  // Siguron që hapsirat dhe tabulat do të ruhen
  
  },
  backButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: '#3498db',
    borderRadius: 5,
    alignItems: 'center',
    width:'30px',
    justifyContent:'center',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 13,
  },
});
