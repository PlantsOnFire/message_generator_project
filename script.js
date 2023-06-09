//Lyrics
let rockBeginnings1 = ["I wanna ", "Let's get ready and ", "Tonight is the night to ", "We are in the mood to ", "You and I will ", "In this night we ", "Now is the time to ", "I will always "];
let rockMiddles1 = ["rock with you ", "stay this way ", "rock ", "love you "];
let rockEndings1 = ["and party all the time!", "forever!", "until the end of time!", "every night!"];
let rockBeginnings2 = ["We are the ", "Be the ", "Believe in the ", "This is the ", "Now it's time for the "];
let rockMiddles2 = ["light! ", "night! ", "best! ", "party! ", "rock! " ];
let rockEndings2 = ["And we're never gonna stop!", "So let's live it up!", "Shout it out loud!", "Make some noise!", "Stand your ground and shout!", "Let me hear you say it!"];
let rockBeginnings3 = ["So now we say ", "Don't let me down! Because ", "She was like, ", "Have you heard that ", ""];
let rockMiddles3 = ["it's gonna be alright ", "the air is filled with romance ", "the night is young and so are we, ", "the rhythm of our bodies is hot, "];
let rockEndings3 = ["my Darling.", "my love.", "friends.", "everyone."];
let rockLines = [[rockBeginnings1, rockMiddles1, rockEndings1], [rockBeginnings2, rockMiddles2, rockEndings2], [rockBeginnings3, rockMiddles3, rockEndings3]];

//Titles
let rockFirstTitle = ["Purple ", "Red ", "Black ", "Dark ", "Silent ", "Metal ", "Heavy ", "Thunder ", "Dust ", "Devil ", "No Rest ", "Evil ", "Party "];
let rockSecondTitle = ["Rain", "Winds", "Heart", "Rising", "Devil", "Hell", "Motel", "Drive", "Rush"];

//Generate Lyrics
let generateLyricsButton = document.getElementById("generateLyrics");
generateLyricsButton.addEventListener("click", generateLyrics);
generateLyricsButton.addEventListener("click", generateTitle);

function generateLyrics() {
  let numberOfLines = document.getElementById("numberOfLyrics").value;
  let genreSelect = document.getElementById("genre").value;
  let completeSong = [];
  switch (genreSelect) {
    case "rock":
      for (let i = 0; i < numberOfLines; i++) {
        let randomNumber = Math.floor(Math.random() * 3);
        let beginningOptions = rockLines[randomNumber][0].length;
        let middleOptions = rockLines[randomNumber][1].length;
        let endingOptions = rockLines[randomNumber][2].length;
        let randomBeginning = Math.floor(Math.random() * beginningOptions);
        let randomMiddle = Math.floor(Math.random() * middleOptions);
        let randomEnding = Math.floor(Math.random() * endingOptions);
        completeSong.push(rockLines[randomNumber][0][randomBeginning] + rockLines[randomNumber][1][randomMiddle] + rockLines[randomNumber][2][randomEnding]);
        console.log(completeSong, randomNumber, randomBeginning, randomMiddle, randomEnding);
      };
      break;
    case "love":
      //insert logic for love songs
      break;
    case "jazz":
        //insert logic for jazz songs
        break;
    case "country":
        //insert logic for country songs
        break;
    case "pop":
      //insert logic for pop songs
      break;
  };

  let songLength = completeSong.length;
  let formattedSong = "";
  for (let i=0; i < songLength; i++) {
    let unformattedLine = completeSong[i];
    let formattedLine = unformattedLine.charAt(0).toUpperCase() + unformattedLine.slice(1) + "<br>";
    formattedSong += formattedLine;
  }
  document.getElementById("songContent").innerHTML = formattedSong;
}

function generateTitle() {
  let genreSelect = document.getElementById("genre").value;
  let title = '';
  switch (genreSelect) {
    case "rock":
      let random1 = Math.floor(Math.random() * (rockFirstTitle.length -1));
      let random2 = Math.floor(Math.random() * (rockSecondTitle.length -1));
      title = rockFirstTitle[random1] + rockSecondTitle[random2];
      break;
    case "love":
      //insert logic for love song title
      break;
    case "jazz":
      //insert logic for jazz song title
      break;
    case "country":
      //insert logic for country song title
      break;
    case "pop":
      //insert logic for country song title
      break;
    default:
      title = "You did not select a genre";
  }

  document.getElementById("songTitle").innerHTML = title;
}

//Clear Song
let clearSongButton = document.getElementById("clearSong");
clearSongButton.addEventListener("click", clearSong);

function clearSong() {
  document.getElementById("songContent").innerHTML = "";
  document.getElementById("songTitle").innerHTML ="";
  completeSong = [];
}