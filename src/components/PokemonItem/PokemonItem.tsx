import React, { useEffect, useState } from 'react'
import EmptyHeartIcon from '../../assets/svgs/EmptyHeartIcon'
import FillHeartIcon from '../../assets/svgs/FillHeartIcon'
import { useGetPokemonQuery } from '../../store/pokeApi/poke.api'
import { useActions } from '../hooks/actions'
import { useAppSelector } from '../hooks/redux'
import TypeItem from '../PokeTypes/TypeItem'
import s from './style.module.scss'

const PokemonItem = ({pokemon}: {pokemon: string}) => {
  const {data} = useGetPokemonQuery(pokemon)
  const [heart, setHeart] = useState(false)
  const {addFavourite, removeFavourite} = useActions()
  const {favourite} = useAppSelector(state => state.pokedex)

  function handler(){
    setHeart(!heart)
    !heart ? 
    addFavourite(data?.name || ''):
    removeFavourite(data?.name || '')
  }

  useEffect(() => {
    favourite.map(f => f === data?.name && setHeart(true))
  }, [data])

  return (
    <div className={s.container}>
      <div className={s.name}>{data?.name}</div>
      {heart ? 
      <FillHeartIcon className={s.heart} onClick={handler}/>:
      <EmptyHeartIcon className={s.heart} onClick={handler}/>}
      <div className={s.img} >
        <img 
        src={data?.sprites.front_default || 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/769px-Pokebola-pokeball-png-0.png'} 
        alt={data?.name}/>
        <div className={s.blur}></div>
      </div>
      <div className={s.types}>{data?.types.map(type => <TypeItem value={type.type.name} key={type.type.name}/>)}</div>
      <div className={s.id}>#{data?.id}</div>
    </div>
  )
}

export default PokemonItem