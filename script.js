// Quiz Data - Questions Bank
const quizData = {
    general: [
        {
            question: "What is the capital of France?",
            options: ["London", "Berlin", "Paris", "Madrid"],
            correct: 2,
            difficulty: "easy"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            correct: 1,
            difficulty: "easy"
        },
        {
            question: "Who painted the Mona Lisa?",
            options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
            correct: 1,
            difficulty: "medium"
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            correct: 3,
            difficulty: "easy"
        },
        {
            question: "In which year did World War II end?",
            options: ["1943", "1944", "1945", "1946"],
            correct: 2,
            difficulty: "medium"
        },
        {
            question: "What is the chemical symbol for gold?",
            options: ["Go", "Gd", "Au", "Ag"],
            correct: 2,
            difficulty: "hard"
        },
        {
            question: "Which country is home to the kangaroo?",
            options: ["India", "Australia", "South Africa", "Brazil"],
            correct: 1,
            difficulty: "easy"
        },
        {
            question: "What is the smallest prime number?",
            options: ["0", "1", "2", "3"],
            correct: 2,
            difficulty: "medium"
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
            correct: 1,
            difficulty: "easy"
        },
        {
            question: "What is the speed of light in vacuum (approximately)?",
            options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
            correct: 0,
            difficulty: "hard"
        }
    ],
    science: [
        {
            question: "What is the powerhouse of the cell?",
            options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"],
            correct: 1,
            difficulty: "easy"
        },
        {
            question: "What is the chemical formula for water?",
            options: ["H2O", "CO2", "NaCl", "O2"],
            correct: 0,
            difficulty: "easy"
        },
        {
            question: "What is the atomic number of Carbon?",
            options: ["4", "6", "8", "12"],
            correct: 1,
            difficulty: "medium"
        },
        {
            question: "Which gas do plants absorb from the atmosphere?",
            options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
            correct: 2,
            difficulty: "easy"
        },
        {
            question: "What is the study of earthquakes called?",
            options: ["Meteorology", "Seismology", "Volcanology", "Geology"],
            correct: 1,
            difficulty: "hard"
        },
        {
            question: "How many bones are in the human body?",
            options: ["196", "206", "216", "226"],
            correct: 1,
            difficulty: "medium"
        },
        {
            question: "What is the hardest natural substance on Earth?",
            options: ["Gold", "Iron", "Diamond", "Platinum"],
            correct: 2,
            difficulty: "easy"
        },
        {
            question: "What is the most abundant gas in Earth's atmosphere?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
            correct: 2,
            difficulty: "medium"
        },
        {
            question: "What is the boiling point of water at sea level (Celsius)?",
            options: ["90°C", "100°C", "110°C", "120°C"],
            correct: 1,
            difficulty: "easy"
        },
        {
            question: "What type of animal is a Komodo dragon?",
            options: ["Snake", "Lizard", "Crocodile", "Dinosaur"],
            correct: 1,
            difficulty: "medium"
        }
    ],
    history: [
        {
            question: "Who was the first President of the United States?",
            options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"],
            correct: 1,
            difficulty: "easy"
        },
        {
            question: "In which year did the Titanic sink?",
            options: ["1910", "1911", "1912", "1913"],
            correct: 2,
            difficulty: "medium"
        },
        {
            question: "Which ancient wonder of the world still exists today?",
            options: ["Hanging Gardens", "Colossus of Rhodes", "Great Pyramid of Giza", "Lighthouse of Alexandria"],
            correct: 2,
            difficulty: "medium"
        },
        {
            question: "Who discovered America in 1492?",
            options: ["Marco Polo", "Christopher Columbus", "Ferdinand Magellan", "Vasco da Gama"],
            correct: 1,
            difficulty: "easy"
        },
        {
            question: "What was the name of the first artificial satellite launched by the Soviet Union?",
            options: ["Apollo 11", "Voyager 1", "Sputnik 1", "Explorer 1"],
            correct: 2,
            difficulty: "hard"
        },
        {
            question: "Who was known as the 'Iron Lady'?",
            options: ["Indira Gandhi", "Margaret Thatcher", "Angela Merkel", "Golda Meir"],
            correct: 1,
            difficulty: "medium"
        },
        {
            question: "In which year did India gain independence?",
            options: ["1945", "1946", "1947", "1948"],
            correct: 2,
            difficulty: "easy"
        },
        {
            question: "Who built the Taj Mahal?",
            options: ["Akbar", "Shah Jahan", "Aurangzeb", "Jahangir"],
            correct: 1,
            difficulty: "medium"
        },
        {
            question: "What was the name of the ship on which the Pilgrims traveled to America?",
            options: ["Santa Maria", "Mayflower", "Endeavour", "Victoria"],
            correct: 1,
            difficulty: "medium"
        },
        {
            question: "Which empire built Machu Picchu?",
            options: ["Aztec", "Maya", "Inca", "Olmec"],
            correct: 2,
            difficulty: "hard"
        }
    ],
    sports: [
        {
            question: "How many players are there in a cricket team?",
            options: ["9", "10", "11", "12"],
            correct: 2,
            difficulty: "easy"
        },
        {
            question: "In which sport would you perform a 'slam dunk'?",
            options: ["Volleyball", "Basketball", "Tennis", "Baseball"],
            correct: 1,
            difficulty: "easy"
        },
        {
            question: "How many Grand Slam tournaments are there in tennis?",
            options: ["3", "4", "5", "6"],
            correct: 1,
            difficulty: "medium"
        },
        {
            question: "What is the national sport of India?",
            options: ["Cricket", "Hockey", "Football", "Kabaddi"],
            correct: 1,
            difficulty: "medium"
        },
        {
            question: "How long is a marathon race?",
            options: ["26.2 miles", "20 miles", "30 miles", "25 miles"],
            correct: 0,
            difficulty: "medium"
        },
        {
            question: "Which country has won the most FIFA World Cups?",
            options: ["Germany", "Argentina", "Brazil", "Italy"],
            correct: 2,
            difficulty: "easy"
        },
        {
            question: "In which sport is the term 'love' used?",
            options: ["Cricket", "Football", "Tennis", "Golf"],
            correct: 2,
            difficulty: "easy"
        },
        {
            question: "What is the diameter of a basketball hoop in inches?",
            options: ["16", "18", "20", "22"],
            correct: 1,
            difficulty: "hard"
        },
        {
            question: "How many rings are on the Olympic flag?",
            options: ["4", "5", "6", "7"],
            correct: 1,
            difficulty: "easy"
        },
        {
            question: "Which boxer was known as 'The Greatest'?",
            options: ["Mike Tyson", "Muhammad Ali", "Floyd Mayweather", "Sugar Ray Leonard"],
            correct: 1,
            difficulty: "medium"
        }
    ]
};

