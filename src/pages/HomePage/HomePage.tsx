import { Pagination, PaginationProps } from 'antd'
import React, { useState } from 'react'
import Header from '../../components/Header'
import { useAppSelector } from '../../components/hooks/redux'
import PokemonList from '../../components/PokemomList'
import s from './style.module.scss'

const HomePage = () => {
  const [pageSize, setPageSize] = useState(10);
  const [offset, setOffset] = useState(0);
  const {searchValue, type} = useAppSelector(state => state.pokedex)

  const onShowSizeChange: PaginationProps["onShowSizeChange"] = (current, pageSize) => {
    setPageSize(pageSize);
    setOffset((current - 1) * pageSize);
  }
  
  return (
    <div className={s.container}>
      <Header/>
      <PokemonList pageSize={pageSize} offset={offset}/>
      {!searchValue && type === 'Type Filter' && <div className={s.pag}><Pagination
          onChange={onShowSizeChange}
          onShowSizeChange={onShowSizeChange}
          defaultCurrent={1}
          total={1154}
        /></div>}
    </div>
  )
}

export default HomePage