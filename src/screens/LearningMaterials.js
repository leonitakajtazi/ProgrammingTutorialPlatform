import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, FlatList, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';

export default function JavaScript() {
  const navigation = useNavigation();
  const [activeTutorial, setActiveTutorial] = useState('JavaScript'); // Menaxhon tutorialin aktiv

  const handleGoBack = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Home' }], 
      })
    );
  };

  // Funksioni për të ndihmuar në zgjedhjen e tutorialeve
  const renderTutorials = (tutorials) => {
    return tutorials.map((tutorial, index) => (
      <View key={index} style={styles.card}>
        <Text style={styles.sectionTitle}>{tutorial.title}</Text>
        <Text style={styles.tutorialText}>{tutorial.content}</Text>
      </View>
    ));
  };

  const menuItems = [
    { name: 'JavaScript', tutorials: tutorialsJavaScript },
    { name: 'HTML', tutorials: tutorialsHTML },
    { name: 'CSS', tutorials: tutorialsCSS },
    { name: 'React Native', tutorials: tutorialsReactNative },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
        <Text style={styles.backButtonText}>‹ Kthehu</Text>
      </TouchableOpacity>

      {/* Nënmenyja horizontale */}
      <FlatList
        horizontal
        data={menuItems}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.menuItem, activeTutorial === item.name && styles.activeMenuItem]}
            onPress={() => setActiveTutorial(item.name)}
          >
            <Text style={styles.menuText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.menuContainer}
      />

      {/* Përshtat tutorialin që shfaqet përkatësisht */}
      <Text style={styles.title}>📜 {activeTutorial} Basics</Text>
      <Text style={styles.description}>
        {activeTutorial === 'JavaScript' && 'JavaScript është një gjuhë për zhvillim aplikacionesh web dhe mobile.'}
        {activeTutorial === 'HTML' && 'HTML është gjuha për strukturuar faqe web.'}
        {activeTutorial === 'CSS' && 'CSS përdoret për stilizimin e faqeve web.'}
        {activeTutorial === 'React Native' && 'React Native përdoret për zhvillimin e aplikacioneve mobile.'}
      </Text>

      {/* Shfaq tutorialet përkatëse */}
      {renderTutorials(menuItems.find((item) => item.name === activeTutorial).tutorials)}
    </ScrollView>
  );
}

