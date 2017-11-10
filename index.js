//Creating an array of objects, where each object contains each question's information. This will later be used to  automatically generate the next question page, upon selection of an answer to the previous question (no "next" button).
//First - create 10 objects. After that we put them into an array.
let question1 = {
    questionSource: "http://www.reporternewspapers.net/wp-content/uploads/2015/01/mercedes-logo1.jpg",
    logoAltText:"Circle split into three 120 degree slices",
    answers: ["Mercedes-Benz",
              "Maserati",
              "BMW",
              "Fiat"],
    selectedAnswer: null,
    correctAnswer: "Mercedes-Benz",
    correctAnswerIndex: 0
};

let question2 = {
    questionSource: "https://s-media-cache-ak0.pinimg.com/originals/0e/33/55/0e3355f7f8ac0408626994f0ba707af1.jpg",
    logoAltText:"The letters DMC for a logo",
    answers: ["Delorean",
              "Tesla",
              "Bugatti",
              "McLaren"],
    selectedAnswer: null,
    correctAnswer: "Delorean",
    correctAnswerIndex: 0
};

let question3 = {
    questionSource: "http://www.carlogos.org/logo/Pontiac-symbol-640x550.jpg",
    logoAltText:"Long silver arrow pointing down, with red filling and a four-point star in the middle",
    answers: ["Fiat",
              "Acura",
              "Volvo",
              "Pontiac"],
    selectedAnswer: null,
    correctAnswer: "Pontiac",
    correctAnswerIndex: 3
};

let question4 = {
    questionSource: "https://www.logodesignlove.com/images/evolution/skoda-winged-logo.jpg",
    logoAltText:"A circle with a winged arrow inside it",
    answers: ["Skoda",
              "Dihatsu",
              "Peugeot",
              "Rolls Royce"],
    selectedAnswer: null,
    correctAnswer: "Skoda",
    correctAnswerIndex: 0
};

let question5 = {
    questionSource: "http://thenewswheel.com/wp-content/themes/patterns/timthumb.php?src=http://thenewswheel.com/wp-content/uploads/2015/08/current-opel-logo-Z.jpg&q=90&w=660&zc=1",
    logoAltText:"A circle with a horizontal lightning bolt going through it",
    answers: ["Isuzu",
              "Opel",
              "Renault",
              "Mitsubishi"],
    selectedAnswer: null,
    correctAnswer: "Opel",
    correctAnswerIndex: 1
};

let question6 = {
    questionSource: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY6G8BbLG_68SNRu903tBpTRUdHpyJ1Ba8BhLhUyzVwkejAqEB",
    logoAltText:"A horizontal elipse with what looks like the contour of an umbrella inside of it",
    answers: ["Tata",
              "Tesla",
              "Lotus",
              "Smart"],
    selectedAnswer: null,
    correctAnswer: "Tata",
    correctAnswerIndex: 0
};

let question7 = {
    questionSource: "http://www.car-logos.net/wp-content/uploads/2014/03/lada_logo.jpg",
    logoAltText:"A silver sailboat with a silver horizontal elipse around it, on a blue background",
    answers: ["Koenigsegg",
              "Maybach",
              "KTM",
              "Lada"],
    selectedAnswer: null,
    correctAnswer: "Lada",
    correctAnswerIndex: 3
};

let question8 = {
    questionSource: "https://i.pinimg.com/736x/d4/9a/a1/d49aa1a5e50501507d33f851b6c7cb9c--iconosquare-the-star.jpg",
    logoAltText:"An elipse with seven stars inside of it - all are four-point stars, one big one on the left and six small ones on the right",
    answers: ["Subaru",
              "Mazda",
              "Alfa Romeo",
              "Ford"],
    selectedAnswer: null,
    correctAnswer: "Subaru",
    correctAnswerIndex: 0
};

