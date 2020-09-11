import React from 'react'
import { Props } from './ProposalTitle.types'
import { Header } from 'decentraland-ui/dist/components/Header/Header'
import { Loader } from 'decentraland-ui/dist/components/Loader/Loader'
import { Blockie } from 'decentraland-ui/dist/components/Blockie/Blockie'
import { Address } from 'decentraland-ui/dist/components/Address/Address'
import { getAppName } from 'modules/app/utils'
import { env } from 'decentraland-commons'
import { getAddressName } from 'modules/common/utils'
import { EtherScan } from 'modules/wallet/types'

const DECENTRALAND_URL = env.get('REACT_APP_DECENTRALAND_URL', '')

export default class ProposalTitle extends React.PureComponent<Props> {
  render() {

    const { vote, description, network } = this.props

    if (vote) {
      if (vote.metadata) {
        return <Header><pre>{vote.metadata}</pre></Header>
      }

      if (description) {

        if (description.firstDescriptionAnnotated) {
          return <React.Fragment>{description.firstDescriptionAnnotated.map((annotations, i) => {
            return <Header key={i}>{annotations.map((annotation, j) => {
              switch (annotation.type) {
                case 'dcl:name': {
                  return <b key={j} >"{annotation.value}"</b>
                }

                case 'dcl:domain': {
                  let href = annotation.value + '/comms/status'
                  if (!href.startsWith('https://')) {
                    href = 'https://' + href
                  }

                  return <a key={j} target="_blank" rel="noopener noreferrer" href={href}>"{annotation.value}"</a>
                }

                case 'dcl:position': {
                  return <a key={j} target="_blank" rel="noopener noreferrer" href={`${DECENTRALAND_URL}/?position=${annotation.value.position}`}><b>"{annotation.value.position}"</b></a>
                }

                case 'address': {
                  const name = getAddressName(annotation.value)
                  if (name) {
                    const href = `${EtherScan[network]}/address/${annotation.value}`
                    return <a key={i} title={annotation.value} target="_blank" rel="noopener noreferrer" href={href}>
                      {name && <b>{name}</b>}
                    </a>
                  }

                  return <Blockie key={j} seed={annotation.value}>
                    <Address value={annotation.value} strong />
                  </Blockie>
                }

                case 'app': {
                  return <b key={j} title={annotation.value.address}>
                    {getAppName(annotation.value.address) || annotation.value.name}
                  </b>
                }

                case 'role':
                  return <b key={j} >{` ${annotation.value.id} `}</b>

                case 'apmPackage':
                  return <React.Fragment key={j}>{` ${annotation.value.name} `}</React.Fragment>

                case 'kernelNamespace':
                  return <React.Fragment key={j}>{` ${annotation.value.name} `}</React.Fragment>

                case 'bytes32':
                  return <React.Fragment key={j}>{` ${annotation.value} `}</React.Fragment>

                case 'text':
                  return <React.Fragment key={j}>{` ${annotation.value} `}</React.Fragment>

                default:
                  return 'MISSING'
              }
            })}</Header>
          })}</React.Fragment>
        }

        if (description.description) {
          return <Header>{description.description}</Header>
        }

        return <Header sub>No description</Header>
      }
    }

    return <Loader active inline size="small" />
  }
}