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
                  <div className="flex items-center">
                    <span className="text-6 font-bold italic">
                      {meaing.partOfSpeech}
                    </span>
                    <div className="ml-5 h-px w-full bg-gray-light"></div>
                  </div>

                  <div className="mt-10 mb-6 text-5 text-gray-text">
                    Meaning
                  </div>
                  <ul className="space-y-3">
                    {meaing.definitions.map((definition, index) => {
                      return (
                        <li className="ml-10 list-disc text-4.5" key={index}>
                          {definition.definition}
                        </li>
                      );
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
