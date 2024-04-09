const reactQuestions = [
    {
        id: 'q1',
        text: 'Which of the following definitions best describes React.js?',
        answers: [
            'A library to build user interfaces with help of declarative code.',
            'A library for managing state in web applications.',
            'A framework to build user interfaces with help of imperative code.',
            'A library used for building mobile applications only.',
        ],
    },
    {
        id: 'q2',
        text: 'What purpose do React hooks serve?',
        answers: [
            'Enabling the use of state and other React features in functional components.',
            'Creating responsive layouts in React applications.',
            'Handling errors within the application.',
            'Part of the Redux library for managing global state.',
        ],
    },
    {
        id: 'q3',
        text: 'Can you identify what JSX is?',
        answers: [
            'A JavaScript extension that adds HTML-like syntax to JavaScript.',
            'A JavaScript library for building dynamic user interfaces.',
            'A specific HTML version that was explicitly created for React.',
            'A tool for making HTTP requests in a React application.',
        ],
    },
    {
        id: 'q4',
        text: 'What is the most common way to create a component in React?',
        answers: [
            'By defining a JavaScript function that returns a renderable value.',
            'By defining a custom HTML tag in JavaScript.',
            'By creating a file with a .jsx extension.',
            'By using the "new" keyword followed by the component name.',
        ],
    },
    {
        id: 'q5',
        text: 'What does the term "React state" imply?',
        answers: [
            'An object in a component that holds values and may cause the component to render on change.',
            'The lifecycle phase a React component is in.',
            'The overall status of a React application, including all props and components.',
            'A library for managing global state in React applications.',
        ],
    },
    {
        id: 'q6',
        text: 'How do you typically render list content in React apps?',
        answers: [
            'By using the map() method to iterate over an array of data and returning JSX.',
            'By using the for() loop to iterate over an array of data and returning JSX.',
            'By using the forEach() method to iterate over an array of data and returning JSX.',
            'By using the loop() method to iterate over an array of data and returning JSX.',
        ],
    },
    {
        id: 'q7',
        text: 'Which approach can NOT be used to render content conditionally?',
        answers: [
            'Using a the #if template syntax.',
            'Using a ternary operator.',
            'Using the && operator.',
            'Using an if-else statement.',
        ],
    },
];


const javaQuestions = [
    {
        id: '1',
        text: 'What is Java?',
        answers: [
            'A high-level, object-oriented programming language.',
            'A database management system.',
            'A version control system.',
            'A markup language for web development.',
        ],
    },
    {
        id: '2',
        text: 'Which keyword is used to define a constant in Java?',
        answers: [
            'final',
            'const',
            'static',
            'let',
        ],
    },
    {
        id: '3',
        text: 'What is the purpose of the "public static void main(String[] args)" method in Java?',
        answers: [
            'To serve as the entry point of a Java application.',
            'To define a new class in Java.',
            'To perform mathematical calculations.',
            'To handle HTTP requests.',
        ],
    },
    {
        id: '4',
        text: 'Which data type is used to store whole numbers in Java?',
        answers: [
            'int',
            'float',
            'String',
            'boolean',
        ],
    },
    {
        id: '5',
        text: 'What is inheritance in Java?',
        answers: [
            'The ability of a class to inherit methods and properties from another class.',
            'A method of accessing elements in an array.',
            'A way to loop through a collection of objects.',
            'A type of exception in Java.',
        ],
    },
];


const pythonQuestions = [
    {
        id: '1',
        text: 'What type of language is Python?',
        answers: [
            'A high-level, interpreted programming language.',
            'A markup language for web development.',
            'A version control system.',
            'A database management system.',
        ],
    },
    {
        id: '2',
        text: 'Which keyword is used to define a function in Python?',
        answers: [
            'def',
            'function',
            'define',
            'fun',
        ],
    },
    {
        id: '3',
        text: 'What is the purpose of indentation in Python?',
        answers: [
            'To define the structure and scope of code blocks.',
            'To comment out code.',
            'To import external libraries.',
            'To declare variables.',
        ],
    },
    {
        id: '4',
        text: 'Which data type is used to represent a sequence of characters in Python?',
        answers: [
            'str',
            'int',
            'list',
            'float',
        ],
    },
    {
        id: '5',
        text: 'What is a dictionary in Python?',
        answers: [
            'An unordered collection of key-value pairs.',
            'A data structure for storing elements in a specific order.',
            'A method for sorting lists.',
            'A type of loop in Python.',
        ],
    },
];

const javascriptQuestions = [
    {
        id: '1',
        text: 'What is the purpose of JavaScript?',
        answers: [
            'To add interactivity and dynamic behavior to web pages.',
            'To style web pages using CSS.',
            'To query databases.',
            'To manage server-side logic.',
        ],
    },
    {
        id: '2',
        text: 'Which statement best describes a JavaScript variable?',
        answers: [
            'A container used to store data values.',
            'A function that performs a specific task.',
            'An HTML element used for data display.',
            'A conditional statement used for decision-making.',
        ],
    },
    {
        id: '3',
        text: 'What is the role of a JavaScript function?',
        answers: [
            'To define reusable blocks of code that perform a specific task.',
            'To declare CSS styles.',
            'To manipulate the structure of HTML elements.',
            'To import external libraries into a web page.',
        ],
    },
    {
        id: '4',
        text: 'How do you write a comment in JavaScript?',
        answers: [
            'By using // for single-line comments or /* */ for multi-line comments.',
            'By using <!-- --> to enclose the comment.',
            'By using # to start a comment.',
            'By using "comment" as a keyword.',
        ],
    },
    {
        id: '5',
        text: 'Which data type is used to represent textual data in JavaScript?',
        answers: [
            'String',
            'Number',
            'Boolean',
            'Array',
        ],
    },
    {
        id: '6',
        text: 'What does the term "DOM" stand for in the context of JavaScript?',
        answers: [
            'Document Object Model',
            'Data Object Model',
            'Dynamic Operation Model',
            'Document Order Management',
        ],
    },
    {
        id: '7',
        text: 'How would you select an HTML element with the id "demo" using JavaScript?',
        answers: [
            'document.getElementById("demo")',
            'document.getElementByClass("demo")',
            'document.select("demo")',
            'document.find("#demo")',
        ],
    },
];


export { javaQuestions, pythonQuestions, reactQuestions, javascriptQuestions };