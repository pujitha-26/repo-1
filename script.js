const questions = {
    c: [
        { question: "What is the size of int in C?", options: ["2 bytes", "4 bytes", "8 bytes", "Depends on compiler"], answer: "4 bytes" },
        { question: "Which symbol is used for comments in C?", options: ["//", "/* */", "#", "a&b both"], answer: "a&b both" },
        { question: "What is the file extension of a C source file?", options: [".c", ".cpp", ".cs", ".java"], answer: ".c" },
        { question: "Which function allocates memory dynamically?", options: ["malloc", "calloc", "realloc", "free"], answer: "malloc" },
        { question: "What does 'return 0;' in main() indicate?", options: ["Successful termination", "Error", "Unused", "Loop termination"], answer: "Successful termination" },
        { question: "How do you denote a single-line comment in C?", options: ["//", "/*", "#", "<!--"], answer: "//" },
        { question: "How do you declare an integer variable in C?", options: ["int num;", "integer num;", "int: num;", "var num;"], answer: "int num;" },
        { question: "Which keyword exits a loop in C?", options: ["break", "exit", "continue", "stop"], answer: "break" },
        { question: "How do you include a user-defined header file in C?", options: ["#include \"myheader.h\"", "#include <myheader.h>", "include \"myheader.h\"", "#import \"myheader.h\""], answer: "#include \"myheader.h\"" },
        { question: "Which function compares two strings in C?", options: ["strcmp", "strcomp", "compare", "strncmp"], answer: "strcmp" },
        { question: "What is the size of a char data type in C?", options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"], answer: "1 byte" },
        { question: "Which loop always executes at least once in C?", options: ["do-while", "for", "while", "if"], answer: "do-while" },
        { question: "What does the 'void' keyword indicate in a function declaration?", options: ["No return value", "Returns an integer", "Returns a pointer", "Returns a float"], answer: "No return value" },
        { question: "How do you declare a constant variable in C?", options: ["const int num = 10;", "#define num 10", "constant int num = 10;", "int const num = 10;"], answer: "const int num = 10;" },
        { question: "Which header file is used for dynamic memory functions in C?", options: ["stdlib.h", "stdio.h", "string.h", "math.h"], answer: "stdlib.h" },
        { question: "What is a pointer in C?", options: ["Variable holding memory address", "Variable storing a number", "Variable storing text", "Type of function"], answer: "Variable holding memory address" },
        { question: "Which operator is used to access the value at a pointer's address in C?", options: ["*", "&", "%", "#"], answer: "*" },
        { question: "Write a single-line comment in C.", options: ["// Comment", "/* Comment */", "<!-- Comment -->", "# Comment"], answer: "// Comment" },
        { question: "Which of the following is a valid identifier in C?", options: ["_myVar", "2myVar", "my-var", "my var"], answer: "_myVar" },
        { question: "How do you print \"Hello, World\" in C?", options: ["printf(\"Hello, World\");", "Console.WriteLine(\"Hello, World\");", "System.out.println(\"Hello, World\");", "echo \"Hello, World\";"], answer: "printf(\"Hello, World\");" }
      // Add more C questions
    ],
    cpp: [
        { question: "Who created C++?", options: ["Dennis Ritchie", "James Gosling", "Bjarne Stroustrup", "Guido van Rossum"], answer: "Bjarne Stroustrup" },
        { question: "What is the file extension for a C++ source file?", options: [".cpp", ".c", ".cs", ".java"], answer: ".cpp" },
        { question: "Which header is used for I/O streams in C++?", options: ["iostream", "stdio.h", "io.h", "stream"], answer: "iostream" },
        { question: "Which operator is used for scope resolution in C++?", options: ["::", ".", "->", "%"], answer: "::" },
        { question: "Which keyword is used to create a class in C++?", options: ["class", "struct", "object", "function"], answer: "class" },
        { question: "What is the standard namespace used in C++?", options: ["std", "system", "c++", "main"], answer: "std" },
        { question: "Which operator allocates memory dynamically in C++?", options: ["new", "malloc", "create", "alloc"], answer: "new" },
        { question: "Which method deallocates memory allocated with new in C++?", options: ["delete", "remove", "free", "dispose"], answer: "delete" },
        { question: "What does OOP stand for in C++?", options: ["Object-Oriented Programming", "Out Of Print", "Only One Person", "Open Oriented Programming"], answer: "Object-Oriented Programming" },
        { question: "Which of these is a C++ access specifier?", options: ["public", "private", "protected", "All of the above"], answer: "All of the above" },
        { question: "What is the correct way to include a standard library header in C++?", options: ["#include <iostream>", "include \"iostream\"", "import iostream", "using namespace iostream"], answer: "#include <iostream>" },
        { question: "Which operator concatenates std::string objects?", options: ["+", "&", "concat", "append"], answer: "+" },
        { question: "What is the default access specifier for members of a C++ class?", options: ["private", "public", "protected", "none"], answer: "private" },
        { question: "Which function is automatically called when an object is created in C++?", options: ["Constructor", "Destructor", "Initializer", "None"], answer: "Constructor" },
        { question: "Which function is automatically called when an object is destroyed in C++?", options: ["Destructor", "Constructor", "Deconstructor", "Finalizer"], answer: "Destructor" },
        { question: "Which of the following is a key feature of C++?", options: ["Inheritance", "Polymorphism", "Encapsulation", "All of the above"], answer: "All of the above" },
        { question: "How do you declare a reference variable in C++?", options: ["int &ref = var;", "int ref = &var;", "int* ref = &var;", "reference int ref = var;"], answer: "int &ref = var;" },
        { question: "What is operator overloading in C++?", options: ["Custom behavior for operators", "Not allowed", "A type of recursion", "None of the above"], answer: "Custom behavior for operators" },
        { question: "Which keyword is used to inherit a class in C++?", options: ["extends", "inherits", ": public", "implements"], answer: ": public" },
        { question: "Which function is used to output data in C++?", options: ["cout", "printf", "print", "echo"], answer: "cout" }
        // Add more C++ questions
    ],
    java: [
        { question: "What is Java mainly used for?", options: ["Web Development", "Data Science", "App Development", "All of the above"], answer: "App Development" },
        { question: "What is the file extension for a Java source file?", options: [".java", ".class", ".js", ".txt"], answer: ".java" },
        { question: "Which keyword is used to define a class in Java?", options: ["class", "Class", "struct", "def"], answer: "class" },
        { question: "Which method is the entry point of a Java program?", options: ["main", "start", "init", "run"], answer: "main" },
        { question: "What does JVM stand for?", options: ["Java Virtual Machine", "Java Variable Method", "Java Vendor Machine", "Java Visual Model"], answer: "Java Virtual Machine" },
        { question: "Which package is automatically imported in every Java program?", options: ["java.lang", "java.util", "java.io", "java.net"], answer: "java.lang" },
        { question: "How do you print a message to the console in Java?", options: ["System.out.println", "console.log", "printf", "echo"], answer: "System.out.println" },
        { question: "What is inheritance in Java?", options: ["A mechanism where one class acquires properties of another", "Copying code", "Data encapsulation", "A loop"], answer: "A mechanism where one class acquires properties of another" },
        { question: "Which keyword is used for inheritance in Java?", options: ["extends", "implements", "inherits", "super"], answer: "extends" },
        { question: "What is encapsulation in Java?", options: ["Hiding internal details", "Inheritance", "Overloading", "Polymorphism"], answer: "Hiding internal details" },
        { question: "Which keyword is used to implement an interface in Java?", options: ["implements", "extends", "interface", "override"], answer: "implements" },
        { question: "What is the correct way to create an object in Java?", options: ["new MyClass()", "MyClass object = MyClass()", "create MyClass()", "object MyClass = new MyClass()"], answer: "new MyClass()" },
        { question: "Which data type is used for true/false values in Java?", options: ["boolean", "int", "String", "char"], answer: "boolean" },
        { question: "What is the correct syntax to declare a variable in Java?", options: ["int num = 10;", "num int = 10;", "int: num = 10;", "variable int num = 10;"], answer: "int num = 10;" },
        { question: "Which loop is used to iterate over arrays using a simplified syntax in Java?", options: ["for-each loop", "do-while", "while", "if"], answer: "for-each loop" },
        { question: "What is a constructor in Java?", options: ["A special method to initialize objects", "A regular method", "A field", "A variable"], answer: "A special method to initialize objects" },
        { question: "Which keyword is used to refer to the current object in Java?", options: ["this", "self", "current", "obj"], answer: "this" },
        { question: "What is method overloading in Java?", options: ["Multiple methods with the same name but different parameters", "Same method multiple times", "Overriding methods", "None of the above"], answer: "Multiple methods with the same name but different parameters" },
        { question: "Which exception is thrown when dividing by zero in Java?", options: ["ArithmeticException", "NullPointerException", "IOException", "ArrayIndexOutOfBoundsException"], answer: "ArithmeticException" },
        { question: "What is the purpose of the 'final' keyword in Java?", options: ["To define constants", "To finalize objects", "To call a super constructor", "None of the above"], answer: "To define constants" }
      // Add more Java questions
    ],
    python: [
        { question: "What is Python?", options: ["Programming Language", "Snake", "Game", "IDE"], answer: "Programming Language" },
        { question: "Which file extension is used for Python files?", options: [".py", ".java", ".c", ".js"], answer: ".py" },
        { question: "What is the correct syntax to print in Python 3?", options: ["print(\"Hello\")", "System.out.println(\"Hello\")", "Console.WriteLine(\"Hello\")", "echo \"Hello\""], answer: "print(\"Hello\")" },
        { question: "Which keyword defines a function in Python?", options: ["def", "function", "fun", "define"], answer: "def" },
        { question: "What is a list in Python?", options: ["A collection of ordered items", "A function", "A variable", "A dictionary"], answer: "A collection of ordered items" },
        { question: "How do you create a comment in Python?", options: ["#", "//", "<!--", "%%"], answer: "#" },
        { question: "What does PEP stand for?", options: ["Python Enhancement Proposal", "Python Execution Process", "Programming Enhancement Plan", "Python Entry Protocol"], answer: "Python Enhancement Proposal" },
        { question: "Which data type represents textual data in Python?", options: ["str", "int", "list", "dict"], answer: "str" },
        { question: "What is the output of len([1, 2, 3]) in Python?", options: ["3", "1", "2", "Error"], answer: "3" },
        { question: "Which keyword is used for conditional statements in Python?", options: ["if", "when", "switch", "case"], answer: "if" },
        { question: "How do you start a for loop in Python?", options: ["for item in iterable:", "foreach(item in iterable):", "loop item in iterable:", "for(item in iterable)"], answer: "for item in iterable:" },
        { question: "What does the 'import' keyword do in Python?", options: ["Imports modules", "Exports modules", "Deletes modules", "Creates modules"], answer: "Imports modules" },
        { question: "Which method is used to add an item to a list in Python?", options: ["append", "add", "push", "insert"], answer: "append" },
        { question: "What is a tuple in Python?", options: ["An immutable list", "A mutable list", "A dictionary", "A set"], answer: "An immutable list" },
        { question: "Which built-in function returns the maximum value from an iterable in Python?", options: ["max", "min", "highest", "top"], answer: "max" },
        { question: "What does the 'self' keyword represent in Python class methods?", options: ["The instance of the class", "A local variable", "A global variable", "None"], answer: "The instance of the class" },
        { question: "Which keyword is used to handle exceptions in Python?", options: ["try", "catch", "handle", "exception"], answer: "try" },
        { question: "How do you define a class in Python?", options: ["class ClassName:", "def ClassName:", "function ClassName:", "new ClassName:"], answer: "class ClassName:" },
        { question: "What is the output of 3 * \"Hello\" in Python?", options: ["HelloHelloHello", "Error", "Hello", "3"], answer: "HelloHelloHello" },
        { question: "Which of the following is a Python framework for web development?", options: ["Django", "Rails", "Laravel", "Spring"], answer: "Django" }
      // Add more Python questions
    ],
    web: [
        { question: "What does HTML stand for?", options: ["HyperText Markup Language", "HighText Machine Language", "HyperTransfer Markup Language", "None of these"], answer: 0 },
        { question: "What is the purpose of CSS in web development?", options: ["Styling web pages", "Programming logic", "Database management", "Server configuration"], answer: "Styling web pages" },
        { question: "Which HTML tag is used to create a hyperlink?", options: ["<a>", "<link>", "<href>", "<hyperlink>"], answer: "<a>" },
        { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"], answer: "Cascading Style Sheets" },
        { question: "Which property is used to change the background color in CSS?", options: ["background-color", "color", "bg-color", "fill"], answer: "background-color" },
        { question: "What is JavaScript primarily used for?", options: ["Adding interactivity", "Styling", "Data storage", "Server code"], answer: "Adding interactivity" },
        { question: "Which HTML tag is used to embed JavaScript code?", options: ["<script>", "<js>", "<code>", "<javascript>"], answer: "<script>" },
        { question: "What does DOM stand for in web development?", options: ["Document Object Model", "Data Object Model", "Display Object Model", "Document Orientation Model"], answer: "Document Object Model" },
        { question: "What is the purpose of the <head> tag in HTML?", options: ["Contains meta-information", "Displays content", "Styles the page", "Links JavaScript"], answer: "Contains meta-information" },
        { question: "Which CSS property is used to change the text color?", options: ["color", "font-color", "text-color", "style"], answer: "color" },
        { question: "What does API stand for?", options: ["Application Programming Interface", "Applied Programming Internet", "Advanced Programming Interface", "Application Program Internet"], answer: "Application Programming Interface" },
        { question: "What is responsive web design?", options: ["Design that adapts to different screen sizes", "Design that uses flash", "Static design", "None of the above"], answer: "Design that adapts to different screen sizes" },
        { question: "Which HTML attribute is used to define inline styles?", options: ["style", "class", "id", "inline"], answer: "style" },
        { question: "What does JSON stand for?", options: ["JavaScript Object Notation", "Java Source Open Network", "JavaScript Open Notation", "Java Serialized Object Notation"], answer: "JavaScript Object Notation" },
        { question: "Which protocol is used to securely transfer web pages?", options: ["HTTPS", "HTTP", "FTP", "SMTP"], answer: "HTTPS" },
        { question: "What is the purpose of the <meta> tag in HTML?", options: ["Provides metadata about the document", "Displays text", "Adds images", "Links to external pages"], answer: "Provides metadata about the document" },
        { question: "Which CSS property controls the layout of grid items?", options: ["grid-template-columns", "display", "flex", "position"], answer: "grid-template-columns" },
        { question: "What does SEO stand for?", options: ["Search Engine Optimization", "Social Engine Optimization", "Standard Engine Output", "Search Electronic Operation"], answer: "Search Engine Optimization" },
        { question: "Which of the following is a version control system for web development?", options: ["Git", "SVN", "Mercurial", "All of the above"], answer: "All of the above" },
        { question: "what is the smallest header in html by default?",options: ["h1","h2","h6","h4"],answer:"h6" }
      // Add more Web Tech questions
    ],
    cyber: [
        { question: "What does VPN stand for?", options: ["Virtual Private Network", "Very Private Network", "Verified Personal Network", "None of these"], answer: "Virtual Private Network" },
        { question: "What is the primary goal of cyber security?", options: ["Protecting systems and networks", "Developing software", "Managing databases", "Designing websites"], answer: "Protecting systems and networks" },
        { question: "What does a firewall do in cyber security?", options: ["Monitors and controls network traffic", "Encrypts data", "Scans for viruses", "Prevents physical access"], answer: "Monitors and controls network traffic" },
        { question: "What does VPN stand for?", options: ["Virtual Private Network", "Virtual Public Network", "Virtual Protected Network", "Verified Private Network"], answer: "Virtual Private Network" },
        { question: "What is phishing?", options: ["Fraudulent attempt to obtain sensitive info", "A type of virus", "A network protocol", "A security patch"], answer: "Fraudulent attempt to obtain sensitive info" },
        { question: "Which is a strong password practice?", options: ["Mix of letters, numbers, symbols", "Using your birthdate", "Using common words", "Using 'password'"], answer: "Mix of letters, numbers, symbols" },
        { question: "What does encryption do?", options: ["Converts data into a secure format", "Deletes data", "Compresses data", "Backs up data"], answer: "Converts data into a secure format" },
        { question: "What is malware?", options: ["Malicious software", "Hardware malfunction", "A type of firewall", "A secure program"], answer: "Malicious software" },
        { question: "Which protocol is used for secure communication over the Internet?", options: ["HTTPS", "HTTP", "FTP", "SMTP"], answer: "HTTPS" },
        { question: "What is a DDoS attack?", options: ["Distributed Denial of Service attack", "Direct Denial of Service", "Dynamic Denial of Service", "Distributed Data Overload Service"], answer: "Distributed Denial of Service attack" },
        { question: "What does two-factor authentication provide?", options: ["Extra security layer", "Faster login", "Simpler password", "Automated login"], answer: "Extra security layer" },
        { question: "What is the purpose of antivirus software?", options: ["Detect and remove malware", "Increase system speed", "Update drivers", "Format disks"], answer: "Detect and remove malware" },
        { question: "What does the term 'zero-day' refer to?", options: ["A vulnerability unknown to vendors", "A day with zero incidents", "A type of encryption", "A backup plan"], answer: "A vulnerability unknown to vendors" },
        { question: "Which term refers to unauthorized access to a computer system?", options: ["Hacking", "Surfing", "Programming", "Debugging"], answer: "Hacking" },
        { question: "What is the role of a penetration test?", options: ["Identify security vulnerabilities", "Build a firewall", "Encrypt data", "Optimize network speed"], answer: "Identify security vulnerabilities" },
        { question: "What is social engineering in cyber security?", options: ["Manipulating people to divulge confidential info", "Building secure networks", "Developing encryption algorithms", "None of the above"], answer: "Manipulating people to divulge confidential info" },
        { question: "Which method is considered secure for data transmission?", options: ["End-to-end encryption", "Plain text email", "Unencrypted FTP", "Open Wi-Fi networks"], answer: "End-to-end encryption" },
        { question: "What is a botnet?", options: ["A network of compromised computers", "A network of secure devices", "A type of antivirus", "A firewall system"], answer: "A network of compromised computers" },
        { question: "What is the best practice for software updates in terms of security?", options: ["Regular updates", "Never update", "Update once a year", "Only update when necessary"], answer: "Regular updates" },
        { question: "What is multi-factor authentication?", options: ["A security process requiring multiple forms of verification", "A single password", "Just a PIN", "Only biometric authentication"], answer: "A security process requiring multiple forms of verification" }
      // Add more Cyber Security questions
    ]
};
let currentSubject = localStorage.getItem("selectedSubject");
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswerIndex = null;
let timerInterval;
const totalTime = 20; // 20 seconds per question

document.addEventListener("DOMContentLoaded", function () {
    if (!currentSubject) {
        window.location.href = "subjects.html";
        return;
    }
    document.getElementById("quiz-title").innerText = `Quiz on ${currentSubject.toUpperCase()}`;
    loadQuestion();
});

function loadQuestion() {
    clearInterval(timerInterval); // Reset timer

    const quizData = questions[currentSubject];

    if (currentQuestionIndex >= quizData.length) {
        localStorage.setItem("finalScore", score); // ✅ Save exact final score
        window.location.href = "result.html";
        return;
    }

    const questionData = quizData[currentQuestionIndex];
    document.getElementById("question-text").innerText = questionData.question;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = '';

    selectedAnswerIndex = null; // Reset selection

    questionData.options.forEach((option, i) => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.classList.add("option-btn");
        btn.onclick = () => selectAnswer(i, btn);
        optionsContainer.appendChild(btn);
    });

    document.getElementById("next-btn").disabled = true; // Disable Next button

    startTimer();
}

function startTimer() {
    let timeLeft = totalTime;
    const timerDisplay = document.getElementById("timer");

    if (!timerDisplay) {
        console.warn("Timer element missing in HTML!");
        return;
    }

    timerDisplay.innerText = `Time Left: ${timeLeft}s`;

    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.innerText = `Time Left: ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            moveToNextQuestion(false); // ✅ Move to next if time runs out
        }
    }, 1000);
}

function selectAnswer(selectedIndex, btn) {
    if (selectedAnswerIndex !== null) return; // Prevent changing answer

    selectedAnswerIndex = selectedIndex;
    btn.classList.add("selected");

    clearInterval(timerInterval); // ✅ Stop timer

    const correctAnswer = questions[currentSubject][currentQuestionIndex].answer;
    if (typeof correctAnswer === 'string') {
        if (btn.innerText.trim().toLowerCase() === correctAnswer.trim().toLowerCase()) {
            score++; // ✅ Update score correctly
        }
    } else {
        if (selectedIndex === correctAnswer) {
            score++; // ✅ Update score correctly
        }
    }

    document.getElementById("next-btn").disabled = false; // Enable Next button
}

function moveToNextQuestion(userClicked = true) {
    currentQuestionIndex++;

    if (currentQuestionIndex >= questions[currentSubject].length) {
        localStorage.setItem("finalScore", score); // ✅ Save the exact final score
    }

    loadQuestion();
}

function nextQuestion() {
    moveToNextQuestion(true);
}
