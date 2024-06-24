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
    <StyledLink external href="https://discord.com/invite/a7pFYXeGEV">
      <StyledHelpButton px={['8px', null, null, null, '40px']} variant="subtle">
        <ButtonText color="#FFFFFF" bold fontSize="16px">
          {t('Help')}
        </ButtonText>
        <HelpIcon color="#FFFFFF" ml={[null, null, null, 0, '8px']} />
      </StyledHelpButton>
    </StyledLink>
  )
}

export default HelpButton

const StyledHelpButton = styled(Button)`
  background: #1A1530;
  border: 1px solid #FFFFFF;
  border-radius: 12px;
  width: 150px;
`