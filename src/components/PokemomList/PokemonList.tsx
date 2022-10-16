import { FC, useEffect, useState } from 'react'
import { Pagin, toPokemon } from '../../models'
import { useGetPokemonsByTypeQuery, useLazyGetPokemonsQuery, useLazyGetSearchedPokemonsQuery } from '../../store/pokeApi/poke.api'
import { useAppSelector } from '../hooks/redux'
import { useDebounce } from '../hooks/useDebounce'
import PokemonItem from '../PokemonItem'
import s from './style.module.scss'

const PokemonList: FC<Pagin> = ({pageSize, offset}) => {
  const [fetchPokemons, {isLoading, data}] = useLazyGetPokemonsQuery()
  const [fetchSearchedPokemons, {isLoading: areSearchedPokemonsLoading, data: allPokemons}] = useLazyGetSearchedPokemonsQuery()
  
  const [searchedPokemons, setSearchedPokemons] = useState<toPokemon[]>()
  const {searchValue, type} = useAppSelector(state => state.pokedex)
  const debounced = useDebounce(searchValue)

  const { data: pokemonsByType } = useGetPokemonsByTypeQuery(type, {
    skip: type === 'Type Filter'
  })

  useEffect(() => {
    fetchSearchedPokemons(1154)
  },[])

  useEffect(() => {
    fetchPokemons({pageSize, offset})
  }, [pageSize, offset])

  useEffect(() => {
    if (debounced) {
      fetchSearchedPokemons(1154)
      setSearchedPokemons(allPokemons?.filter(poke => poke.name.includes(debounced)))}
  }, [debounced])

  return (
    <div className={s.container}>
      <div className={s.list}>
        {type !== 'Type Filter' && !debounced && 
        pokemonsByType?.map(poke => <PokemonItem pokemon={poke.pokemon.url} key={poke.pokemon.url}/>)}
        {debounced && type === 'Type Filter' &&
        searchedPokemons?.map(poke => <PokemonItem pokemon={poke.url} key={poke.url}/>)}
        {!debounced && type === 'Type Filter' &&
        (isLoading ? <p>Loading...</p>:
        data?.map(poke => <PokemonItem pokemon={poke.url} key={poke.url}/>))}
      </div>
    </div>
  )
}

export default PokemonList