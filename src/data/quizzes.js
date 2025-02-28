export const javascriptQuizzes = [
  {
    id: 'js1',
    title: 'JavaScript Basics',
    questions: [
      {
        question: 'How do you declare a variable in JavaScript?',
        options: ['var x;', 'variable x;', 'v x;', 'let x;'],
        correctAnswers: [0, 3],
        explanation: 'In JavaScript, you can declare variables using var, let, or const.'
      },
      {
        question: 'Which type of scope is created with the "var" keyword?',
        options: ['Block scope', 'Function scope', 'Global scope', 'Module scope'],
        correctAnswers: [1],
        explanation: 'Variables declared with var are function-scoped (or globally-scoped if declared outside a function).'
      },
      {
        question: 'What is the output of the following code: `console.log(typeof null);`',
        options: ['object', 'null', 'undefined', 'boolean'],
        correctAnswers: [0],
        explanation: 'In JavaScript, `typeof null` returns "object" due to a bug in the language.'
      },
      {
        question: 'What does the `typeof` operator return for an array?',
        options: ['object', 'array', 'undefined', 'null'],
        correctAnswers: [0],
        explanation: 'In JavaScript, arrays are considered objects, so `typeof []` returns "object".'
      },
      {
        question: 'Which of these is a primitive data type in JavaScript?',
        options: ['Object', 'Array', 'Function', 'String'],
        correctAnswers: [3],
        explanation: 'Primitive data types in JavaScript include `string`, `number`, `boolean`, `undefined`, and `null`.'
      },
      {
        question: 'Which method is used to parse a JSON string into an object?',
        options: ['JSON.parse()', 'JSON.stringify()', 'JSON.object()', 'JSON.parseObject()'],
        correctAnswers: [0],
        explanation: 'The `JSON.parse()` method is used to parse a JSON string and convert it into a JavaScript object.'
      },
      {
        question: 'What does the `===` operator do in JavaScript?',
        options: ['Compares two values for equality', 'Compares two values for equality and type', 'Assigns a value to a variable', 'None of the above'],
        correctAnswers: [1],
        explanation: 'The `===` operator compares both the value and the type of two operands.'
      }
    ]
  },
  {
    id: 'wd1',
    title: 'HTML Basics',
    questions: [
      {
        question: 'What does the `<!DOCTYPE>` declaration do?',
        options: ['Specifies the HTML version', 'Specifies the language of the page', 'Links external resources', 'Defines the main content of the page'],
        correctAnswers: [0],
        explanation: 'The `<!DOCTYPE>` declaration defines the document type and version of HTML being used.'
      },
      {
        question: 'Which tag is used to define an HTML document’s header?',
        options: ['<header>', '<head>', '<footer>', '<body>'],
        correctAnswers: [1],
        explanation: 'The `<head>` tag contains meta-information about the document, including title and links to stylesheets.'
      },
      {
        question: 'Which tag is used for inserting an image in HTML?',
        options: ['<img>', '<image>', '<src>', '<picture>'],
        correctAnswers: [0],
        explanation: 'The `<img>` tag is used to insert images in HTML.'
      },
      {
        question: 'Which tag is used to create a hyperlink in HTML?',
        options: ['<a>', '<link>', '<href>', '<url>'],
        correctAnswers: [0],
        explanation: 'The `<a>` tag is used to define a hyperlink in HTML.'
      },
      {
        question: 'What does the `<div>` tag represent?',
        options: ['A division or section in a document', 'An image element', 'A navigation link', 'A paragraph'],
        correctAnswers: [0],
        explanation: 'The `<div>` tag is used to group content together in a block-level container.'
      },
      {
        question: 'Which attribute is used to specify the destination URL for a link?',
        options: ['href', 'src', 'alt', 'action'],
        correctAnswers: [0],
        explanation: 'The `href` attribute is used to define the URL of the page the link goes to.'
      },
      {
        question: 'Which tag is used to create a list of items in HTML?',
        options: ['<ul>', '<ol>', '<li>', '<list>'],
        correctAnswers: [0, 1],
        explanation: 'The `<ul>` (unordered list) or `<ol>` (ordered list) tags are used to create lists, with `<li>` being used for each list item.'
      }
    ]
  },
  {
    id: 'wd2',
    title: 'CSS Styling',
    questions: [
      {
        question: 'Which property is used to change the color of text in CSS?',
        options: ['color', 'text-color', 'font-color', 'text-style'],
        correctAnswers: [0],
        explanation: 'The `color` property in CSS is used to set the color of text.'
      },
      {
        question: 'What is the default value of the `position` property in CSS?',
        options: ['relative', 'absolute', 'fixed', 'static'],
        correctAnswers: [3],
        explanation: 'The default value for `position` is `static`, meaning the element is positioned according to the normal document flow.'
      },
      {
        question: 'Which CSS property is used to control the space between words?',
        options: ['letter-spacing', 'word-spacing', 'line-height', 'text-indent'],
        correctAnswers: [1],
        explanation: 'The `word-spacing` property controls the space between words in CSS.'
      },
      {
        question: 'Which property is used to create space between an element’s content and its border?',
        options: ['margin', 'padding', 'border-spacing', 'spacing'],
        correctAnswers: [1],
        explanation: 'The `padding` property is used to create space between an element’s content and its border.'
      },
      {
        question: 'What is the correct CSS syntax to change the background color of a page?',
        options: ['background-color: #ffffff;', 'bgcolor: #ffffff;', 'background: #ffffff;', 'color: #ffffff;'],
        correctAnswers: [0],
        explanation: 'The correct syntax is `background-color: #ffffff;` to change the background color.'
      },
      {
        question: 'Which property is used to change the font size of text in CSS?',
        options: ['font-size', 'text-size', 'size', 'font-style'],
        correctAnswers: [0],
        explanation: 'The `font-size` property is used to specify the size of text in CSS.'
      },
      {
        question: 'Which CSS rule can you use to make a text bold?',
        options: ['font-weight: bold;', 'font-style: bold;', 'text-weight: bold;', 'weight: bold;'],
        correctAnswers: [0],
        explanation: 'The `font-weight` property is used to make text bold in CSS.'
      }
    ]
  },
  {
    id: 'rn1',
    title: 'React Native Basics',
    questions: [
      {
        question: 'What does the `useState` hook do in React Native?',
        options: ['Defines a state variable', 'Defines a component', 'Updates the UI', 'Handles API requests'],
        correctAnswers: [0],
        explanation: 'The `useState` hook in React allows you to add state to functional components in React Native.'
      },
      {
        question: 'Which component is used to create a button in React Native?',
        options: ['<Button>', '<TouchableOpacity>', '<Pressable>', '<Link>'],
        correctAnswers: [0, 1],
        explanation: 'Both `<Button>` and `<TouchableOpacity>` can be used to create buttons in React Native. `<TouchableOpacity>` gives more flexibility in styling.'
      },
      {
        question: 'What is the purpose of the `FlatList` component in React Native?',
        options: ['Displays a list of items', 'Renders a single item', 'Creates a layout grid', 'Maps data to a UI component'],
        correctAnswers: [0],
        explanation: '`FlatList` is used to efficiently render a long list of items in React Native, optimizing performance.'
      },
      {
        question: 'How do you apply styles in React Native?',
        options: ['Using inline styles', 'Using CSS classes', 'Using StyleSheet.create()', 'Using a separate .css file'],
        correctAnswers: [2],
        explanation: 'In React Native, styles are typically applied using `StyleSheet.create()` to define the styles as JavaScript objects.'
      },
      {
        question: 'Which property is used to make a component fill the screen in React Native?',
        options: ['flex', 'fill', 'height', 'width'],
        correctAnswers: [0],
        explanation: 'The `flex` property is used in React Native to define how a component should expand to fill the available space.'
      },
      {
        question: 'What is the purpose of the `useEffect` hook in React Native?',
        options: ['To perform side effects in components', 'To set the initial state', 'To bind event listeners', 'To handle form input'],
        correctAnswers: [0],
        explanation: 'The `useEffect` hook allows you to perform side effects (e.g., fetching data or subscribing to events) in your functional components.'
      },
      {
        question: 'Which component is used for navigation between screens in React Native?',
        options: ['<Navigator>', '<StackNavigator>', '<Screen>', '<TabNavigator>'],
        correctAnswers: [1, 3],
        explanation: 'In React Native, navigation between screens is often handled by libraries like `React Navigation`, using components like `<StackNavigator>` or `<TabNavigator>`.'
      }
    ]
  }
];
