/*
  BREAKING EVEN — NOVEMBER EDITION
  Add your real quiz content in the QUESTIONS array below.

  For each question:
  - Replace the question text.
  - Replace all four option strings.
  - Set correctIndex to 0, 1, 2, or 3:
      0 = option A, 1 = option B, 2 = option C, 3 = option D.

  Keep exactly 20 question objects.
*/

const QUESTIONS = [
  {
    question: "Add your first question here.",
    options: ["Add answer A", "Add answer B", "Add answer C", "Add answer D"],
    correctIndex: null
  },
  {
    question: "Add your second question here.",
    options: ["Add answer A", "Add answer B", "Add answer C", "Add answer D"],
    correctIndex: null
  },
  {
    question: "Add your third question here.",
    options: ["Add answer A", "Add answer B", "Add answer C", "Add answer D"],
    correctIndex: null
  },
  {
    question: "Add your fourth question here.",
    options: ["Add answer A", "Add answer B", "Add answer C", "Add answer D"],
    correctIndex: null
  },
  {
    question: "Add your fifth question here.",
    options: ["Add answer A", "Add answer B", "Add answer C", "Add answer D"],
    correctIndex: null
  },
  {
    question: "Add your sixth question here.",
    options: ["Add answer A", "Add answer B", "Add answer C", "Add answer D"],
    correctIndex: null
  },
  {
    question: "Add your seventh question here.",
    options: ["Add answer A", "Add answer B", "Add answer C", "Add answer D"],
    correctIndex: null
  },
  {
    question: "Add your eighth question here.",
    options: ["Add answer A", "Add answer B", "Add answer C", "Add answer D"],
    correctIndex: null
  },
  {
    question: "Add your ninth question here.",
    options: ["Add answer A", "Add answer B", "Add answer C", "Add answer D"],
    correctIndex: null
  },
  {
    question: "Add your tenth question here.",
    options: ["Add answer A", "Add answer B", "Add answer C", "Add answer D"],
    correctIndex: null
  },
  {
    question: "Add your eleventh question here.",
    options: ["Add answer A", "Add answer B", "Add answer C", "Add answer D"],
    correctIndex: null
  },
  {
    question: "Add your twelfth question here.",
    options: ["Add answer A", "Add answer B", "Add answer C", "Add answer D"],
    correctIndex: null
  },
  {
    question: "Add your thirteenth question here.",
    options: ["Add answer A", "Add answer B", "Add answer C", "Add answer D"],
    correctIndex: null
  },
  {
    question: "Add your fourteenth question here.",
    options: ["Add answer A", "Add answer B", "Add answer C", "Add answer D"],
    correctIndex: null
  },
  {
    question: "Add your fifteenth question here.",
    options: ["Add answer A", "Add answer B", "Add answer C", "Add answer D"],
    correctIndex: null
  },
  {
    question: "Add your sixteenth question here.",
    options: ["Add answer A", "Add answer B", "Add answer C", "Add answer D"],
    correctIndex: null
  },
  {
    question: "Add your seventeenth question here.",
    options: ["Add answer A", "Add answer B", "Add answer C", "Add answer D"],
    correctIndex: null
  },
  {
    question: "Add your eighteenth question here.",
    options: ["Add answer A", "Add answer B", "Add answer C", "Add answer D"],
    correctIndex: null
  },
  {
    question: "Add your nineteenth question here.",
    options: ["Add answer A", "Add answer B", "Add answer C", "Add answer D"],
    correctIndex: null
  },
  {
    question: "Add your twentieth question here.",
    options: ["Add answer A", "Add answer B", "Add answer C", "Add answer D"],
    correctIndex: null
  }
];

const questionsContainer = document.getElementById("questionsContainer");
const quizForm = document.getElementById("quizForm");
const progressText = document.getElementById("progressText");
const progressPercent = document.getElementById("progressPercent");
const progressFill = document.getElementById("progressFill");
const progressBar = document.getElementById("progressBar");
const formMessage = document.getElementById("formMessage");
const results = document.getElementById("results");
const localAudio = document.getElementById("localAudio");
const podcastAudio = document.getElementById("podcastAudio");
const audioStatus = document.getElementById("audioStatus");
const localPreviewNote = document.getElementById("localPreviewNote");

let localAudioUrl = null;
let submitted = false;

function renderQuestions() {
  questionsContainer.innerHTML = "";

  QUESTIONS.forEach((item, questionIndex) => {
    const card = document.createElement("article");
    card.className = "question-card";
    card.dataset.question = String(questionIndex);

    const head = document.createElement("div");
    head.className = "question-head";

    const number = document.createElement("span");
    number.className = "question-number";
    number.textContent = String(questionIndex + 1);

    const label = document.createElement("span");
    label.className = "question-label";
    label.textContent = `QUESTION ${String(questionIndex + 1).padStart(2, "0")}`;

    head.append(number, label);

    const questionText = document.createElement("p");
    questionText.className = "question-text";
    questionText.textContent = item.question;

    const options = document.createElement("div");
    options.className = "options";

    item.options.forEach((optionText, optionIndex) => {
      const optionLabel = document.createElement("label");
      optionLabel.className = "option";

      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `question-${questionIndex}`;
      radio.value = String(optionIndex);
      radio.addEventListener("change", updateProgress);

      const optionSpan = document.createElement("span");
      optionSpan.textContent = `${String.fromCharCode(65 + optionIndex)}. ${optionText}`;

      optionLabel.append(radio, optionSpan);
      options.append(optionLabel);
    });

    card.append(head, questionText, options);
    questionsContainer.append(card);
  });
}

