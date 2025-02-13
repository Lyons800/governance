import React from 'react'

import { Button } from 'decentraland-ui/dist/components/Button/Button'

import useFormatMessage from '../../../hooks/useFormatMessage'
import { env } from '../../../utils/env'
import Pill from '../../Common/Pill'
import Markdown from '../../Common/Typography/Markdown'

import './DetailsSection.css'
import './VestingContract.css'

const VESTING_DASHBOARD_URL = env('GATSBY_VESTING_DASHBOARD_URL')

interface Props {
  vestingAddress: string
}

function VestingContract({ vestingAddress }: Props) {
  const t = useFormatMessage()

  if (!VESTING_DASHBOARD_URL) {
    console.error('Vesting Dashboard URL not found')
    return <></>
  }

  const url = VESTING_DASHBOARD_URL.replace('%23', '#').concat(vestingAddress.toLowerCase())

  return (
    <div className="VestingContract DetailsSection DetailsSection--shiny">
      <div className="DetailsSection__Content">
        <Pill color="green" style="shiny" size="sm">
          {t('page.proposal_detail.grant.vesting_label')}
        </Pill>
        <Markdown
          className="VestingContract__Description"
          componentsClassNames={{ strong: 'VestingContract__Description__StrongText' }}
        >
          {t('page.proposal_detail.grant.vesting_description')}
        </Markdown>
        <Button href={url} target="_blank" rel="noopener noreferrer" primary size="small">
          {t('page.proposal_detail.grant.vesting_button')}
        </Button>
      </div>
    </div>
  )
}

export default VestingContract