// Lista e tutorialeve për JavaScript
const tutorialsJavaScript = [
  {
    title: '📘 Variablat',
    content: `Variablat përdoren për të ruajtur të dhëna që mund të përdoren më vonë në program. JavaScript ka tri mënyra për të shpallur variabla:
    - \`var\`: Është i vjetër dhe nuk është shumë i rekomanduar për përdorim në JavaScript të fundit.
    - \`let\`: Më e preferuar se \`var\`, ka një fushë të dukshme të bllokut dhe mund të ndryshohet.
    - \`const\`: Nuk mund të ndryshohet pas krijimit.
    
    Shembuj:
    \`\`\`javascript
    var x = 5; // i mund të ndryshohet
    let y = 10; // gjithashtu mund të ndryshohet
    const z = 20; // nuk mund të ndryshohet
    \`\`\`
    `,
  },
  {
    title: '📘 Funksionet',
    content: `Funksionet janë grupe kodesh që mund të thirren për të realizuar një detyrë të caktuar dhe mund të kenë parametrat dhe kthimin e vlerës.
    - Funksionet mund të kenë parametra që i kalohen kur thirren, si dhe mund të kthejnë një vlerë si rezultat të ekzekutimit të tyre.
    
    Shembuj:
    \`\`\`javascript
    // Funksion i thjeshtë që kthen vlerën
    function add(a, b) {
      return a + b;
    }
    
    console.log(add(5, 3)); // Output: 8

    // Funksion arrow (shkurtesë)
    const multiply = (a, b) => a * b;
    console.log(multiply(5, 3)); // Output: 15
    \`\`\`
    `,
  },
  {
    title: '📘 Kushtet',
    content: `Kushtet janë një mënyrë për të vendosur logjikën e programit, duke përdorur "if", "else if", dhe "else".
    - Kushtet mund të përdorin operatorë logjikë si \`&&\` (dhe), \`||\` (ose), dhe \`!\` (moho).
    - Mund të përdoren edhe për t’u krijuar struktura më komplekse si "switch".

    Shembuj:
    \`\`\`javascript
    let age = 20;

    if (age >= 18 && age < 21) {
      console.log("Ju jeni një të rritur, por jo ende mund të pini alkool.");
    } else if (age >= 21) {
      console.log("Ju mund të pini alkool.");
    } else {
      console.log("Ju jeni nën moshën e pijes.");
    }

    // Shembull i një "switch"
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
    content: `HTML përdoret për të strukturuar përmbajtjen e faqes. Elementët kryesorë janë: <html>, <head>, <body>, <h1>, <p> dhe të tjerë. Këta elementë janë baza për ndërtimin e faqeve web.
    
    Shembuj:
    \`\`\`html
    <html>
      <head>
        <title>Faqja ime</title>
      </head>
      <body>
        <h1>Përshëndetje!</h1>
        <p>Kjo është një faqe e thjeshtë HTML.</p>
      </body>
    </html>
    \`\`\`
    `,
  },
  {
    title: '📘 Titujt (Headings)',
    content: `Titujt janë përdorur për të dhënë struktura dhe për të ndihmuar përdoruesit të kuptojnë më mirë përmbajtjen e faqes. HTML ofron 6 nivele të titujve: <h1> deri te <h6> ku \`<h1>\` është më i rëndësishëm dhe \`<h6>\` më pak i rëndësishëm.
    
    Shembuj:
    \`\`\`html
    <h1>Titulli Kryesor</h1>
    <h2>Sub-titulli</h2>
    <h3>Një tjetër sub-titull</h3>
    \`\`\`
    `,
  },
  {
    title: '📘 Paragrafi (Paragraph)',
    content: `Elementi \`<p>\` përdoret për të krijuar paragrafë dhe është një nga elementët më të thjeshtë në HTML. Ai ndihmon në ndarjen e përmbajtjes në pjesë të lexueshme.
    
    Shembuj:
    \`\`\`html
    <p>Kjo është një paragraf që përmban informacionin kryesor.</p>
    \`\`\`
    `,
  },
  {
    title: '📘 Lidhje (Anchor Tag)',
    content: `Elementi \`<a>\` përdoret për të krijuar lidhje (hyperlinks) që mund të çojnë në faqe të tjera web. Mund të përdorim atributin \`href\` për të specifikuar URL-në e lidhjes.
    
    Shembuj:
    \`\`\`html
    <a href="https://www.example.com">Kliko këtu për të vizituar faqe</a>
    \`\`\`
    `,
  },
  {
    title: '📘 Imazhi (Image Tag)',
    content: `Elementi \`<img>\` përdoret për të shtuar imazhe në një faqe HTML. Ky element ka dy atribute kryesore: \`src\` për burimin e imazhit dhe \`alt\` për përshkrimin alternativ.
    
    Shembuj:
    \`\`\`html
    <img src="logo.png" alt="Logo i faqes" width="300" />
    \`\`\`
    `,
  },
  {
    title: '📘 Lista e pa renditur (Unordered List)',
    content: `Elementi \`<ul>\` krijon një listë të pa renditur, ndërsa \`<li>\` përdoret për secilën pikë të listës.
    
    Shembuj:
    \`\`\`html
    <ul>
      <li>Apple</li>
      <li>Banana</li>
      <li>Orange</li>
    </ul>
    \`\`\`
    `,
  },
  {
    title: '📘 Lista e renditur (Ordered List)',
    content: `Elementi \`<ol>\` krijon një listë të renditur, e cila është e numëruar, dhe \`<li>\` përdoret për secilën pikë të listës.
    
    Shembuj:
    \`\`\`html
    <ol>
      <li>First</li>
      <li>Second</li>
      <li>Third</li>
    </ol>
    \`\`\`
    `,
  },
  {
    title: '📘 Formulari (Form)',
    content: `Formularët përdoren për të marrë informacion nga përdoruesit. Elementët kryesorë të formularëve janë \`<form>\`, \`<input>\`, \`<label>\`, dhe \`<button>\`.
    
    Shembuj:
    \`\`\`html
    <form action="/submit" method="POST">
      <label for="name">Emri:</label>
      <input type="text" id="name" name="name" />
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" />
      <button type="submit">Dërgo</button>
    </form>
    \`\`\`
    `,
  },
  {
    title: '📘 Tabela (Table)',
    content: `Elementi \`<table>\` krijon një tabelë, \`<tr>\` është për një rresht, \`<td>\` për një qelizë të tabelës, dhe \`<th>\` për një titull të tabelës.
    
    Shembuj:
    \`\`\`html
    <table>
      <tr>
        <th>Emri</th>
        <th>Email</th>
      </tr>
      <tr>
        <td>Alice</td>
        <td>alice@example.com</td>
      </tr>
      <tr>
        <td>Bob</td>
        <td>bob@example.com</td>
      </tr>
    </table>
    \`\`\`
    `,
  },
];

