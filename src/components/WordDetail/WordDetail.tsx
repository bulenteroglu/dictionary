import { Word, Words } from "@/types/word";
import WordHeader from "../WordHeader/WordHeader";

export default function WordDetail({ words }: { words: Words }) {
  if (!words) return <div>fallback</div>;

  return (
    <div className="w-full">
      {words[0] && <WordHeader word={words[0]} />}
      {words.map((word: Word, index: number) => {
        return (
          <div key={index} className="mt-10">
            {word.meanings.map((meaing, index) => {
              return (
                <div className="mb-10" key={index}>
                  <div>{meaing.partOfSpeech}</div>
                  <div className="mt-10 mb-6">Meaning</div>
                  <ul className="space-y-3">
                    {meaing.definitions.map((definition, index) => {
                      return <li key={index}>{definition.definition}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
