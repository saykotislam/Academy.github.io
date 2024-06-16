// Your quiz questions and answers here
const quizData = [
    {
        id: 1,
        question: "তোমার প্রিয় পাঠ্য বিষয় ",
        options: [
            { text: "বিজ্ঞান", score: 10 },
            { text: "সাহিত্য", score: 10 },
            { text: "ইতিহাস", score: 10 },
            { text: "কোনটিই নয়", score: -5 }
        ]
    },
    {
        id: 2,
        question: "তোমার প্রিয় কাজ",
        options: [
            { text: "বই পড়া", score: 10 },
            { text: "স্পোর্টস", score: 10 },
            { text: "ডিজিটাল জগতে ভ্রমন ", score: -5 },
            { text: "খাওয়া ও ঘুম ", score: -5 }
        ]
    }
];


const additionalQuizData = [
    //New Questions
    {
        id: 32,
        question: "অবসর সময়ে কোন কাজটি করতে তোমার ভালো লাগে",
        options: [
            { text: "ছবি আকা,নতুন কিছু লেখালেখি,কিছু একটা উদ্ভাবন করার চেষ্টা বা এইরকম কিছু ", score: 0 },
            { text: "কাছে বা দূরে বেড়াতে যাওয়া, বন্ধুদের নিয়ে খেলাধুলা করা", score: 0 },
            { text: "বিভিন্ন প্রকার বই বা ম্যাগাজিন পড়া কিংবা বিভিন্ন ভ্রমণ স্থান সম্পর্কে জানার চেষ্টা", score: 0 },
            { text: "মজাদার খাবারের সন্ধান করা কিংবা সেগুলো বানানোর চেষ্টা ", score: 0 }
        ]
    },
    {
        id: 33,
        question: "কোন বিষয়গুলো তোমাকে সবথেকে বেশি আনন্দিত করে",
        options: [
            { text: "কোন বিষয়গুলো তোমাকে সবথেকে বেশি আনন্দিত করে", score: 0 },
            { text: "পাজল সমাধান, বুদ্ধির খেলা, কিংবা জটিল কোন সমস্যা সমাধানের মত কিছু করতে পারলে", score: 0 },
            { text: "পরিবার ও বন্ধুদের সাথে আলোচনা করে উপযুক্ত একটি সিদ্ধান্ত নিই ", score: 0 },
            { text: "সমস্যা গুলো মেনে নিয়ে চলি এবং আস্তে ধীরে নানা পদ্ধতিতে সেই টির সমাধান ", score: 0 }
        ]
    }
];

// Merge the original quiz data with the additional quiz data
const mergedQuizData = [...quizData, ...additionalQuizData];
const quizContainer = document.getElementById('quiz');
const breakContainer = document.getElementById('break');
const footer = document.getElementById('footer');
const timeDisplay = document.getElementById('time');
const questionNumberDisplay = document.getElementById('current-question');

const userAnswers = []; //array to store user's selected answers

let currentQuestion = 0;
let round = 1;

let i = 0;

function loadQuestion() {
    const currentQuizData = mergedQuizData[currentQuestion];
    const options = currentQuizData.options.map((option, index) => {
        return `<div class="option" onclick="checkAnswer(${index})">${option.text}</div>`;
    }).join('');

    quizContainer.innerHTML = `
        <div class="question">${currentQuizData.question}</div>
        <div class="options">${options}</div>
    `;
    questionNumberDisplay.textContent = currentQuestion + 1;
}

// Function to start timer
let isTimeRunning = true;
function startTimer(time) {
    const intervalId = setInterval(() => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        timeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        time--; // Decrease time by 1 second
        if (time < 0) {
            clearInterval(intervalId); // Stop the timer when it reaches 0
            showResult();
        }
    }, 1000);
}