// Lista e tutorialeve për CSS
const tutorialsCSS = [
  {
    title: '📘 Styling me CSS',
    content: `CSS përdoret për të stiluar dhe përshtatur pamjen e elementeve HTML në një faqe. Përdorni selektorët për të zgjedhur elementët dhe për të ndryshuar pamjen e tyre.
    
    Shembuj të thjeshtë të CSS:
    \`\`\`css
    h1 {
      color: blue; /* Ndryshon ngjyrën e titujve */
      font-size: 30px; /* Ndryshon madhësinë e fontit */
    }
    p {
      color: #333; /* Ngjyrë gri e errët për tekstin */
      font-family: Arial, sans-serif; /* Vendos fontin */
      line-height: 1.5; /* Vendos hapësirën ndërmjet rreshtave */
    }
    \`\`\`
    `,
  },
  {
    title: '📘 Selektorët CSS',
    content: `Selektorët janë mënyra për të zgjedhur elementët HTML që dëshironi të stiloni. Ka disa lloje selektorësh në CSS:
    
    - **Selektori i Tipit**: Selektori i elementëve HTML si \`h1\`, \`p\`, etj.
    - **Selektori i Klasës**: Selektori i elementëve me klasë të caktuar, p.sh., \`.myClass\`.
    - **Selektori i ID-së**: Selektori i elementeve me një ID të caktuar, p.sh., \`#header\`.
    - **Selektori Universal**: \`*\` selekton çdo element në një faqe.
    
    Shembuj:
    \`\`\`css
    /* Selektor i Tipit */
    h1 {
      font-size: 32px;
    }

    /* Selektor i Klasës */
    .myClass {
      color: red;
    }

    /* Selektor i ID-së */
    #header {
      background-color: yellow;
    }
    \`\`\`
    `,
  },
  {
    title: '📘 Përdorimi i Ngjyrave në CSS',
    content: `CSS ofron mundësi të shumta për të ndryshuar ngjyrat e elementeve. Mund të përdorësh ngjyra me emra të thjeshtë si \`red\` ose \`blue\`, kodet HEX, RGB ose HSL.
    
    Shembuj:
    \`\`\`css
    p {
      color: red; /* Përdorimi i ngjyrës me emër */
    }

    h1 {
      color: #3498db; /* Përdorimi i ngjyrës HEX */
    }

    .background {
      background-color: rgb(255, 99, 71); /* Përdorimi i RGB */
    }
    \`\`\`
    `,
  },
  {
    title: '📘 Fontet dhe Madhësia e Tekstit',
    content: `CSS mundëson ndryshimin e madhësisë, stilit dhe familjes së fontit për tekstin në faqe. Mund të përdorni fontet nga një font-familje të para-definuar ose mund të importoni fontet nga burime të jashtme si Google Fonts.
    
    Shembuj:
    \`\`\`css
    body {
      font-family: 'Arial', sans-serif;
      font-size: 16px;
    }

    h1 {
      font-size: 32px;
      font-weight: bold;
    }
    \`\`\`
    `,
  },
  {
    title: '📘 Përdorimi i Marginave dhe Padding-ut',
    content: `Në CSS, marginat dhe padding-u përdoren për të krijuar hapësira rreth dhe brenda elementeve.
    
    - **Margin**: Hapësira jashtë një elementi.
    - **Padding**: Hapësira brenda një elementi, përpara përmbajtjes.
    
    Shembuj:
    \`\`\`css
    .container {
      margin: 20px; /* Hapësira jashtë elementit */
      padding: 15px; /* Hapësira brenda elementit */
    }
    \`\`\`
    `,
  },
  {
    title: '📘 Flexbox për Layouts',
    content: `Flexbox është një sistem i ri dhe më i fuqishëm për krijimin e layout-eve në CSS. Ai mundëson që elementet të shtrihen dhe të pozicionohen lehtësisht brenda një konteneri.
    
    Shembuj:
    \`\`\`css
    .container {
      display: flex; /* Aktivizon Flexbox */
      justify-content: space-between; /* Vendos hapësirën mes elementeve */
      align-items: center; /* Vendos elementet në qendër vertikalisht */
    }
    .item {
      flex: 1; /* Çdo element do të shtrihet dhe të mbushë hapësirën */
    }
    \`\`\`
    `,
  },
  {
    title: '📘 Grid System për Layouts',
    content: `CSS Grid është një tjetër metodë për ndërtimin e layout-eve kompleks. Ai ndihmon për të krijuar rreshta dhe kolona për një faqe.
    
    Shembuj:
    \`\`\`css
    .container {
      display: grid; /* Aktivizon CSS Grid */
      grid-template-columns: repeat(3, 1fr); /* Krijon 3 kolona */
    }
    .item {
      grid-column: span 2; /* Ky element do të mbulojë dy kolona */
    }
    \`\`\`
    `,
  },
];

