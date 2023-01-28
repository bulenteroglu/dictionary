import { Word } from "@/types/word";

export default function WordHeader({ word }: { word: Word }) {
  const hasAudio = word.phonetics.filter((phontic) => phontic.audio)[0];

  function handleAudioClick() {
    new Audio(hasAudio.audio).play();
  }

  return (
    <div className="mt-11 flex items-center justify-between">
      <div>
        <div>{word.word}</div>
        <div>{word.phonetic}</div>
      </div>

      {hasAudio.audio && (
        <div onClick={() => handleAudioClick()}>right play button</div>
      )}
    </div>
  );
}
