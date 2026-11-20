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
    question: "What is an Externality?",
    options: ["A cost paid directly by a business", "An unintended and uncompensated impact of someone's actions on a third party", "A tax imposed by the government", "A benefit recieved by the government"],
    correctIndex: 1
  },
  {
    question: "Which of the following is an example of a private benefit?",
    options: ["A person getting vaccinated helps reduce the spread of COVID-19", "A person receiving a vaccine reduces their own risk of becoming seriously ill from COVID-19", "A factory reduces pollution, improving the health of the local residents", "A person planting trees improves air quality for the surrounding community"],
    correctIndex: 1
  },
  {
    question: "Pollution from steel production plants in Gary, Indiana is an example of what type of externality?",
    options: ["Positive consumption externality", "Positive production externality", "Negative production externality", "Negative consumption externality"],
    correctIndex: 2
  },
  {
    question: "Why is the COVID-19 vaccination campaign an example of a positive comsumption externality?",
    options: ["Vaccines increase pollution in society", "Vaccines only benefit the people who recieve them", "Vaccines increase the cost of healthcare for everyone", "Vaccines reduce the spread of COVID-19, benefiting other people in society"],
    correctIndex: 3
  },
  {
    question: "Which of the following is a primary way governments intervene in a market economy?",
    options: ["By introducing taxes on all goods and services to reduce consumer spending", "By allowing supply and demand to determine prices without any government involvement", "By using measures such as subsidies, taxation, legislation and direct provision of goods and services to influence market outcomes", "By removing regulations and allowing businesses to operate without restrictions"],
    correctIndex: 2
  },
  {
    question: "Which of the following is an example of a merit good?",
    options: ["Education", "Chewing gum", "Alcohol", "Luxury sports cars"],
    correctIndex: 0
  },
  {
    question: "What are the consequences if merit goods are not regulated by the government?",
    options: ["They are likely to be over-consumed, resulting in excessive production and higher prices", "They are likely to be under-consumed, resulting in a loss of potential benefits to individuals and society", "They will be consumed at the socially optimal level due to market forces", "They will become public goods and be provided free of charge"],
    correctIndex: 1
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
    question: "What is a asymmetric information?",
    options: ["When both the buyer and seller have the exact same knowledge about all relavent components of an economic interaction", "When all parties are equally uncertain about the future outcome of an economic interaction", "An unintended or uncompensated impact of someone's actions on a third party", "When one party in an economic interaction knows more relavent information than the other about relavent actions or what is being traded"],
    correctIndex: 3
  },
  {
    question: "What are examples of asymmetric information found in ASIC’s review of credit funds?",
    options: ["Both the fund managers and investors faced the same uncertainty, and neither knew whether banks will raise intrest rates", "Fund managers and investors simultaneously knew if a business missed a payment, and both saw all fees charged to businesses", "Hidden or unclear gains and fees, and investors not being fully informed of their risks", "Investors having full access to all relavent information, and investors knew financial position of all businesses invested in"],
    correctIndex: 2
  },
  {
    question: "Which of the following statements about Adverse selection and Moral hazards are correct;",
    options: ["Adverse selection occurs before a contract/transaction and Moral hazards occur after a contract/transaction", "Both occur after a contract/transaction", "Adverse selection occurs after a contract/transaction and Moral hazards occur before a contract/transaction", "Both occur before a transaction takes place"],
    correctIndex: 0
  },
  {
    question: "Which of the following best defines adverse selection in an economic market?",
    options: ["When pre-existing hidden information causes a market to attract the “wrong” or higher-risk participants", "When one party takes hidden risks because an insurance policy protects them", "When a seller charges different consumers different prices for the exact same product", "When one party takes hidden actions or risks because they do not bear the full cost of those risks"],
    correctIndex: 0
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
