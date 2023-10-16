"use strict";
// content.ts
const ytButtonString = '<yt-button-shape id="button-shape" version="modern" class="style-scope ytd-menu-renderer"><button class="yt-spec-button-shape-next yt-spec-button-shape-next--tonal yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-m yt-spec-button-shape-next--icon-button" title="" style="" aria-label="More actions"><div class="yt-spec-button-shape-next__icon" aria-hidden="true"><yt-icon style="width: 24px; height: 24px;"><!--css-build:shady--><!--css-build:shady--><yt-icon-shape class="style-scope yt-icon"><icon-shape class="yt-spec-icon-shape"><div style="width: 100%; height: 100%; fill: currentcolor;"><svg height="24" viewBox="0 0 24 24" width="24" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;"><path d="M7.5 12c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm4.5-1.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm6 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path></svg></div></icon-shape></yt-icon-shape></yt-icon></div><yt-touch-feedback-shape style="border-radius: inherit;"><div class="yt-spec-touch-feedback-shape yt-spec-touch-feedback-shape--touch-response" aria-hidden="true"><div class="yt-spec-touch-feedback-shape__stroke" style=""></div><div class="yt-spec-touch-feedback-shape__fill" style=""></div></div></yt-touch-feedback-shape></button></yt-button-shape>';
const addQuizButton = () => {
    const existingButton = document.querySelector("#quizMeButton");
    if (existingButton)
        return;
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
    const belowContainer = document.querySelector("#below");
    const commentsContainer = document.querySelector("#comments");
    if (commentsContainer && belowContainer) {
        belowContainer.insertBefore(button, commentsContainer);
    }
    else {
        console.log("Error: Cannot find comments container");
    }
};
const addQuizElement = () => {
};
addQuizButton();
