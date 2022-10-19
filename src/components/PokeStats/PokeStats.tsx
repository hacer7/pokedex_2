import { Progress } from "antd";
import React from "react";
import { Stats } from "../../models";
import s from './style.module.scss'

const PokeStats = ({stats}: {stats:Stats[] | undefined}) => {
  return (
    <>
      {stats?.map(stat => <React.Fragment key={stat.base_stat}><span>{stat.stat.name}</span><div className={s.statItem}>
        <Progress percent={stat.base_stat} showInfo={false}/>
        <span>{stat.base_stat}</span></div></React.Fragment>)}
    </>
  )
}

export default PokeStats
