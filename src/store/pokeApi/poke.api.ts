import { IPokemon, ServerResponse, toPokemon, IType, Pokemon } from './../../models';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { Pagin } from '../../models'

export const pokeApi = createApi({
    reducerPath: 'poke/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://pokeapi.co/api/v2/'
    }),
    endpoints: build => ({
        getPokemons: build.query<toPokemon[], Pagin>({
            query: ({pageSize, offset}) => ({
                url: 'pokemon',
                params:{
                    limit: pageSize,
                    offset: offset
                }
            }),
            transformResponse: (response: ServerResponse<toPokemon>) => response.results 
        }),
        getPokemon: build.query<IPokemon, string>({
            query: pokeUrl => `${pokeUrl}` 
        }),
        getSearchedPokemons: build.query<toPokemon[], number>({
            query: count => ({
                url: 'pokemon',
                params: {
                    limit: count
                }
            }),
            transformResponse: (response: ServerResponse<toPokemon>) => response.results 
        }),
        getPokemonsByType: build.query<Pokemon<toPokemon>[], string>({
            query: type => `type/${type}`,
            transformResponse: (response: IType<Pokemon<toPokemon>>) => response.pokemon
        })
    })
})

export const {useLazyGetPokemonsQuery, 
    useGetPokemonQuery, 
    useLazyGetSearchedPokemonsQuery, 
    useGetPokemonsByTypeQuery} = pokeApi
