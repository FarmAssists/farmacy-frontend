import React from 'react'
import { CardHeader, Heading, Text, Flex, TokenPairImage } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useTranslation } from 'contexts/Localization'
import { Token } from 'config/constants/types'
import { getAddress } from 'utils/addressHelpers'
import CakeVaultTokenPairImage from '../CakeVaultCard/CakeVaultTokenPairImage'

const Wrapper = styled(CardHeader)<{ isFinished?: boolean; background?: string }>`
  background: unset;
`

const StyledCardHeader: React.FC<{
  earningToken: Token
  stakingToken: Token
  isAutoVault?: boolean
  isFinished?: boolean
  isStaking?: boolean
}> = ({ earningToken, stakingToken, isFinished = false, isAutoVault = false, isStaking = false }) => {
  const { t } = useTranslation()
  const isCakePool = earningToken.symbol === 'CAKE' && stakingToken.symbol === 'CAKE'
  const background = isStaking ? 'bubblegum' : 'cardHeader'

  const getHeadingPrefix = () => {
    if (isAutoVault) {
      // vault
      return t('Auto')
    }
    if (isCakePool) {
      // manual cake
      return t('Manual')
    }
    // all other pools
    return t('Earn')
  }

  const getSubHeading = () => {
    if (isAutoVault) {
      return t('Automatic restaking')
    }
    if (isCakePool) {
      return t('Earn CAKE, stake CAKE')
    }
    return t('Stake %symbol%', { symbol: stakingToken.symbol })
  }

  return (
    <Wrapper isFinished={isFinished} background={background}>
      <Flex alignItems="center" justifyContent="space-between">
        {isAutoVault ? (
          <CakeVaultTokenPairImage width={64} height={64} />
        ) : (
          <TokenPairImage
            primaryTokenAddress={getAddress(earningToken.address)}
            secondaryTokenAddress={getAddress(stakingToken.address)}
            width={64}
            height={64}
          />
        )}
        <Flex flexDirection="column">
          <StyledHeading color={isFinished ? 'textDisabled' : 'body'} scale="lg">
            {`${getHeadingPrefix()} ${earningToken.symbol}`}
          </StyledHeading>
          <Text color={isFinished ? 'textDisabled' : '#FFFFFF'}>{getSubHeading()}</Text>
        </Flex>
      </Flex>
    </Wrapper>
  )
}

export default StyledCardHeader

const StyledHeading = styled(Heading)`
color: #FFFFFF;
// text-shadow: 0px 0px 10px #00F0FF;
`
