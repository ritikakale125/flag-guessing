const flags = [
    {
        src: "images/Flag_of_Turkey.svg.png",
        country: "Turkey",
        options: ["Turkey", "Canada", "United Kingdom", "Australia"]
    },
    {
        src: "images/Flag_of_Canada.svg.png",
        country: "Canada",
        options: ["United States", "Canada", "Mexico", "Spain"]
    },
    {
        src: "images/Flag_of_the_United_Kingdom_(1-2).svg.png",
        country: "United Kingdom",
        options: ["United States", "Canada", "United Kingdom", "Australia"]
    },
    {
        src: "images/Flag_of_Australia_(converted).svg.png",
        country: "Australia",
        options: ["United States", "Canada", "Mexico", "Australia"]
    },
    {
        src: "images/Flag_of_Mexico.svg.png",
        country: "Mexico",
        options: ["United States", "Canada", "Mexico", "Australia"]
    },
    {
        src: "images/Flag_of_Spain.svg.png",
        country: "Spain",
        options: ["Spain", "France", "Portugal", "Greece"]
    },
    {
        src: "images/Flag_of_France.svg.png",
        country: "France",
        options: ["Spain", "France", "Portugal", "Greece"]
    },
    {
        src: "images/Flag_of_Argentina.svg.png",
        country: "Argentina",
        options: ["Spain", "France", "Portugal", "Argentina"]
    },
    {
        src: "images/Flag_of_Germany.svg.png",
        country: "Germany",
        options: ["Germany", "France", "Portugal", "Greece"]
    },
    {
        src: "images/Flag_of_India.svg.png",
        country: "India",
        options: ["India", "Canada", "Mexico", "Australia"]
    },
    {
        src: "images/Flag_of_Italy.svg.png",
        country: "Italy",
        options: ["Italy", "Canada", "Mexico", "Australia"]
    },
    {
        src: "images/Flag_of_Japan.svg.png",
        country: "Japan",
        options: ["Japan", "Canada", "Mexico", "Australia"]
    },
    {
        src: "images/Flag_of_North_Korea.svg.png",
        country: "North Korea",
        options: ["North Korea", "Canada", "Mexico", "Norway"]
    },
    {
        src: "images/Flag_of_New_Zealand.svg.png",
        country: "New Zealand",
        options: ["New Zealand", "Canada", "Mexico", "Australia"]
    },
    {
        src: "images/Flag_of_Sri_Lanka.svg.png",
        country: "Sri Lanka",
        options: ["Sri Lanka", "Canada", "Mexico", "Australia"]
    },
    {
        src: "images/Flag_of_Norway.svg.png",
        country: "Norway",
        options: ["Norway", "Canada", "Mexico", "Australia"]
    },
    {
        src: "images/Flag_of_Thailand.svg.png",
        country: "Thailand",
        options: ["Thailand", "Canada", "Mexico", "Australia"]
    },
    {
        src: "images/Flag_of_the_Philippines.svg.png",
        country: "Philippines",
        options: ["Philippines", "Canada", "Mexico", "Australia"]
    },
    {
        src: "images/Flag_of_Switzerland.svg.png",
        country: "Switzerland",
        options: ["Switzerland", "Canada", "Mexico", "Australia"]
    }
  ];
  let currentFlagIndex = 0;
  let tokens = 0;
  
  function shuffleArray(array) {
    // Fisher-Yates (Knuth) shuffle
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  function loadFlag() {
    // Get a random flag
    currentFlagIndex = Math.floor(Math.random() * flags.length);
    const flag = flags[currentFlagIndex];
  
    // Shuffle the options
    shuffleArray(flag.options);
  
    // Update UI elements
    document.getElementById("flag").src = flag.src;
    const buttons = document.querySelectorAll(".option-btn");
    buttons.forEach((button, index) => {
        button.textContent = flag.options[index];
    });
    document.getElementById("result").textContent = "";
    document.getElementById("next-btn").style.display = "none";
  }
  
  function checkAnswer(selectedIndex) {
    const flag = flags[currentFlagIndex];
    const selectedOption = flag.options[selectedIndex];
    if (selectedOption === flag.country) {
        document.getElementById("result").textContent = `Correct!`;
        tokens += 1;
    } else {
        document.getElementById("result").textContent = `Wrong! The correct answer was ${flag.country}`;
    }
    document.getElementById("token-counter").textContent =`Tokens: ${tokens}`;
    document.getElementById("next-btn").style.display = "inline-block";
  }
  
  function nextFlag() {
    currentFlagIndex = (currentFlagIndex + 1) % flags.length;
    loadFlag();
  }
  
  document.addEventListener("DOMContentLoaded", loadFlag);