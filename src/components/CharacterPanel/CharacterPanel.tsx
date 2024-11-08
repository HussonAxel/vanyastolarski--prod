
import { CharacterPanelProps } from "./CharacterPanel.type";

const CharacterPanel = ({ name, resume, picture }: CharacterPanelProps) => {
  return (
    <div className="flex flex-row mx-auto w-fit gap-16 py-32">
      <article>
        <img src={picture} alt="" />
        <div>
          <h3>{name}</h3>
          <p>{resume}</p>
        </div>
      </article>
    </div>
  );
};


export default CharacterPanel