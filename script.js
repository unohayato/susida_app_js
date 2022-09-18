const RANDOM_SENTENCE_URL_API = "https://api.quotable.io/random";

/*非同期処理でランダムに文章を取ってくる*/
function GetRandomSentence() {
  return fetch(RANDOM_SENTENCE_URL_API)
  .then((response) => response.json())
  .then((data) => console.log(data.content));
};

GetRandomSentence();