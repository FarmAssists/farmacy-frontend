import React from 'react'
import styled from 'styled-components'
import { useFarmUser } from 'state/hooks'
import { useTranslation } from 'contexts/Localization'
import { Text, TokenPairImage } from '@pancakeswap/uikit'
import { getBalanceNumber } from 'utils/formatBalance'
import { getAddress } from 'utils/addressHelpers'
import { Token } from 'config/constants/types'
import '../../../../style.css'

export interface FarmProps {
  label: string
  pid: number
  token: Token
  quoteToken: Token
}

const Container = styled.div`
  background-color: unset;
  padding-left: 16px;
  display: flex;
  align-items: center;
  height: fit-content;
  width: 220px;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-left: 15px;
  }
`

const TokenWrapper = styled.div`
  padding-right: 8px;
  width: 24px;
  background-color: unset;

  ${({ theme }) => theme.mediaQueries.sm} {
    width: 75px;
  }
`

const Farm: React.FunctionComponent<FarmProps> = ({ token, quoteToken, label, pid }) => {
  const { stakedBalance } = useFarmUser(pid)
  const { t } = useTranslation()
  const rawStakedBalance = getBalanceNumber(stakedBalance)

  const handleRenderFarming = (): JSX.Element => {
    if (rawStakedBalance) {
      return (
        <Text color="secondary" fontSize="12px" bold textTransform="uppercase">
          {t('Farming')}
        </Text>
      )
    }

    return null
  }

  return (
    <Container>
      <TokenWrapper>
        <TokenPairImage
          variant="inverted"
          primaryTokenAddress={getAddress(token.address)}
          secondaryTokenAddress={getAddress(quoteToken.address)}
          width={50}
          height={50}
        />
      </TokenWrapper>
      <div>
        {handleRenderFarming()}
        <StyledText bold>{label}</StyledText>
      </div>
    </Container>
  )
}

export default Farm

const StyledText = styled(Text)`
  font-family: 'Text Me One';
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  color: #FFFFFF;
  text-shadow: 0px 0px 15px #00F0FF;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #8DFDFF;
`
