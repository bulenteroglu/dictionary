import axios from "axios";

export default async function getWord(word: string) {
  const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  try {
    const res = await axios.get(apiUrl);
    return res.data;
  } catch (err) {
    console.log(err);
  }
}
