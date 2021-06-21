import React from 'react'
import styled from 'styled-components'
import { Button, useWalletModal, Text } from '@pancakeswap/uikit'
import useAuth from 'hooks/useAuth'
import { useTranslation } from 'contexts/Localization'

const StyledText = styled(Text)`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #8DFDFF;
`

const StyledUnlockButton = styled(Button)`
  border: 1.5px solid #7DF1FE;
  border-radius: 25px;
  background-color: unset;
`

const UnlockButton = (props) => {
  const { t } = useTranslation()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout)

  return (
    <StyledUnlockButton onClick={onPresentConnectModal} {...props}>
     <StyledText>{t('Unlock Wallet')}</StyledText>
    </StyledUnlockButton>
  )
}

export default UnlockButton
