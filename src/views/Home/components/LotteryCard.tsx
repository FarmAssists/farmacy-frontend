import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Text } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'

const StyledLotteryCard = styled(Card)`
  background-color: unset;
  min-height: 376px;
  border: 4px solid #44AFF3;
  filter: drop-shadow(0px 0px 9px #7DF1FE);
  border-radius: 25px;
`
const StyledHeadingText = styled(Text)`
  font-style: normal;
  font-weight: normal;
  font-size: 31px;
  color: #FFFFFF;
  text-shadow: 0px 0px 20px #00F0FF;
`

const StyledText = styled(Text)`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 135%;
  align-items: center;

  color: #FFFFFF;

`

const LotteryCard = () => {
  const { t } = useTranslation()

  return (
    <StyledLotteryCard>
      <CardBody>
        <StyledHeadingText bold mb="24px">
          ANNOUNCEMENTS
        </StyledHeadingText>
        <StyledText>
          {t('Auto-compounding pool is LIVE')}
        </StyledText>
        <StyledText>
          {t('Auto-compounding pool is LIVE')}
        </StyledText>
        <StyledText>
          {t('Auto-compounding pool is LIVE')}
        </StyledText>
      </CardBody>
    </StyledLotteryCard>
  )
}

export default LotteryCard