// Global Variables
let currentCategory = 'general';
let currentDifficulty = 'easy';
let playerName = '';
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 30;
let totalTime = 0;
let quizStartTime;
let selectedAnswer = null;
let correctAnswers = 0;
let wrongAnswers = 0;

// DOM Elements
const screens = {
    welcome: document.getElementById('welcomeScreen'),
    quiz: document.getElementById('quizScreen'),
    result: document.getElementById('resultScreen')
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadProgress();
    updateLeaderboard();
});

// Utility Functions

// Fisher-Yates Shuffle Algorithm for randomizing questions
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Local Storage Functions
function saveProgress() {
    const progress = {
        playerName: playerName,
        category: currentCategory,
        difficulty: currentDifficulty,
        currentQuestionIndex: currentQuestionIndex,
        score: score,
        totalTime: totalTime,
        correctAnswers: correctAnswers,
        wrongAnswers: wrongAnswers
    };
    localStorage.setItem('quizProgress', JSON.stringify(progress));
}

function loadProgress() {
    const saved = localStorage.getItem('quizProgress');
    if (saved) {
        const progress = JSON.parse(saved);
        // Optionally auto-restore progress
        // For now, we just clear it on page load
        localStorage.removeItem('quizProgress');
    }
}

function saveScore() {
    let leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    
    const scoreEntry = {
        name: playerName,
        category: currentCategory,
        difficulty: currentDifficulty,
        score: score,
        total: currentQuestions.length,
        percentage: Math.round((score / currentQuestions.length) * 100),
        date: new Date().toLocaleDateString(),
        time: totalTime
    };
    
    leaderboard.push(scoreEntry);
    
    // Sort by percentage (descending), then by time (ascending)
    leaderboard.sort((a, b) => {
        if (b.percentage !== a.percentage) {
            return b.percentage - a.percentage;
        }
        return a.time - b.time;
    });
    
    // Keep top 50 scores
    leaderboard = leaderboard.slice(0, 50);
    
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
}

// Screen Management
function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

// Input Validation
function validatePlayerName() {
    const nameInput = document.getElementById('playerName');
    const errorMsg = document.getElementById('nameError');
    
    if (nameInput.value.trim() === '') {
        errorMsg.classList.remove('d-none');
        nameInput.focus();
        return false;
    }
    
    errorMsg.classList.add('d-none');
    return true;
}

