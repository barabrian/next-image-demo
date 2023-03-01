import { ReactNode } from 'react'
import styles from './Frame.module.css'

export const Frame = ({
  children,
  ratio,
  button,
}: {
  children: ReactNode
  ratio?: boolean
  button?: boolean
}) => {
  return (
    <div className={`${styles.frame} ${button ? ' px-5 py-2' : ' p-5'}`}>
      <div className={ratio ? 'pt-[56.25%]' : ''}>{children}</div>
    </div>
  )
}