let question9 = {
    questionSource: "http://4.bp.blogspot.com/-dsqG7fpW5W4/Uohjwbx6Y0I/AAAAAAAAXzc/GGuwRDjEA6I/s1600/Suzuki-Car-Logo-1-Download-Free.jpg",
    logoAltText:"A red letter 'S' formed with almost parallel lines and almost 90 degree angles",
    answers: ["Saab",
              "Ssang Yong",
              "Studebaker",
              "Suzuki"],
    selectedAnswer: null,
    correctAnswer: "Suzuki",
    correctAnswerIndex: 3
};

let question10 = {
    questionSource: "http://www.guessthelogo.com/second/images/logos/citroen-logo2.gif",
    logoAltText:"Two boomerangs pointing upwards",
    answers: ["Citroen",
              "Dacia",
              "Chery",
              "Aston Martin"],
    selectedAnswer: null,
    correctAnswer: "Citroen",
    correctAnswerIndex: 0
};

// Now, create the array of the 10 objects created above:
questionsArray = [question1,
                  question2,
                  question3,
                  question4,
                  question5,
                  question6,
                  question7,
                  question8,
                  question9,
                  question10];
 
//Create the welcome page upon loading of the initial (empty) html skeleton                  
function renderWelcomePage() {
  $('.welcome-page').html(
    `<h2>The stakes are high. <br>Don't screw this up.</h2>
    <button class="start-quiz-button">
      Start quiz
      <img src="http://www.how-to-draw-cartoons-online.com/image-files/how-to-draw-lamborghini-final.gif" alt="fast car logo" class="start-button-image">
    </button>`
  )
  renderFirstQuestionPage();
}


// The following function renders the current question page. It will be called 10 time with a loop, so its input qIndex is the index of the specific question to be rendered (which is contained in the questions array created above). It will also pull the source url of the specific image, the alt text for the specific image and the four pre-defined answers for that specific question - all contained in the specific object that qIndex points to.
function renderQuestionPage(qIndex) {
  //Step 1: load the next question page:
  $('.questions-section').html(
      `<div class="current-question-container">
        <form id="current-question">
          <label for="current-question">Whose logo is this: (${qIndex+1}/10)</label>
          
          <div class="current-logo">
            <img class="current-image" src="${questionsArray[qIndex].questionSource}" alt="${questionsArray[qIndex].logoAltText}">
          </div>
          
          <input id="current-question${qIndex+1}" type="radio" name="answer-option" value="${questionsArray[qIndex].answers[0]}"> ${questionsArray[qIndex].answers[0]}<br>
          <input id="current-question${qIndex+1}" type="radio" name="answer-option" value="${questionsArray[qIndex].answers[1]}"> ${questionsArray[qIndex].answers[1]}<br>
          <input id="current-question${qIndex+1}" type="radio" name="answer-option" value="${questionsArray[qIndex].answers[2]}"> ${questionsArray[qIndex].answers[2]}<br>
          <input id="current-question${qIndex+1}" type="radio" name="answer-option" value="${questionsArray[qIndex].answers[3]}"> ${questionsArray[qIndex].answers[3]}

        </form>
      </div>`
  )
  // Step 2: update the current progress summary line at the bottom of the page:
  $('.progress-section').html(
      `<h2>Your score so far: ${correctCounter} / ${qIndex} (${qIndex == 0 ? 0 : Math.ceil(correctCounter/qIndex * 100)}%)</h2>`
  )
  
  //Step 3: display the result of the previous round - at the top of this question page (see css for conditional formatting)
  if (correctCounter > previousCorrectCounter && qIndex != 0) {
    $('.questions-section').prepend('<h2 class="feedback hooray">Hooray!<br>That last one was correct!</h2>');
  } else if (correctCounter == previousCorrectCounter && qIndex != 0) {
    $('.questions-section').prepend(`<h2 class="feedback boo">That last one was wrong...<br>The correct answer was: ${questionsArray[qIndex-1].answers[questionsArray[qIndex-1].correctAnswerIndex]}</h2>`)
  }
}

// Create a listener for a click on the "Start quiz" button on the first page. This will render the first question page (this is done separately, because this page doesn't have all the sections the next 9 q's will have)
function renderFirstQuestionPage() {
  $('.start-quiz-button').click(event => {
    renderQuestionPage(0);
    //remove the welcome page (wiping html content rather than removing the section altogether)
    $('.welcome-page').html(''); 
  })
}

