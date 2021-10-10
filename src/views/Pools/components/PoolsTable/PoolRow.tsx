import React, { useState } from 'react'
import styled from 'styled-components'
import { useMatchBreakpoints } from '@pancakeswap/uikit'
import { Pool } from 'state/types'
import { useCakeVault } from 'state/hooks'
import useDelayedUnmount from 'hooks/useDelayedUnmount'
import NameCell from './Cells/NameCell'
import EarningsCell from './Cells/EarningsCell'
import AprCell from './Cells/AprCell'
import TotalStakedCell from './Cells/TotalStakedCell'
import EndsInCell from './Cells/EndsInCell'
import ExpandActionCell from './Cells/ExpandActionCell'
import ActionPanel from './ActionPanel/ActionPanel'

interface PoolRowProps {
  pool: Pool
  account: string
  userDataLoaded: boolean
}


const StyledTrWrapper = styled.div`
  background-color: unset;
  border: 2px solid #FFFFFF;
  border-radius: 25px;
  display: flex;
  height: 120px;
  `

const StyledInner = styled.div`
  border: 2px solid #44AFF3;
  box-shadow: inset 0px 0px 10px #7DF1FE;
  border-radius: 23px;
  width: 100%;
  padding-top: 10px;
`

const StyledOuter = styled.div`
  border: 2px solid #44AFF3;
  box-shadow: 0px 0px 10px #7DF1FE;
  border-radius: 27px;
  height: fit-content;
  margin-top: 15px;

`

const StyledRow = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: space-around;
`

const PoolRow: React.FC<PoolRowProps> = ({ pool, account, userDataLoaded }) => {
  const { isXs, isSm, isMd, isLg, isXl } = useMatchBreakpoints()
  const [expanded, setExpanded] = useState(false)
  const shouldRenderActionPanel = useDelayedUnmount(expanded, 300)

  const toggleExpanded = () => {
    setExpanded((prev) => !prev)
  }

  const {
    fees: { performanceFee },
  } = useCakeVault()
  const performanceFeeAsDecimal = performanceFee && performanceFee / 100

  return (
    <>
      <StyledOuter>
        <StyledTrWrapper>
          <StyledInner>
            <StyledRow role="row" onClick={toggleExpanded}>
              <NameCell pool={pool} />
              <EarningsCell pool={pool} account={account} userDataLoaded={userDataLoaded} />
              <AprCell pool={pool} performanceFee={performanceFeeAsDecimal} />
                {(isLg || isXl) && <TotalStakedCell pool={pool} />}
                {isXl && <EndsInCell pool={pool} />}
              <ExpandActionCell expanded={expanded} isFullLayout={isMd || isLg || isXl} />
            </StyledRow>
          </StyledInner>
        </StyledTrWrapper>
      </StyledOuter>
      {shouldRenderActionPanel && (
        <ActionPanel
          account={account}
          pool={pool}
          userDataLoaded={userDataLoaded}
          expanded={expanded}
          breakpoints={{ isXs, isSm, isMd, isLg, isXl }}
        />
      )}
    </>
  )
}

export default PoolRow
