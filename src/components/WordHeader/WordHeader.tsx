import { Word } from "@/types/word";
import Icon from "../Icon/Icon";

export default function WordHeader({ word }: { word: Word }) {
  const hasAudio = word.phonetics.filter((phontic) => phontic.audio)[0];

  function handleAudioClick() {
    new Audio(hasAudio.audio).play();
  }

  return (
    <div className="mt-11 flex items-center justify-between">
      <div>
        <h2 className="text-16">{word.word}</h2>
        <span className="text-6 text-purple">{word.phonetic}</span>
      </div>

      {hasAudio.audio && (
        <div onClick={() => handleAudioClick()} className="cursor-pointer">
          <Icon type="Play" />
        </div>
      )}
    </div>
  );
}
