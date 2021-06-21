import React from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import LotteryCard from 'views/Home/components/LotteryCard'
import CakeStats from 'views/Home/components/CakeStats'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
// import EarnAPRCard from 'views/Home/components/EarnAPRCard'
// import EarnAssetCard from 'views/Home/components/EarnAssetCard'
// import PredictionBetaCard from './components/PredictionBetaCard'

const Hero = styled.div`
  align-items: center;
  // background-image: url('/images/home-logo.svg');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    // background-image: url('/images/home-logo.svg');
    background-position: left center, right center;
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 24px;
  grid-gap: 24px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    margin-bottom: 32px;
    grid-gap: 32px;

    & > div {
      grid-column: span 6;
    }
  }
`

// const CTACards = styled(BaseLayout)`
//   align-items: start;
//   margin-bottom: 24px;
//   grid-gap: 24px;
//
//   & > div {
//     grid-column: span 6;
//   }
//
//   ${({ theme }) => theme.mediaQueries.sm} {
//     & > div {
//       grid-column: span 8;
//     }
//   }
//
//   ${({ theme }) => theme.mediaQueries.lg} {
//     margin-bottom: 32px;
//     grid-gap: 32px;
//
//     & > div {
//       grid-column: span 4;
//     }
//   }
// `

const StyledHeading = styled(Heading)`
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 135%;
  color: #FFFFFF;
  text-shadow: 0px 0px 20px #FFFFFF;
`

const StyledText = styled(Text)`
  font-style: normal;
  font-weight: normal;
  color: #8DF4FF;
  text-shadow: 2px 1px 114px #00A1FF;
`
const StyledSubText = styled(Text)`
  font-style: normal;
  font-weight: normal;
  color: #FFFFFF;
`

const Home: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Page>
      <Hero>
        <StyledHeading>
          {t('FARMACY')}
        </StyledHeading>
        <StyledText>{t('Just stake some tokens to earn')}</StyledText>
        <StyledSubText>{t('high APR, low risk')}</StyledSubText>
      </Hero>
      <div>
        <Cards>
          <FarmStakingCard />
          <LotteryCard />
        </Cards>
        {/* <CTACards> */}
        {/*  <EarnAPRCard /> */}
        {/*  <EarnAssetCard /> */}
        {/*  <PredictionBetaCard /> */}
        {/* </CTACards> */}
        <Cards>
          <CakeStats />
          <TotalValueLockedCard />
        </Cards>
      </div>
    </Page>
  )
}

export default Home
