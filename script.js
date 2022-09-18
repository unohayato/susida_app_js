const RANDOM_SENTENCE_URL_API = "https://api.quotable.io/random";
const typeDisplay = document.getElementById("typeDisplay");

/*非同期処理でランダムに文章を取ってくる*/
function GetRandomSentence() {
  return fetch(RANDOM_SENTENCE_URL_API)
  .then((response) => response.json())
  .then((data) => data.content);
};

/*ランダムな文章を取得して、表示する*/

async function RenderNextSentence() {
  const sentence = await GetRandomSentence();
  console.log(sentence);

  typeDisplay.innerText = "";
  /*文章を一文字ずつ分解して、spanタグを生成*/
  let oneText = sentence.split("");
  oneText.forEach((character) => {
    const characterSpan = document.createElement("span");
    characterSpan.innerText = character;
    //console.log(characterSpan);
    typeDisplay.appendChild(characterSpan);
    characterSpan.classList.add("correct");
  });
    

};

RenderNextSentence();