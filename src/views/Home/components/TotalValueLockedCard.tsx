import React from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useGetStats } from 'hooks/api'

const StyledTotalValueLockedCard = styled(Card)`
  min-height: 220px;
  background-color: unset;
  border: 4px solid #44AFF3;
  filter: drop-shadow(0px 0px 9px #7DF1FE);
  border-radius: 25px;
`
const StyledHeading =styled(Heading)`
  font-style: normal;
  font-weight: 500;
  font-size: 31px;
  color: #FFFFFF;
`
const StyledValueHeading =styled(Heading)`
  font-style: normal;
  font-weight: normal;
  font-size: 31px;
  color: #FFFFFF;
  text-shadow: 0px 0px 20px #00F0FF;
`

const StyledText = styled(Text)`
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
    <StyledTotalValueLockedCard>
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
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard
