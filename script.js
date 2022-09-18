const RANDOM_SENTENCE_URL_API = "https://api.quotable.io/random";

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
};

RenderNextSentence();