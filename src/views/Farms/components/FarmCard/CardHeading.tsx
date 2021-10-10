import React from 'react'
import styled from 'styled-components'
import { Tag, Flex, Heading, TokenPairImage } from '@pancakeswap/uikit'
import { CommunityTag, CoreTag } from 'components/Tags'
import { Token } from 'config/constants/types'
import { getAddress } from 'utils/addressHelpers'

export interface ExpandableSectionProps {
  lpLabel?: string
  multiplier?: string
  isCommunityFarm?: boolean
  token: Token
  quoteToken: Token
}

const Wrapper = styled(Flex)`
  svg {
    margin-right: 4px;
  }
`

const MultiplierTag = styled(Tag)`
  margin-left: 4px;
  background-color: unset;
  border: 2px solid #7DF1FE;
  box-sizing: border-box;
  border-radius: 12px;
  color: #7DF1FE;
`

const StyledHeading = styled(Heading)`
font-family: 'Text Me One';
font-style: normal;
font-weight: normal;
font-size: 22px;
color: #FFFFFF;
text-shadow: 0px 0px 15px #00F0FF;
-webkit-text-stroke-width: 1px;
-webkit-text-stroke-color: #8DFDFF;

`

const CardHeading: React.FC<ExpandableSectionProps> = ({ lpLabel, multiplier, isCommunityFarm, token, quoteToken }) => {
  return (
    <Wrapper justifyContent="space-between" alignItems="center" mb="12px">
      <TokenPairImage
        variant="inverted"
        primaryTokenAddress={getAddress(token.address)}
        secondaryTokenAddress={getAddress(quoteToken.address)}
        width={64}
        height={64}
      />
      <Flex flexDirection="column" alignItems="flex-end">
        <StyledHeading mb="4px">{lpLabel.split(' ')[0]}</StyledHeading>
        <Flex justifyContent="center">
          {isCommunityFarm ? <CommunityTag /> : <CoreTag />}
          <MultiplierTag variant="secondary">{multiplier}</MultiplierTag>
        </Flex>
      </Flex>
    </Wrapper>
  )
}

export default CardHeading
