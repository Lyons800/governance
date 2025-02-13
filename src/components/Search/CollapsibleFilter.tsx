import React, { useEffect, useState } from 'react'

import classNames from 'classnames'
import { Header } from 'decentraland-ui/dist/components/Header/Header'

import './CollapsibleFilter.css'

type CollapsibleFilterProps = {
  title: string
  startOpen?: boolean
  children: React.ReactNode
  onChange?: (open: boolean) => void
}

function CollapsibleFilter({ title, children, startOpen, onChange }: CollapsibleFilterProps) {
  const [open, setOpen] = useState(!!startOpen)

  useEffect(() => {
    onChange && onChange(open)
  }, [])

  const toggleHandler = () => {
    setOpen(!open)
    onChange && onChange(!open)
  }

  return (
    <div className={'CollapsibleFilter'}>
      <div className={'FilterHeader'} onClick={toggleHandler}>
        <Header sub className={'FilterHeader__Title'}>
          {title}
        </Header>
        <div className="PlusMinusContainer">
          <div className={classNames('PlusMinus', !open && 'PlusMinus--closed')} />
          <div className="PlusMinus" />
        </div>
      </div>
      <div className={classNames('FilterContent', open && 'FilterContent--open')}>{children}</div>
    </div>
  )
}

export default React.memo(CollapsibleFilter)
