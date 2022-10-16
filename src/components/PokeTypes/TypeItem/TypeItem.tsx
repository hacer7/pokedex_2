import React from 'react'
import { types } from '../types'
import s from './style.module.scss'
import { LoadingOutlined } from '@ant-design/icons'

const TypeItem = ({value}: {value: string}) => {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <>
    {types.map(type => 
      {if (type.name === value){
        return <div className={s.container} style={{background: type.color}} key={type.color}>{value}</div>
      }
      })}
    </>
  )
}

export default TypeItem