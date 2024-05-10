import React from "react";

const HiraganaCard = ({ character }) => {
  return (
    <div className="hiragana-card col-md-4">
      <p className="text-primary">
        {character.japanese} - {character.romaji}
      </p>
      {character.examples && (
        <ul>
          {character.examples.map((example, idx) => (
            <li key={idx}>
              {example.japanese} - {example.romaji} - {example.meaning}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default HiraganaCard;
