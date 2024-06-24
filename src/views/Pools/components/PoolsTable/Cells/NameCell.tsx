import React from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { Text, TokenPairImage, useMatchBreakpoints } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { getAddress } from 'utils/addressHelpers'
import { useCakeVault } from 'state/hooks'
import { Pool } from 'state/types'
import { BIG_ZERO } from 'utils/bigNumber'
import CakeVaultTokenPairImage from '../../CakeVaultCard/CakeVaultTokenPairImage'
import BaseCell, { CellContent } from './BaseCell'

interface NameCellProps {
  pool: Pool
}

const StyledCell = styled(BaseCell)`
  flex: 5;
  flex-direction: row;
  padding-left: 12px;
  ${({ theme }) => theme.mediaQueries.sm} {
    flex: 1 0 150px;
    padding-left: 32px;
  }
`

const NameCell: React.FC<NameCellProps> = ({ pool }) => {
  const { t } = useTranslation()
  const { isXs, isSm } = useMatchBreakpoints()
  const { sousId, stakingToken, earningToken, userData, isFinished, isAutoVault } = pool
  const {
    userData: { userShares },
  } = useCakeVault()
  const hasVaultShares = userShares && userShares.gt(0)

  const stakingTokenSymbol = stakingToken.symbol
  const earningTokenSymbol = earningToken.symbol

  const stakedBalance = userData?.stakedBalance ? new BigNumber(userData.stakedBalance) : BIG_ZERO
  const isStaked = stakedBalance.gt(0)
  const isManualCakePool = sousId === 0

  const showStakedTag = isAutoVault ? hasVaultShares : isStaked

  let title = `${t('Earn')} ${earningTokenSymbol}`
  let subtitle = `${t('Stake')} ${stakingTokenSymbol}`
  const showSubtitle = sousId !== 0 || (sousId === 0 && !isXs && !isSm)

  if (isAutoVault) {
    title = t('Auto CAKE')
    subtitle = t('Automatic restaking')
  } else if (isManualCakePool) {
    title = t('Manual CAKE')
    subtitle = `${t('Earn')} CAKE ${t('Stake').toLocaleLowerCase()} CAKE`
  }

  return (
    <StyledCell role="cell">
      {isAutoVault ? (
        <CakeVaultTokenPairImage mr="20px" width={45} height={45} />
      ) : (
        <TokenPairImage
          primaryTokenAddress={getAddress(earningToken.address)}
          secondaryTokenAddress={getAddress(stakingToken.address)}
          mr="20px"
          width={45}
          height={45}
        />
      )}
      <CellContent>
        {showStakedTag && (
          <Text fontSize="12px" bold color={isFinished ? 'failure' : 'secondary'} textTransform="uppercase">
            {t('Staked')}
          </Text>
        )}
        <StyledPoolText bold={!isXs && !isSm} small={isXs || isSm}>
          {title}
        </StyledPoolText>
        {showSubtitle && (
          <StyledPoolSubText fontSize="12px" color="textSubtle">
            {subtitle}
          </StyledPoolSubText>
        )}
      </CellContent>
    </StyledCell>
  )
}

export default NameCell

const StyledPoolText = styled(Text)`
  font-family: 'Text Me One';
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  color: #FFFFFF;
  // width: 120px;
  text-shadow: 0px 0px 15px #00F0FF;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #8DFDFF;
`

const StyledPoolSubText = styled(Text)`
  color: #FFFFFF;
  font-size: 18px;
  font-style: normal;
  font-family: 'Lato';
  font-weight: 500;
`
