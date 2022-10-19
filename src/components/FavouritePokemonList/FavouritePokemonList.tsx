import { useEffect, useState } from 'react'
import { useAppSelector } from '../hooks/redux'
import { useDebounce } from '../hooks/useDebounce'
import PokemonItem from '../PokemonItem'
import s from './style.module.scss'


const FavouritePokemonList = () => {
  const {favourite, searchValue} = useAppSelector(state => state.pokedex)
  const debounced = useDebounce(searchValue)
  const [searched, setSearched] = useState<string[]>()

  useEffect(() => {
    setSearched(favourite.filter(f => f.includes(debounced)))
  }, [debounced])

  return (
    <div className={s.container}>
      <div className={s.list}>
        {!debounced ?
        favourite?.map(f => <PokemonItem pokemon={f} key={f}/>):
        debounced &&
        searched?.map(f => <PokemonItem pokemon={f} key={f}/>)}
      </div>
    </div>
  )
}

export default FavouritePokemonList