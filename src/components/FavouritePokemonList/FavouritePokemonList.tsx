import React, { useEffect, useState } from 'react'
import { toPokemon } from '../../models'
import { useLazyGetSearchedPokemonsQuery } from '../../store/pokeApi/poke.api'
import { useAppSelector } from '../hooks/redux'
import PokemonItem from '../PokemonItem'
import s from './style.module.scss'


const FavouritePokemonList = () => {
  const {favourite} = useAppSelector(state => state.pokedex)
  const [fetchPokemons, {data}] = useLazyGetSearchedPokemonsQuery()
  const [favPokes, setFavPokes] = useState<toPokemon[]>()

  function handler(f: string){
    const t = data?.filter(poke => poke.name === f)
    return favPokes?.concat(t)
  }

  useEffect(() => {
    fetchPokemons(1154)
  }, [])
  
  useEffect(() => {
    console.log(handler(favourite[0]))
  }, [data])

  return (
    <div className={s.container}>
      <div className={s.list}>
        {/* {favPokes?.map(f => <PokemonItem pokemon={f.url} key={f.url}/>)} */}
      </div>
    </div>
  )
}

export default FavouritePokemonList