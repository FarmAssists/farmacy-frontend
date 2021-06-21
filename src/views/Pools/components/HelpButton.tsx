import React from 'react'
import styled from 'styled-components'
import { Text, Button, HelpIcon, Link } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'

const ButtonText = styled(Text)`
  display: none;
  ${({ theme }) => theme.mediaQueries.xs} {
    display: block;
  }
`

const StyledLink = styled(Link)`
  margin-right: 16px;
  display: flex;
  justify-content: flex-end;

  &:hover {
    text-decoration: none;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    flex: 1;
  }
`

const HelpButton = () => {
  const { t } = useTranslation()
  return (
    <StyledLink external href="https://docs.pancakeswap.finance/syrup-pools/syrup-pool">
      <StyledHelpButton px={['14px', null, null, null, '20px']} variant="subtle">
        <ButtonText color="#FFFFFF" bold fontSize="16px">
          {t('Help')}
        </ButtonText>
        <HelpIcon color="#8DFDFF" ml={[null, null, null, 0, '6px']} />
      </StyledHelpButton>
    </StyledLink>
  )
}

export default HelpButton

const StyledHelpButton = styled(Button)`
  background: #1A1530;
  border: 2px solid #FFFFFF;
  border-radius: 12px;
`