// Start Quiz Function
function startQuiz() {
    // Validate player name
    if (!validatePlayerName()) {
        return;
    }
    
    // Get user inputs
    playerName = document.getElementById('playerName').value.trim();
    currentCategory = document.getElementById('categorySelect').value;
    currentDifficulty = document.querySelector('input[name="difficulty"]:checked').value;
    
    // Filter questions by difficulty
    let questions = quizData[currentCategory].filter(q => 
        q.difficulty === currentDifficulty || currentDifficulty === 'easy'
    );
    
    // Randomize question order using shuffle algorithm
    currentQuestions = shuffleArray(questions).slice(0, 10);
    
    // Reset variables
    currentQuestionIndex = 0;
    score = 0;
    totalTime = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    quizStartTime = Date.now();
    
    // Update UI
    document.getElementById('playerNameDisplay').textContent = playerName;
    document.getElementById('totalQuestions').textContent = currentQuestions.length;
    
    // Show quiz screen and load first question
    showScreen('quiz');
    loadQuestion();
}

// Load Question
function loadQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        endQuiz();
        return;
    }
    
    const question = currentQuestions[currentQuestionIndex];
    selectedAnswer = null;
    
    // Update question number and progress
    const questionNum = currentQuestionIndex + 1;
    document.getElementById('currentQuestion').textContent = questionNum;
    document.getElementById('qNumber').textContent = questionNum;
    document.getElementById('currentScore').textContent = score;
    
    // Update progress bar
    const progress = (questionNum / currentQuestions.length) * 100;
    document.getElementById('quizProgress').style.width = progress + '%';
    
    // Display question
    document.getElementById('questionText').textContent = question.question;
    
    // Display options
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    // Randomize options order
    const optionsWithIndex = question.options.map((opt, idx) => ({text: opt, originalIndex: idx}));
    const shuffledOptions = shuffleArray(optionsWithIndex);
    
    shuffledOptions.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option.text;
        button.onclick = () => selectAnswer(option.originalIndex, button);
        optionsContainer.appendChild(button);
    });
    
    // Disable next button
    document.getElementById('nextBtn').disabled = true;
    
    // Start timer
    startTimer();
}

// Select Answer
function selectAnswer(answerIndex, buttonElement) {
    if (selectedAnswer !== null) return; // Already answered
    
    selectedAnswer = answerIndex;
    const question = currentQuestions[currentQuestionIndex];
    const allButtons = document.querySelectorAll('.option-btn');
    
    // Disable all buttons
    allButtons.forEach(btn => btn.disabled = true);
    
    // Stop timer
    stopTimer();
    
    // Mark correct/wrong
    if (answerIndex === question.correct) {
        buttonElement.classList.add('correct');
        score++;
        correctAnswers++;
        
        // Play success animation
        confetti(buttonElement);
    } else {
        buttonElement.classList.add('wrong');
        wrongAnswers++;
        
        // Show correct answer
        allButtons.forEach((btn, idx) => {
            if (btn.textContent === question.options[question.correct]) {
                btn.classList.add('correct');
            }
        });
    }
    
    // Update score display
    document.getElementById('currentScore').textContent = score;
    
    // Enable next button
    document.getElementById('nextBtn').disabled = false;
    
    // Save progress
    saveProgress();
}

