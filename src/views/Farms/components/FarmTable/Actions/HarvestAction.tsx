import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Skeleton, Text } from '@pancakeswap/uikit'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { FarmWithStakedValue } from 'views/Farms/components/FarmCard/FarmCard'
import Balance from 'components/Balance'
import { BIG_ZERO } from 'utils/bigNumber'
import { getBalanceAmount } from 'utils/formatBalance'
import { useAppDispatch } from 'state'
import { fetchFarmUserDataAsync } from 'state/farms'
import { usePriceCakeBusd } from 'state/hooks'
import { useHarvest } from 'hooks/useHarvest'
import { useTranslation } from 'contexts/Localization'

import { ActionContainer, ActionTitles, ActionContent, Earned } from './styles'

interface HarvestActionProps extends FarmWithStakedValue {
  userDataReady: boolean
}

const HarvestAction: React.FunctionComponent<HarvestActionProps> = ({ pid, userData, userDataReady }) => {
  const earningsBigNumber = new BigNumber(userData.earnings)
  const cakePrice = usePriceCakeBusd()
  let earnings = BIG_ZERO
  let earningsBusd = 0
  let displayBalance = userDataReady ? earnings.toLocaleString() : <Skeleton width={60} />

  // If user didn't connect wallet default balance will be 0
  if (!earningsBigNumber.isZero()) {
    earnings = getBalanceAmount(earningsBigNumber)
    earningsBusd = earnings.multipliedBy(cakePrice).toNumber()
    displayBalance = earnings.toFixed(3, BigNumber.ROUND_DOWN)
  }

  const [pendingTx, setPendingTx] = useState(false)
  const { onReward } = useHarvest(pid)
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const { account } = useWeb3React()

  return (
    <ActionContainer>
      <ActionTitles>
        <Text bold textTransform="uppercase" color=" #8DFDFF" fontSize="12px" pr="4px">
          VITAMINE
        </Text>
        <Text bold textTransform="uppercase" color="textSubtle" fontSize="12px">
          {t('Earned')}
        </Text>
      </ActionTitles>
      <ActionContent>
        <div>
          <Earned>{displayBalance}</Earned>
          {earningsBusd > 0 && (
            <Balance fontSize="12px" color="textSubtle" decimals={2} value={earningsBusd} unit=" USD" prefix="~" />
          )}
        </div>
        <StyledHarvestButton
          disabled={earnings.eq(0) || pendingTx || !userDataReady}
          onClick={async () => {
            setPendingTx(true)
            await onReward()
            dispatch(fetchFarmUserDataAsync({ account, pids: [pid] }))

            setPendingTx(false)
          }}
          ml="4px"
        >
          {t('Harvest')}
        </StyledHarvestButton>
      </ActionContent>
    </ActionContainer>
  )
}

export default HarvestAction

const StyledHarvestButton = styled(Button)`
  background-color: unset;
  border: 2px solid #C1C0C1;
  box-sizing: border-box;
  border-radius: 12px;
  :disabled {
    background-color: unset;
  }
`
