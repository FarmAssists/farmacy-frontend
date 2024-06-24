import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
import { getCakeAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import '../../../style.css'

const StyledInner = styled.div`
  border: 2px solid #44AFF3;
  box-shadow: inset 0px 0px 10px #7DF1FE;
  border-radius: 23px;
  width: 100%;
`

const StyledOuter = styled.div`
  border: 2px solid #44AFF3;
  box-shadow: 0px 0px 10px #7DF1FE;
  border-radius: 27px;
  height: fit-content;
`

const StyledCakeStats = styled(Card)`
  background-color: unset;
  border: 2px solid #FFFFFF;
  border-radius: 25px;
  min-height: 250px;
  display: flex;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`

const StyledHeading = styled(Heading)`
  font-family: 'Text Me One';
  font-style: normal;
  font-weight: normal;
  font-size: 31px;
  color: #FFFFFF;
  text-shadow: 0px 0px 20px #00F0FF;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #8DFDFF;
`

const CakeStats = () => {
  const { t } = useTranslation()
  const totalSupply = useTotalSupply()
  const burnedBalance = getBalanceNumber(useBurnedBalance(getCakeAddress()))
  const cakeSupply = totalSupply ? getBalanceNumber(totalSupply) - burnedBalance : 0

  return (
    <StyledOuter>
      <StyledCakeStats>
        <StyledInner>
          <CardBody>
            <StyledHeading scale="xl" mb="24px">
              {t('VITAMINE STATS')}
            </StyledHeading>
            <Row>
              <Text fontSize="22px" fontFamily='Lato' color='#FFFFFF'>{t('Market Cap')}</Text>
              {cakeSupply && <CardValue fontSize="22px" fontFamily='Lato' color='#FFFFFF' value={cakeSupply} />}
            </Row>
            <Row>
              <Text fontSize="22px" fontFamily='Lato' color='#FFFFFF'>{t('Circulating Supply')}</Text>
              <CardValue fontSize="22px" fontFamily='Lato' color='#FFFFFF' decimals={0} value={burnedBalance} />
            </Row>
            <Row>
              <Text fontSize="22px" fontFamily='Lato' color='#FFFFFF'>{t('New VITAMINE/block')}</Text>
              <CardValue fontSize="22px" fontFamily='Lato' color='#FFFFFF' decimals={0} value={20} />
            </Row>
          </CardBody>
        </StyledInner>
      </StyledCakeStats>
    </StyledOuter>
  )
}

export default CakeStats
