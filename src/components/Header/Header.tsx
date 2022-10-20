import { Button, Input, Popover } from 'antd'
import React, { FC, ReactNode, useState } from 'react'
import { Link } from 'react-router-dom'
import { useActions } from '../hooks/actions'
import { useAppSelector } from '../hooks/redux'
import Layout from '../Layout'
import TypeItem from '../PokeTypes/TypeItem'
import { types } from '../PokeTypes/types'
import s from './style.module.scss'

const Header = () => {
  const { saveTypeValue, saveSearchValue } = useActions()

  const content = (
    <div className={s.chooseType}>
      {types.map(type =>
        <div className={s.type} key={type.name} onClick={() => {
          saveTypeValue(type.name)
          setTypeFilter(type.name)
          setIsOpen(false)
        }}>
          <TypeItem value={type.name} />
        </div>)}
      <div className={s.clearButton} onClick={() => {
        saveTypeValue('Type Filter')
        setTypeFilter('Type Filter')
        setIsOpen(false)
      }}>clear</div>
    </div>
  )

  const handleOpenChange = (newOpen: boolean) => {
    setIsOpen(newOpen);
  }

  const { type, searchValue } = useAppSelector(state => state.pokedex)
  const [typeFilter, setTypeFilter] = useState('Type Filter')
  const [isOpen, setIsOpen] = useState(false)
  const [isTypeFilter, setIsTypeFilter] = useState(true)

  return (
    <div className={s.header}>
      <div className={s.title}>POKEDEX</div>
      <div className={s.toFav}>
        <Link to='/' className={s.links} onClick={() => setIsTypeFilter(true)}>Home</Link>
        <Link to='/favourites' className={s.links} onClick={() => setIsTypeFilter(false)}>Favourites</Link>
      </div>
      {!searchValue && isTypeFilter && <Popover placement="bottom" content={content} trigger='click' open={isOpen} onOpenChange={handleOpenChange} className={s.typesFilter}>
        <Button className={s.tfButton}>{typeFilter}</Button>
      </Popover>}
      {type === 'Type Filter' && <Input
        placeholder="Search pokemon"
        className={s.input}
        onChange={event => saveSearchValue(event.target.value)} />}
    </div>
  )
}

export default Header