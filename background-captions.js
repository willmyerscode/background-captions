/**
* Background Captions
* Copyright Will-Myers.com
*/

class BackgroundCaptions {
  constructor() {
    this.init();
  }

  init() {
    this.buildCaptions();
  }

  buildCaptions() {
    // Find All Captions
    let allCaptions = document.querySelectorAll(
      '[data-wm-plugin="background-captions"]'
    );

    // Loop Through All Instances
    for (let caption of allCaptions) {
      // Finds The Content Wrapper
      let captionParent = caption.closest(".content-wrapper");
      // Finds The Parent Section
      let section = captionParent.parentElement;
      // Find Caption Inner Text
      let captionText = caption.innerHTML;

      // Data Attributes
      // Find Style
      let style = caption.getAttribute("data-style") || "basic";
      style = style.toLowerCase();
      style = style.trim();

      // Find Action
      let action = caption.getAttribute("data-action") || "hover";
      action = action.toLowerCase();
      action = action.trim();

      // Find Icon
      let icon = caption.getAttribute("data-icon") || "info";
      icon = icon.toLowerCase();
      icon = icon.trim();

      // Icons
      let camera = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM196 160l6.2-16.4c3.5-9.4 12.5-15.6 22.5-15.6h62.7c10 0 19 6.2 22.5 15.6L316 160h36c17.7 0 32 14.3 32 32V320c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32h36zm108 96a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"/></svg>`;

      let info = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
  <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z"></path>
  </svg>`;

      // Set Icon
      if (icon.includes("info")) {
        icon = info;
      } else if (icon.includes("camera")) {
        icon = camera;
      } else {
        console.log("Invalid Icon Type");
      }

      // Create Elements

      // Create Caption Container Element
      let captionContainer = document.createElement("div");
      captionContainer.classList.add("caption-container");
      captionContainer.classList.add("wm-background-captions");

      // Create Caption Text Element
      let captionTextElement = document.createElement("div");
      captionTextElement.classList.add("caption");
      captionTextElement.innerHTML = captionText;

      // Create Icon Button Element
      let iconElement = document.createElement("button");
      iconElement.classList.add("caption-icon");

      // Build
      captionContainer.append(captionTextElement);
      // Basic
      if (style.includes("basic")) {
        captionContainer.classList.add("style-basic");
      }

      // Icon
      else if (style.includes("icon")) {
        captionTextElement.classList.add("hide-caption");
        captionContainer.classList.add("style-icon");
        iconElement.insertAdjacentHTML("afterbegin", icon);
        captionContainer.append(iconElement);
      }

      // Basic Inline
      else if (style.includes("inline")) {
        // Create Inline Icon Element
        let inlineIcon = document.createElement("div");
        inlineIcon.classList.add("inline-icon");
        captionContainer.classList.add("style-inline");
        inlineIcon.insertAdjacentHTML("afterbegin", icon);
        captionTextElement.prepend(inlineIcon);
      } else {
        console.log("Invalid Style Type");
      }

      // Add Caption to Section
      section.insertAdjacentElement("beforeend", captionContainer);

      // Icon Style Show & Hide
      if (style.includes("icon") && action.includes("hover")) {
        captionContainer.addEventListener("mouseenter", function () {
          captionTextElement.style.display = "block";
        });

        captionContainer.addEventListener("mouseleave", function () {
          captionTextElement.style.display = "";
        });
      } else if (style.includes("icon") && action.includes("click")) {
        captionContainer.addEventListener("click", function () {
          captionTextElement.classList.toggle("show-caption");
        });
      }

      // End of For Loop
    }

    // End of Function
  }

  // End of Class
}

let wmBackgroundCaptions = new BackgroundCaptions();
