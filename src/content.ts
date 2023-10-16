// content.ts

const addQuizButton = () => {
  const existingButton: HTMLButtonElement | null = document.querySelector("#quizMeButton");
  if (existingButton) return;

  const button = document.createElement("button");
  button.id = "quizMeButton";
  button.textContent = "Quiz Me!";
  button.style.backgroundColor = "#FF0000"; // Red background color similar to YouTube's primary color
  button.style.color = "#FFFFFF"; // White text color
  button.style.fontWeight = "bold";
  button.style.padding = "10px 20px";
  button.style.border = "none";
  button.style.borderRadius = "4px";
  button.style.cursor = "pointer";
  button.addEventListener("click", () => {
    // Add your button's functionality here
    alert("Button clicked!");
  });

  const belowContainer: HTMLElement | null = document.querySelector("#below"); 
  const commentsContainer: HTMLElement | null = document.querySelector("#comments"); 
  if (commentsContainer && belowContainer) {
    belowContainer.insertBefore(button, commentsContainer);
  } else {
    console.log("Error: Cannot find comments container");
  }
};

const addQuizElement = () => {
  const quizMeButton: HTMLButtonElement | null = document.querySelector("#quizMeButton");
  if(!quizMeButton) {
    console.log("Error: Cannot find quizMeButton");
    return;
  }

  //Create quiz from ChatGPT api

  //Add quiz to page
  const quizElement = document.createElement("div");

};

addQuizButton();