function updateProgress() {
  const answered = QUESTIONS.filter((_, index) =>
    quizForm.querySelector(`input[name="question-${index}"]:checked`)
  ).length;
  const percentage = Math.round((answered / QUESTIONS.length) * 100);

  progressText.textContent = `${answered} of ${QUESTIONS.length} answered`;
  progressPercent.textContent = `${percentage}%`;
  progressFill.style.width = `${percentage}%`;
  progressBar.setAttribute("aria-valuenow", String(answered));
}

function getSelectedAnswers() {
  return QUESTIONS.map((_, index) => {
    const selected = quizForm.querySelector(`input[name="question-${index}"]:checked`);
    return selected ? Number(selected.value) : null;
  });
}

function quizContentIsReady() {
  return QUESTIONS.length === 20 && QUESTIONS.every((item) =>
    typeof item.question === "string" &&
    item.question.trim() !== "" &&
    !item.question.toLowerCase().startsWith("add your") &&
    Array.isArray(item.options) &&
    item.options.length === 4 &&
    item.options.every((option) =>
      typeof option === "string" &&
      option.trim() !== "" &&
      !option.toLowerCase().startsWith("add answer")
    ) &&
    Number.isInteger(item.correctIndex) &&
    item.correctIndex >= 0 &&
    item.correctIndex <= 3
  );
}

function showResults(answers) {
  let score = 0;
  const review = document.getElementById("answerReview");
  review.innerHTML = "";

  QUESTIONS.forEach((item, index) => {
    const isCorrect = answers[index] === item.correctIndex;
    if (isCorrect) score += 1;

    const reviewItem = document.createElement("div");
    reviewItem.className = "review-item";

    const heading = document.createElement("strong");
    heading.textContent = `Question ${index + 1}`;

    const resultLine = document.createElement("span");
    resultLine.className = isCorrect ? "right" : "wrong";
    resultLine.textContent = isCorrect ? "Correct" : "Not quite";

    const correctAnswer = document.createElement("div");
    correctAnswer.className = "muted";
    correctAnswer.textContent = `Correct answer: ${String.fromCharCode(65 + item.correctIndex)}. ${item.options[item.correctIndex]}`;

    reviewItem.append(heading, resultLine, correctAnswer);
    review.append(reviewItem);
  });

  document.getElementById("scoreHeading").textContent = "Your score";
  document.getElementById("scoreText").textContent = `${score} / ${QUESTIONS.length}`;
  document.getElementById("feedbackText").textContent =
    score === 20 ? "Excellent work — you got every question correct." :
    score >= 15 ? "Great work. You have a strong understanding of the topics." :
    score >= 10 ? "Good effort. Review the answers below to see what you can revisit." :
    "Thanks for taking part. Review the answers below and have another go.";

  results.hidden = false;
  results.scrollIntoView({ behavior: "smooth", block: "start" });
}

quizForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!quizContentIsReady()) {
    formMessage.textContent = "The quiz is still being prepared. Add all 20 questions, four options and a correct answer for each in script.js before using the live quiz.";
    formMessage.style.color = "#a15b19";
    return;
  }

  const answers = getSelectedAnswers();
  const unanswered = answers.filter((answer) => answer === null).length;

  if (unanswered > 0) {
    formMessage.textContent = `You still have ${unanswered} unanswered question${unanswered === 1 ? "" : "s"}. Please complete all 20 before submitting.`;
    formMessage.style.color = "#a15b19";
    const firstUnanswered = answers.findIndex((answer) => answer === null);
    const firstCard = questionsContainer.querySelector(`[data-question="${firstUnanswered}"]`);
    firstCard.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  submitted = true;
  quizForm.querySelectorAll("input").forEach((input) => { input.disabled = true; });
  quizForm.querySelectorAll(".option").forEach((label) => {
    const input = label.querySelector("input");
    const qIndex = Number(input.name.split("-")[1]);
    const optionIndex = Number(input.value);
    if (optionIndex === QUESTIONS[qIndex].correctIndex) label.classList.add("correct");
    if (input.checked && optionIndex !== QUESTIONS[qIndex].correctIndex) label.classList.add("incorrect");
  });

  formMessage.textContent = "Your quiz has been submitted. Your results are below.";
  formMessage.style.color = "#187a58";
  document.getElementById("submitQuiz").disabled = true;
  showResults(answers);
});

document.getElementById("retryQuiz").addEventListener("click", () => {
  quizForm.reset();
  quizForm.querySelectorAll("input").forEach((input) => { input.disabled = false; });
  quizForm.querySelectorAll(".option").forEach((label) => label.classList.remove("correct", "incorrect"));
  document.getElementById("submitQuiz").disabled = false;
  results.hidden = true;
  submitted = false;
  formMessage.textContent = "Select one answer for each question, then submit your quiz.";
  formMessage.style.color = "";
  updateProgress();
  document.getElementById("quiz-title").scrollIntoView({ behavior: "smooth" });
});

// Local preview only: this does not upload the selected file to GitHub.
localAudio.addEventListener("change", () => {
  const file = localAudio.files && localAudio.files[0];
  if (!file) return;

  if (localAudioUrl) URL.revokeObjectURL(localAudioUrl);
  localAudioUrl = URL.createObjectURL(file);
  podcastAudio.src = localAudioUrl;
  podcastAudio.load();
  audioStatus.textContent = `Local preview selected: ${file.name}`;
  localPreviewNote.textContent = "This preview is only available in this browser session. Add the file to the GitHub audio folder for your teacher to hear it from the shared link.";
});

window.addEventListener("beforeunload", () => {
  if (localAudioUrl) URL.revokeObjectURL(localAudioUrl);
});

renderQuestions();
updateProgress();
