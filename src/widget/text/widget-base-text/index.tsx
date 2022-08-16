import {
  FC,
  HTMLAttributes
} from 'react'
import { IAnyObject } from '@src/types'
import './index.scss'


interface IBaseTextProps extends HTMLAttributes<HTMLDivElement> {
  // 数据，模拟跟真实数据都走这里
  data: IAnyObject,
  // 字段名
  field: string;
}

const BaseText: FC<IBaseTextProps> = ({
  data = {},
  field = 'value',
  className,
  children,
  ...rest
}) => {
  return (
    <div
      className={`app-element app-element__basetext ${className || ''}`} {...rest}>
      {data && data[field] ? data[field] : '文本框'}
    </div>
  )
}
export default BaseText 