// Timer Functions
function startTimer() {
    timeLeft = 30;
    updateTimerDisplay();
    
    timer = setInterval(() => {
        timeLeft--;
        totalTime++;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            stopTimer();
            autoSelectWrong();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function updateTimerDisplay() {
    document.getElementById('timeLeft').textContent = timeLeft;
    const progress = (timeLeft / 30) * 100;
    document.getElementById('timerProgress').style.width = progress + '%';
    
    // Change color when time is running out
    const timerProgress = document.getElementById('timerProgress');
    if (timeLeft <= 5) {
        timerProgress.style.background = 'linear-gradient(90deg, #ef4444, #dc2626)';
    } else if (timeLeft <= 10) {
        timerProgress.style.background = 'linear-gradient(90deg, #f59e0b, #d97706)';
    } else {
        timerProgress.style.background = 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)';
    }
}

function autoSelectWrong() {
    if (selectedAnswer === null) {
        wrongAnswers++;
        const question = currentQuestions[currentQuestionIndex];
        const allButtons = document.querySelectorAll('.option-btn');
        
        // Disable all buttons and show correct answer
        allButtons.forEach((btn, idx) => {
            btn.disabled = true;
            if (btn.textContent === question.options[question.correct]) {
                btn.classList.add('correct');
            }
        });
        
        // Enable next button
        document.getElementById('nextBtn').disabled = false;
        selectedAnswer = -1; // Mark as auto-failed
    }
}

// Next Question
function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

// End Quiz
function endQuiz() {
    stopTimer();
    
    // Calculate statistics
    const totalQuestions = currentQuestions.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    
    // Update result screen
    document.getElementById('finalScore').textContent = score;
    document.getElementById('maxScore').textContent = totalQuestions;
    document.getElementById('percentage').textContent = percentage;
    document.getElementById('correctAnswers').textContent = correctAnswers;
    document.getElementById('wrongAnswers').textContent = wrongAnswers;
    document.getElementById('timeTaken').textContent = totalTime;
    
    // Set result message based on percentage
    let message = '';
    if (percentage >= 90) {
        message = '🎉 Outstanding! You\'re a genius!';
    } else if (percentage >= 75) {
        message = '👏 Excellent work! Keep it up!';
    } else if (percentage >= 60) {
        message = '👍 Good job! You can do better!';
    } else if (percentage >= 40) {
        message = '💪 Not bad! Practice makes perfect!';
    } else {
        message = '📚 Keep learning! You\'ll improve!';
    }
    document.getElementById('resultMessage').textContent = message;
    
    // Save score to leaderboard
    saveScore();
    
    // Clear progress
    localStorage.removeItem('quizProgress');
    
    // Show result screen
    showScreen('result');
}

// Restart Quiz
function restartQuiz() {
    // Reset all variables
    currentQuestionIndex = 0;
    score = 0;
    totalTime = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    selectedAnswer = null;
    
    // Show welcome screen
    showScreen('welcome');
}

// Reset Progress
function resetProgress() {
    if (confirm('Are you sure you want to reset your progress?')) {
        localStorage.removeItem('quizProgress');
        restartQuiz();
    }
}

// Leaderboard Functions
function showLeaderboard() {
    updateLeaderboard();
    const modal = new bootstrap.Modal(document.getElementById('leaderboardModal'));
    modal.show();
}

function updateLeaderboard() {
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    const container = document.getElementById('leaderboardContent');
    
    if (leaderboard.length === 0) {
        container.innerHTML = '<p class="text-center text-muted">No scores yet. Be the first!</p>';
        return;
    }
    
    container.innerHTML = leaderboard.map((entry, index) => {
        let rankClass = '';
        if (index === 0) rankClass = 'gold';
        else if (index === 1) rankClass = 'silver';
        else if (index === 2) rankClass = 'bronze';
        
        return `
            <div class="leaderboard-item">
                <div class="leaderboard-rank ${rankClass}">#${index + 1}</div>
                <div class="leaderboard-info">
                    <div class="leaderboard-name">${entry.name}</div>
                    <div class="leaderboard-category">
                        ${entry.category} - ${entry.difficulty} | ${entry.date}
                    </div>
                </div>
                <div class="leaderboard-score">
                    ${entry.score}/${entry.total}
                    <small class="d-block">${entry.percentage}%</small>
                </div>
            </div>
        `;
    }).join('');
}

// Confetti Effect (Simple)
function confetti(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 15; i++) {
        createConfettiPiece(centerX, centerY);
    }
}

function createConfettiPiece(x, y) {
    const piece = document.createElement('div');
    piece.style.position = 'fixed';
    piece.style.left = x + 'px';
    piece.style.top = y + 'px';
    piece.style.width = '10px';
    piece.style.height = '10px';
    piece.style.backgroundColor = ['#6366f1', '#ec4899', '#10b981', '#f59e0b'][Math.floor(Math.random() * 4)];
    piece.style.borderRadius = '50%';
    piece.style.pointerEvents = 'none';
    piece.style.zIndex = '9999';
    
    document.body.appendChild(piece);
    
    const angle = Math.random() * Math.PI * 2;
    const velocity = 3 + Math.random() * 5;
    const dx = Math.cos(angle) * velocity;
    const dy = Math.sin(angle) * velocity;
    
    let posX = x;
    let posY = y;
    let opacity = 1;
    
    const animate = () => {
        posX += dx;
        posY += dy + 2; // Gravity
        opacity -= 0.02;
        
        piece.style.left = posX + 'px';
        piece.style.top = posY + 'px';
        piece.style.opacity = opacity;
        
        if (opacity > 0) {
            requestAnimationFrame(animate);
        } else {
            piece.remove();
        }
    };
    
    animate();
}

// Cross-browser compatibility check
(function() {
    // Check localStorage support
    if (typeof(Storage) === "undefined") {
        console.warn("LocalStorage not supported. Progress won't be saved.");
    }
    
    // Check for required APIs
    if (!document.querySelector) {
        console.error("Browser too old. Please use a modern browser.");
    }
})();