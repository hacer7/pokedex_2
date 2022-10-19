import { Modal } from "antd";
import { FC, SetStateAction } from "react";
import { IPokemon } from "../../models";
import PokeStats from "../PokeStats";
import TypeItem from "../PokeTypes/TypeItem";
import s from "./style.module.scss";

interface Props {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<SetStateAction<boolean>>;
  pokemon: IPokemon | undefined;
}

const PokeInfo: FC<Props> = ({ isModalOpen, setIsModalOpen, pokemon }) => {
  function toBig(name: string): string {
    const arr = name.split("")
    arr[0] = arr[0].toUpperCase()
    return arr.join("")
  }
  
  return (
    <>
      <Modal
        title={toBig(pokemon?.name ?? "")}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <div className={s.img}>
          <span>#{pokemon?.id}</span>
          <img src={pokemon?.sprites.front_default ?? 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/769px-Pokebola-pokeball-png-0.png'}
          alt="" />
          <div>
            <p>height: {pokemon?.height}</p>
            <p>weight: {pokemon?.weight}</p>
          </div>
        </div>
        <div className={s.statsAndTypes}>
          <div className={s.stats}>
            <PokeStats stats={pokemon?.stats}/>
          </div>
          <div className={s.types}>
            {pokemon?.types.map(type => <TypeItem value={type.type.name} key={type.type.name}/>)}
          </div>
        </div>
      </Modal>
    </>
  )
}

export default PokeInfo;
