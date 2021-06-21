import React from 'react'
import { Tag, VerifiedIcon, CommunityIcon, BinanceIcon, RefreshIcon, AutoRenewIcon, TagProps } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'

const StyledTag = styled(Tag)`
  border: 2px solid #7DF1FE;
  box-sizing: border-box;
  border-radius: 12px;
  color: #FFFFFF;
  text-shadow: 0px 0px 2px #FFFFFF;
`

const CoreTag: React.FC<TagProps> = (props) => {
  const { t } = useTranslation()
  return (
    <StyledTag variant="secondary" outline startIcon={<VerifiedIcon width="18px" color="#7DF1FE" mr="4px" />} {...props}>
      {t('Core')}
    </StyledTag>
  )
}

const CommunityTag: React.FC<TagProps> = (props) => {
  const { t } = useTranslation()
  return (
    <Tag variant="failure" outline startIcon={<CommunityIcon width="18px" color="failure" mr="4px" />} {...props}>
      {t('Community')}
    </Tag>
  )
}

const BinanceTag: React.FC<TagProps> = (props) => {
  return (
    <Tag variant="binance" outline startIcon={<BinanceIcon width="18px" color="secondary" mr="4px" />} {...props}>
      Binance
    </Tag>
  )
}

const DualTag: React.FC<TagProps> = (props) => {
  const { t } = useTranslation()
  return (
    <Tag variant="textSubtle" outline {...props}>
      {t('Dual')}
    </Tag>
  )
}

const ManualPoolTag: React.FC<TagProps> = (props) => {
  const { t } = useTranslation()
  return (
    <StyledTag variant="secondary" outline startIcon={<RefreshIcon width="18px" color="#7DF1FE" mr="4px" />} {...props}>
      {t('Manual')}
    </StyledTag>
  )
}

const CompoundingPoolTag: React.FC<TagProps> = (props) => {
  const { t } = useTranslation()
  return (
    <StyledTag variant="success" outline startIcon={<AutoRenewIcon width="18px" color="#7DF1FE" mr="4px" />} {...props}>
      {t('Auto')}
    </StyledTag>
  )
}

export { CoreTag, CommunityTag, BinanceTag, DualTag, ManualPoolTag, CompoundingPoolTag }
