import React from 'react'

import classNames from 'classnames'

import { navigate } from '../../utils/locations'
import Text from '../Common/Typography/Text'

import './FilterLabel.css'

export type FilterLabelProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> & {
  active?: boolean
  label: string
}

export default React.memo(function FilterLabel({ active, label, className, ...props }: FilterLabelProps) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (props.onClick) {
      props.onClick(e)
    }

    if (!e.defaultPrevented) {
      e.preventDefault()

      if (props.href) {
        navigate(props.href)
      }
    }
  }

  return (
    <a
      {...props}
      onClick={handleClick}
      className={classNames('FilterLabel', active && 'FilterLabel--active', className)}
    >
      <span>
        <Text weight="semi-bold" className="FilterLabel__Text">
          {label}
        </Text>
      </span>
    </a>
  )
})
