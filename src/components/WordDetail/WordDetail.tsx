import { Word, Words } from "@/types/word";

export default function WordDetail({ words }: { words: Words }) {
  if (!words) return <div>fallback</div>;
  return (
    <div>
      {words.map((word: Word, index: number) => {
        return (
          <div key={index}>
            <div>{word.word}</div>
          </div>
        );
      })}
    </div>
  );
}
