import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useGetStats } from 'hooks/api'
import '../../../style.css'

const StyledInner = styled.div`
  border: 2px solid #44AFF3;
  box-shadow: inset 0px 0px 10px #7DF1FE;
  border-radius: 23px;
  width: 100%;
  align-items: center;
  display: flex;
`

const StyledOuter = styled.div`
  border: 2px solid #44AFF3;
  box-shadow: 0px 0px 10px #7DF1FE;
  border-radius: 27px;
  height: fit-content;
`

const StyledTotalValueLockedCard = styled(Card)`
  background-color: unset;
  border: 2px solid #FFDFF0;
  border-radius: 25px;
  min-height: 250px;
  display: flex;
`

const StyledHeading = styled(Heading)`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  color: #FFFFFF;
  margin-bottom: 40px;
`

const StyledValueHeading = styled(Heading)`
  font-family: 'Text Me One';
  font-style: normal;
  font-weight: normal;
  font-size: 31px;
  color: #FFFFFF;
  margin-bottom: 20px;
  text-shadow: 0px 0px 20px #00F0FF;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #8DFDFF;
`

const StyledText = styled(Text)`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #FFFFFF;
`

const TotalValueLockedCard = () => {
  const { t } = useTranslation()
  const data = useGetStats()
  const tvl = data ? data.tvl.toLocaleString('en-US', { maximumFractionDigits: 0 }) : null

  return (
    <StyledOuter>
      <StyledTotalValueLockedCard>
        <StyledInner>
          <CardBody>
            <StyledHeading scale="lg" mb="24px">
              {t('Total Value Locked (TVL)')}
            </StyledHeading>
              {data ? (
              <>
                <StyledValueHeading scale="xl">{`$${tvl}`}</StyledValueHeading>
                <StyledText color="textSubtle">{t('Across all farms and Pools')}</StyledText>
              </>
            ) : (
            <Skeleton height={66} />
            )}
          </CardBody>
        </StyledInner>
      </StyledTotalValueLockedCard>
    </StyledOuter>
  )
}

export default TotalValueLockedCard
