import styled, { css, keyframes } from 'styled-components'
import { Card, Box } from '@pancakeswap/uikit'

const PromotedGradient = keyframes`
  0% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 100%;
  }
  100% {
    background-position: 50% 0%;
  }
`

interface PromotedStyleCardProps {
  isDesktop: boolean
}

export const StyledCard = styled(Card)<{ isPromoted?: PromotedStyleCardProps; isFinished?: boolean }>`
  max-width: 352px;
  margin: 0 8px 24px;
  display: flex;
  flex-direction: column;
  align-self: baseline;
  position: relative;
  color: ${({ isFinished, theme }) => theme.colors[isFinished ? 'textDisabled' : 'secondary']};
  box-shadow: 0px 1px 4px rgba(25, 19, 38, 0.15);
  border: 4px solid #44AFF3;
  filter: drop-shadow(0px 0px 5px #7DF1FE);
  border-radius: 25px;
  background-color: unset;
  ${({ isPromoted }) =>
    isPromoted &&
    isPromoted.isDesktop &&
    css`
      animation: ${PromotedGradient} 3s ease infinite;
    `}

  ${({ theme }) => theme.mediaQueries.sm} {
    margin: 0 12px 46px;
  }
`

export const StyledCardInner = styled(Box)`
  background-color: unset;
  border-radius: ${({ theme }) => theme.radii.card};
`

export default StyledCard
