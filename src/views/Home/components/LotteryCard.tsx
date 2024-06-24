import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Text } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
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

const StyledLotteryCard = styled(Card)`
  background-color: unset;
  border: 2px solid #FFFFFF;
  border-radius: 25px;
  display: flex;
  min-height: 450px;
`

const StyledHeadingText = styled(Text)`
  font-family: 'Text Me One';
  font-style: normal;
  font-weight: normal;
  font-size: 31px;
  color: #FFFFFF;
  text-shadow: 0px 0px 20px #00F0FF;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #8DFDFF;
`

const StyledText = styled(Text)`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 135%;
  align-items: center;
  color: #FFFFFF;
  margin-bottom: 25px;
`

const LotteryCard = () => {
  const { t } = useTranslation()

  return (
    <StyledOuter>
      <StyledLotteryCard>
        <StyledInner>
          <CardBody>
            <StyledHeadingText bold mb="24px">
              ANNOUNCEMENTS
            </StyledHeadingText>
            <StyledText>
              {t('FarmAssist')}
            </StyledText>
            <StyledText>
              {t('Auto-compounding pool is LIVE')}
            </StyledText>
            <StyledText>
              {t('Forget and save on gas fees while earning $VITAMINE')}
            </StyledText>
            <StyledText>
              {t('For more info click here:')}
            </StyledText>
          </CardBody>
        </StyledInner>
     </StyledLotteryCard>
    </StyledOuter>

  )
}

export default LotteryCard
