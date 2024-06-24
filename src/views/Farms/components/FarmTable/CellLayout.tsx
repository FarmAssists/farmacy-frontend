import React from 'react'
import styled from 'styled-components'

const Label = styled.div`
  font-family: 'Lato';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  color: #8DFDFF;
  text-align: left;
`

const ContentContainer = styled.div`
  min-height: 24px;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-style: normal;
  color: #FFFFFF;
  padding-top: 5px;
`

interface CellLayoutProps {
  label?: string
}

const CellLayout: React.FC<CellLayoutProps> = ({ label = '', children }) => {
  return (
    <div>
      {label && <Label>{label}</Label>}
      <ContentContainer>{children}</ContentContainer>
    </div>
  )
}

export default CellLayout
