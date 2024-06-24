import React from 'react'
import styled from 'styled-components'
import { Image, Heading, Text, BaseLayout } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Page from 'components/layout/Page'
import FarmStakingCard from 'views/Home/components/FarmStakingCard'
import LotteryCard from 'views/Home/components/LotteryCard'
import CakeStats from 'views/Home/components/CakeStats'
import TotalValueLockedCard from 'views/Home/components/TotalValueLockedCard'
import '../../style.css'
// import EarnAPRCard from 'views/Home/components/EarnAPRCard'
// import EarnAssetCard from 'views/Home/components/EarnAssetCard'
// import PredictionBetaCard from './components/PredictionBetaCard'

const Hero = styled.div`
  align-items: center;
  // background-image: url('/images/home-logo.svg');
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 20px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image: url('/images/home-logo.svg');
    background-position: 20px center;
    background-size: 200px;
    background-repeat: no-repeat;
    height: 200px;
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
  font-family: 'Text Me One';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  color: #FFFFFF;
  line-height: 135%;
  // display: flex;
  // align-items: center;
  // text-align: center;
  text-shadow: 0px 0px 20px #FFFFFF;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #D6D6D6;
`

const StyledText = styled(Text)`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  color: #8DF4FF;
  text-shadow: 2px 1px 114px #00A1FF;
  // display: flex;
  // align-items: center;
  // text-align: center;
`

const StyledSubText = styled(Text)`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  color: #FFFFFF;
  // display: flex;
  // align-items: center;
  // text-align: center;
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
        <StyledSubText>{t('High APR, low risk')}</StyledSubText>
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
