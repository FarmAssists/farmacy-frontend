import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Heading, Card, CardBody, Button } from '@pancakeswap/uikit'
import { harvest } from 'utils/callHelpers'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import useFarmsWithBalance from 'hooks/useFarmsWithBalance'
import { useMasterchef } from 'hooks/useContract'
import useToast from 'hooks/useToast'
import UnlockButton from 'components/UnlockButton'
import CakeHarvestBalance from './CakeHarvestBalance'
import CakeWalletBalance from './CakeWalletBalance'

const StyledFarmStakingCard = styled(Card)`
  background-color: unset;
  min-height: 376px;
  border: 1px solid #FFDFF0;
  border-radius: 25px;
`
const StyledInner = styled.div`
  border: 3px solid #FF008A;
  filter: drop-shadow(0px 0px 5px #C91461);
  border-radius: 24px;
`
const StyledOuter = styled.div`
  border: 3px solid #FF008A;
  filter: drop-shadow(0px 0px 20px #C91461);
  border-radius: 28px;
`

const Block = styled.div`
  margin-bottom: 16px;
`

const CardImage = styled.img`
  margin-bottom: 16px;
`

const Label = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;

  color: #FFFFFF;
`

const Actions = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: flex-end;
`

const StyledFarmHeading = styled(Heading)`
  font-style: normal;
  font-weight: normal;
  font-size: 31px;
  color: #FFFFFF;
  text-shadow: 0px 0px 20px #00F0FF;
`
const FarmedStakingCard = () => {
  const [pendingTx, setPendingTx] = useState(false)
  const { account } = useWeb3React()
  const { t } = useTranslation()
  const { toastError } = useToast()
  const farmsWithBalance = useFarmsWithBalance()
  const masterChefContract = useMasterchef()
  const balancesWithValue = farmsWithBalance.filter((balanceType) => balanceType.balance.gt(0))

  const harvestAllFarms = useCallback(async () => {
    setPendingTx(true)
    // eslint-disable-next-line no-restricted-syntax
    for (const farmWithBalance of balancesWithValue) {
      try {
        // eslint-disable-next-line no-await-in-loop
        await harvest(masterChefContract, farmWithBalance.pid, account)
      } catch (error) {
        toastError(t('Error'), error?.message)
      }
    }
    setPendingTx(false)
  }, [account, balancesWithValue, masterChefContract, toastError, t])

  return (
    <StyledOuter>
      <StyledFarmStakingCard>
        <StyledInner>
        <CardBody>
          <StyledFarmHeading scale="xl" mb="24px">
            {t('FARM & STAKING')}
          </StyledFarmHeading>
          <CardImage src="/images/meds1.png" alt="cake logo" width={64} height={64} />
          <Block>
            <Label>{t('VITAMINE to Harvest')}:</Label>
            <CakeHarvestBalance farmsWithBalance={balancesWithValue} />
          </Block>
          <Block>
            <Label>{t('VITAMINE in Wallet')}:</Label>
            <CakeWalletBalance />
          </Block>
          <Actions>
            {account ? (
              <Button
                id="harvest-all"
                disabled={balancesWithValue.length <= 0 || pendingTx}
                onClick={harvestAllFarms}
                width="40%"
              >
                {pendingTx
                  ? t('Collecting CAKE')
                  : t('Harvest all (%count%)', {
                      count: balancesWithValue.length,
                    })}
              </Button>
            ) : (
              <UnlockButton width="40%" />
            )}
          </Actions>
        </CardBody>
        </StyledInner>
      </StyledFarmStakingCard>
    </StyledOuter>
  )
}

export default FarmedStakingCard