// Lista e tutorialeve për React Native
const tutorialsReactNative = [
  {
    title: '📘 Komponentët në React Native',
    content: `Komponentët janë blloqe të vogla të UI që mund të përdoren për të ndërtuar aplikacione mobile. Komponentët mund të jenë të thjeshtë si një tekst ose një pamje (image), ose mund të jenë më të komplikuar, si përbërës që përmbajnë më shumë interaktivitet.

    Shembuj:
    \`\`\`javascript
    import React from 'react';
    import { View, Text } from 'react-native';

    function App() {
      return (
        <View>
          <Text>Mirësevini në aplikacionin tonë!</Text>
        </View>
      );
    }

    export default App;
    \`\`\`
    
    Ky është një shembull i thjeshtë ku \`View\` dhe \`Text\` janë dy komponentë të përdorur për të krijuar një pamje dhe për të shfaqur tekstin në ekran.
    `,
  },
  {
    title: '📘 Stili dhe Layout në React Native',
    content: `Në React Native, stilimi i komponentëve mund të bëhet me JavaScript dhe CSS-like syntax. Kjo bëhet përmes funksionit \`StyleSheet\` që mundëson stilizimin e elementeve.

    Shembuj:
    \`\`\`javascript
    import React from 'react';
    import { View, Text, StyleSheet } from 'react-native';

    function App() {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Mirësevini në aplikacionin tonë!</Text>
        </View>
      );
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
      },
      text: {
        fontSize: 20,
        color: '#333',
      },
    });

    export default App;
    \`\`\`

    Ky shembull tregon se si mund të përdorim \`StyleSheet\` për të aplikuar stilizime si ngjyra, madhësia e fontit, dhe vendosja e elementeve në qendër të ekranit.
    `,
  },
  {
    title: '📘 Menaxhimi i Gjendjes me useState',
    content: `Një nga konceptet kryesore në React Native është përdorimi i gjendjes (state) për të menaxhuar ndryshimet dinamike në UI. Funksioni \`useState\` lejon krijimin e gjendjes dhe përditësimin e saj.

    Shembuj:
    \`\`\`javascript
    import React, { useState } from 'react';
    import { View, Text, TouchableOpacity } from 'react-native';

    function App() {
      const [count, setCount] = useState(0);

      const increment = () => setCount(count + 1);

      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 30 }}>Numri: {count}</Text>
          <TouchableOpacity onPress={increment}>
            <Text style={{ fontSize: 20, color: 'blue' }}>Rrit Numrin</Text>
          </TouchableOpacity>
        </View>
      );
    }

    export default App;
    \`\`\`

    Ky shembull përdor \`useState\` për të mbajtur një numër dhe për ta rritur atë kur përdoruesi klikon një buton.
    `,
  },
  {
    title: '📘 Navigimi në React Native me React Navigation',
    content: `Për të krijuar aplikacione me shumë ekrane, mund të përdorim bibliotekën \`react-navigation\`. Ky është një mjet i fuqishëm për të menaxhuar navigimin ndërmjet ekraneve.

    Shembuj:
    \`\`\`javascript
    import React from 'react';
    import { Button } from 'react-native';
    import { NavigationContainer } from '@react-navigation/native';
    import { createStackNavigator } from '@react-navigation/stack';

    const Stack = createStackNavigator();

    function HomeScreen({ navigation }) {
      return (
        <Button
          title="Shko në ekranin tjetër"
          onPress={() => navigation.navigate('Details')}
        />
      );
    }

    function DetailsScreen() {
      return (
        <Text>Ky është ekrani i detajeve!</Text>
      );
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

    Ky shembull tregon si mund të përdorim \`react-navigation\` për të kaluar nga një ekran në tjetrin duke përdorur butona dhe stack navigator.
    `,
  },
  {
    title: '📘 Përdorimi i Imazheve në React Native',
    content: `Për të shfaqur imazhe në aplikacionet React Native, mund të përdorni komponentin \`Image\`. Ky komponent mund të përdoret për të shfaqur imazhe të vendosura lokalisht ose nga URL.

    Shembuj:
    \`\`\`javascript
    import React from 'react';
    import { View, Image } from 'react-native';

    function App() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={{ uri: 'https://example.com/image.jpg' }}
            style={{ width: 200, height: 200 }}
          />
        </View>
      );
    }

    export default App;
    \`\`\`

    Ky shembull tregon se si mund të ngarkoni një imazh nga një URL dhe ta shfaqni atë në aplikacionin tuaj.
    `,
  },
];


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    alignItems: 'center',
  },
  backButton: {
    justifyContent:'center',
    alignSelf: 'flex-start',
    marginBottom: 10,
    backgroundColor: '#3498db',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  backButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: '#555',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  tutorialText: {
    fontSize: 12,
    color: '#444',
    textAlign: 'left',
  },
  menuContainer: {
    paddingVertical: 10,
  },
  menuItem: {
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 10,
    backgroundColor: '#3498db',
  },
  activeMenuItem: {
    backgroundColor: '#2980b9',
  },
  menuText: {
    fontSize: 14,
    color: '#fff',
  },
});