// Function to check answer
function checkAnswer(answerIndex) {
    userAnswers[currentQuestion] = answerIndex; // Storeselected answer
    currentQuestion++;
    if (currentQuestion < mergedQuizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// Function to start the quiz
function startQuiz() {
    document.querySelector('.landing-page').style.display = 'none'; // Hide landing page
    document.querySelector('.wrapper').style.display = 'block'; // Show quiz section
    loadQuestion(); // Load the first question
    startTimer(600); // Start the timer
}

// Function to handle form submission and show landing page
function showLandingPage(event) {
    event.preventDefault(); // Prevent form submission
    const introSection = document.querySelector('.intro-section');
    introSection.style.display = 'none'; // Hide intro section
    const landingPage = document.querySelector('.landing-page');
    landingPage.style.display = 'flex'; // Show landing page
}
// Add an event listener to the form for form submission
document.getElementById('userInfoForm').addEventListener('submit', showLandingPage);

// Function to calculate score for a question
function calculateScore(questionIndex) {
    const selectedOptionIndex = userAnswers[questionIndex];
    const selectedOption = mergedQuizData[questionIndex].options[selectedOptionIndex];
    return selectedOption?.score;
}

// Function to calculate score based on selected options from additional questions
function calculateFavoredOccupation() {
    const optionCounts = {};
    additionalQuizData.forEach(question => {
        const selectedOptionIndex = userAnswers[question.id - 1]; // Question ID starts from 1
        if (selectedOptionIndex !== undefined) {
            const selectedOption = question.options[selectedOptionIndex];
            optionCounts[selectedOption.text] = (optionCounts[selectedOption.text] || 0) + 1;
        }
    });

    // Find the most selected option
    let maxOptionCount = 0;
    let favoredOption = '';
    for (const optionText in optionCounts) {
        if (optionCounts[optionText] > maxOptionCount) {
            maxOptionCount = optionCounts[optionText];
            favoredOption = optionText;
        }
    }

    return favoredOption;
}


function showResult() {

    document.getElementById('footer').style.display = 'none';
    let totalScore = 0;
    for (let i = 0; i < mergedQuizData.length; i++) {
        totalScore += calculateScore(i) ? calculateScore(i) : 0;
    }

    const optionClickCounts = {};
    additionalQuizData.forEach(question => {
        const selectedOptionIndex = userAnswers[question.id - 1]; // Question ID starts from 1
        if (selectedOptionIndex !== undefined) {
            const selectedOption = question.options[selectedOptionIndex];
            optionClickCounts[selectedOption.text] = (optionClickCounts[selectedOption.text] || 0) + 1;
        }
    });

    const userName = document.getElementById('name').value;
    const userPhone = document.getElementById('phone').value;
    // Logic to check score and option clicks
    if (totalScore >= 145) {
        const optionLessThan6 = Object.values(optionClickCounts).some(count => count < 6);
        if (optionLessThan6) {
            // Display message with Restart Button
            quizContainer.innerHTML = ` প্রিয় ${userName} , তোমার মাঝে অফুরন্ত সম্ভাবনা রয়েছে।কিন্তু তোমার দেওয়া উত্তরগুলোতে কিছু  অসামঞ্জস্যতা পরিলক্ষিত হচ্ছে। তুমি এই এসেসমেন্ট সিটগুলো পুনরায় পূরণ কর।আমরা তোমাকে সহযোগিতা করতে চাইছি তবে আমাদের দেওয়া প্রশ্নগুলোর উত্তর দেওয়ার সময় তুমি নিজের অন্তরে উপস্থিত হওয়া প্রথম অনুভুতিটি দিয়ে পুনরায় উত্তর দাও। তুমি শুধু প্রশ্নগুলো পড়বে আর নিজের জন্য সবথেকে সত্য মনে হওয়া উত্তরটি বেছে নিবে। মনে রেখ, এখানে সঠিক কিংবা ভুল উত্তর বলে কিছু নেই, তুমি শুধু সততার সাথে আপন মনের প্রথম অনুভূতি থেকে উত্তরগুলো বেছে নেবে। <br> 
            <button onclick="location.reload()" class="dbtn">Restart</button>`;
        } else {
            /**advice**/

            var oc="ইঞ্জিনিয়ার";
            quizContainer.innerHTML = `অনেক অনেক অভিনন্দন প্রিয় ${userName}, তুমি ঠিক পথেই এগিয়ে চলেছ। তোমার পেশাগত লক্ষ্য, তোমার জীবন যাপন এবং দৈনিন্দন অভ্যাসগুলো সঠিক ও পরিপূর্ণভাবে সামঞ্জস্যপূর্ণ। একজন সফল ${oc} হওয়ার জন্য সবথেকে উপযুক্ত তুমি তাই এই পেশাটিই তোমার লক্ষ্য হওয়া উচিত। এই লক্ষ্যটি অর্জন করলে তুমি নিজ পেশাতে একজন কিংবদন্তী সৃজনশীল মানুষ হতে পারবে। প্রিয় কাজে প্রিয় পেশায় তুমি সুখী মানুষদের একজন হয়ে জীবনকে অনেক বেশি উপভোগ করতে পারবে। ${oc} হওয়ার এই লক্ষ্য পূরণে তোমার মাঝে যে প্রবল অনুশক্তি ও সম্ভাবনা রয়েছে তা অর্জন করার জন্য তোমাকে নিচের পরামর্শগুলো মেনে চলতে অনুরোধ করছি। লক্ষ্য পূরণে তোমার প্রতি মহান স্রষ্টার পক্ষ হতে আসুক অফুরন্ত সাহায্য আর মানব কল্যাণের পথে তুমি এগিয়ে চল- এই দোয়া রইল। 
            <button " class="download-pdf-button dbtn" onclick="downloadPDF()">Download PDF</button>`;
        }
    } 
}




// Function to start the quiz
function startQuiz() {
    document.querySelector('.landing-page').style.display = 'none'; // Hide landing page
    document.querySelector('.wrapper').style.display = 'block'; // Show quiz section
    loadQuestion(); // Load the first question
    startTimer(600); // Start the timer
}

// Function to handle form submission and show landing page
function showLandingPage(event) {
    event.preventDefault(); // Prevent form submission

    const wrapperSection = document.querySelector('.wrapper');
    wrapperSection.style.display = 'none'; // Hide intro section
    
    const introSection = document.querySelector('.intro-section');
    introSection.style.display = 'flex'; // show intro section

    

}
// Add an event listener to the form for form submission
document.getElementById('userInfoForm').addEventListener('submit', showResult);