// The next function listens for a click on any answer on the current question page and automatically generates the next question page. It also increases the counter of correct answers if the selected answer is the correct one (this counted is used for the current progress line, as well as the summary page at the end)
function renderNextQuestionPage(index) {
  // Need event delegation here, because the radio buttons don't exist upon initial page load
  $('.questions-section').on('click', `#current-question${index+1}`, event => {
    let selectedRadioValue = $(`#current-question${index+1}:checked`).val();
    let correctAnswer = questionsArray[index].correctAnswer;
    if (selectedRadioValue == correctAnswer) {
      previousCorrectCounter = correctCounter;
      correctCounter++; 
    } else {
      previousCorrectCounter = correctCounter;
    }
    renderQuestionPage(index + 1); // render the next question page in any case
  })
}

// Create the summary page, when an answer is selected on the 10th question page
function renderSummaryPage() {
  //Step 1: add 1 to the correct answer counter if selection is correct(same as for previous 9 q's)
  $('.questions-section').on('click', `#current-question10`, event => {
    let selectedRadioValue = $(`#current-question10:checked`).val();
    let correctAnswer = questionsArray[questionsArray.length-1].correctAnswer;
    if (selectedRadioValue == correctAnswer) {
      previousCorrectCounter = correctCounter;
      correctCounter++; 
    } else {
      previousCorrectCounter = correctCounter;
    }
    
    //Step 2: Now, since this is the last question, remove the question page (wiping html content rather than removing the section altogether):
    $('.questions-section').html('');
    $('.progress-section').html('');
    //use the current "correctCounter" to calculate the overall score in %
    let successRate = (correctCounter / 10) * 100;
    if (successRate < 40) {
      $('.summary-page').html(
        `<h2 class="summary-statement">You got ${successRate}% correct. 
        <br>Honestly, car logos are not your thing. And that's OK.</h2>`);
    } else if (successRate < 70) {
      $('.summary-page').html(
        `<h2>You got ${successRate}% correct. Meh. 
        <br>You're not terrible at this, but neither is Timmy, and he's 10 years old.</h2>`);
    } else if (successRate < 90) {
      $('.summary-page').html(
        `<h2>You got ${successRate}% correct. 
        <br>You're fairly good at this, but don't quit your day job.</h2>`);
    } else {
      $('.summary-page').html(
        `<h2>You got ${successRate}% correct. 
        <br>You should quit your job and do this for a living.</h2>`);
    }
    $('.summary-page').append(`<div><button class="start-over-button">Start over</button></div>`);

    //Now, deal with the "start over" button on the summary page. It will reload the welcome page and zero the counter.
    $('.summary-page').on('click', `.start-over-button`, event => {
      renderWelcomePage();
      $('.summary-page').html('');
      correctCounter = 0;
    });


    
  //Step 3: display the result of the previous round at the top of the page (see css for conditional formatting) - same as in the previous questions pages
    if (correctCounter > previousCorrectCounter) {
      $('.summary-page').prepend('<h2 class="feedback hooray">Hooray!<br>That last one was correct!</h2>');
    } else if (correctCounter == previousCorrectCounter) {
      $('.summary-page').prepend(`<h2 class="feedback boo">That last one was wrong...<br>The correct answer was: ${questionsArray[questionsArray.length-1].answers[questionsArray[questionsArray.length-1].correctAnswerIndex]}</h2>`)
    }
  })
}

// Create the welcome page (includes the listener for the 'start quiz' button, which loads the first question):
renderWelcomePage();
//Create listeners for the 9 remaining questions (#1 is created from the welcome page). Initialize the counter of correct answers
let correctCounter = 0;
let previousCorrectCounter = 0; 
for (i=0; i<9; i++) { renderNextQuestionPage(i) }
// Create listener for creating the summary page once an answer is selected for the 10th question
renderSummaryPage();