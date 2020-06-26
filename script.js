document.addEventListener("DOMContentLoaded", () => {
document.querySelector("input").addEventListener("keydown", function(e) {
  let input = document.getElementById("input").value;
  if (e.code == "Enter") {
    console.log("the form was clicked and enter button was pressed");
    output(input);
  }
});
});

const trigger = [
//0 
["hi", "hey", "hello"],
//1
["petition", "sign"],
//2
["protest", "march"],
//3
["systemic","racism", "educate"],
//6
["thanks"],
//7
["bye", "goodbye",]
];

const reply = [
//0 
["Hello, how can I help?"], 
//1
["https://www.change.org/p/mayor-jacob-frey-justice-for-george-floyd?recruiter=895898514&utm_source=share_petition&utm_medium=twitter&utm_campaign=psf_combo_share_initial&utm_term=psf_combo_share_initial&recruited_by_id=6a4669c0-a74d-11e8-a554-dd9015f4e479", "https://act.colorofchange.org/sign/justiceforbre-breonna-taylor-officers-fired?source=coc_main_website", "https://www.change.org/p/federal-bureau-of-investigation-disbarment-of-george-e-barnhill", "https://www.change.org/p/justice-for-tony-mcdade"],

//2
[
    "https://www.google.com/maps/d/u/0/viewer?ll=45.45999874738873%2C-105.47455113162795&z=5&mid=1W3fsF5-Mz3_KaBgVt2pU8BDY5GkawUN_"
  ],
//3
["https://www.youtube.com/watch?v=YrHIQIO_bdQ&feature=youtu.be"],

["You're welcome", "No problem"],
//7
["Goodbye", "See you later"],
];

const alternative = [
  "Try to talk about racial injustice",
  "One word please"
  
];

function compare(triggerArray, replyArray, text) {
  let item;
  for (let x = 0; x < triggerArray.length; x++) {
    for (let y = 0; y < replyArray.length; y++) {
      if (triggerArray[x][y] == text) {
        items = replyArray[x];
        item = items[Math.floor(Math.random() * items.length)];
      }
    }
  }
  return item;
}
function output(input) {
  let product;
  let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  text = text.replace(/ a /g, " ").replace(/i feel /g, "").replace(/whats/g, "what is").replace(/please /g, "").replace(/ please/g, "");
  if (compare(trigger, reply, text)) {
    product = compare(trigger, reply, text);
  } else if (text.match(/robot/gi)) {
    product = robot[Math.floor(Math.random() * robot.length)];
  } else {
    product = alternative[Math.floor(Math.random() * alternative.length)];
  }
  addChat(input,product);
 
}
function addChat(input, product) {
  const mainDiv = document.getElementById("main");
  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.innerHTML = `You: <span id="user-response">${input}</span>`;
  mainDiv.appendChild(userDiv);

  let botDiv = document.createElement("div");
  botDiv.id = "bot";
  botDiv.innerHTML = `Chatbot: <span id="bot-response">${product}</span>`;
  mainDiv.appendChild(botDiv);

}
