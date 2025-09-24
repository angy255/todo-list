const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const slothDiv = document.getElementById("slothReaction");

// add audio
//I like adding audio this way, seems like the easiest way to do it https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio
const clickSound = new Audio("images/costarica.mp3"); 

// attach audio to first click on input
const taskInput = document.getElementById("taskInput");

// Play audio on (click)
taskInput.addEventListener("focus", function() {
  clickSound.play();
});



// Add new task
// using .trim() ensures user adds real, non-empty tasks/not just blank space
//asked chatgpt about it and then found more info on mdn https://developer.
// mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim

    document.querySelector(".addTask").addEventListener("click", function() {
      const taskText = input.value.trim();
      if (taskText === "") return;

      const li = document.createElement("li");
      li.textContent = taskText;

// Toggle complete on click
//I remembered appendChild from another project we worked on, I asked chatgpt about it and also looked 
//up more info on mdn https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
      li.addEventListener("click", function() {
        li.classList.toggle("completed");
        showRandomSloth();
      });

      taskList.appendChild(li);
      input.value = "";
    });

// Show random sloth image briefly
//chatgpt again, looked up again more info on mdn
//https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout
    function showRandomSloth() {
      const img = document.createElement("img");
      img.src = getRandomSlothImage();

      slothDiv.innerHTML = "";
      slothDiv.appendChild(img);
      slothDiv.style.opacity = 1;

      setTimeout(function() {
        slothDiv.style.opacity = 0;
      }, 3000);
    }

// Get a random sloth image when you complete a task
    function getRandomSlothImage() {
      const slothImages = [
        "images/slothbaby.jpg",
        "images/slothcuddle.jpg",
        "images/slothrescue.jpg",
        "images/rainforest4.jpg",
        "images/slothcamouflage.jpg",
        "images/slothdangle.jpg",
        "images/slotheats.jpg",
        "images/slothhang.jpg",
        "images/slothhappy.jpg",
        "images/slothleaves.jpg",
        "images/slothsnore.jpg",
        "images/slothyawn.jpg"
      ];
      return slothImages[Math.floor(Math.random() * slothImages.length)];
    }

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
//and chatgpt help


// Clear completed tasks
// decided to use addEventListener so I can become more comfortable with it than sticking to onclick in html
// also used querySelectorAll https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll

document.querySelector(".clearCompleted").addEventListener("click", function () {
  const completed = document.querySelectorAll("li.completed");
  for (let i = 0; i < completed.length; i++) {
    completed[i].remove();
  }
});

// Clear all tasks

document.querySelector(".clearAll").addEventListener("click", function () {
  const all = document.querySelectorAll("li");
  for (let i = 0; i < all.length; i++) {
    all[i].remove();
  }
});
