import React from 'react'
import { GiOrange } from 'react-icons/gi'
import styled, { keyframes } from 'styled-components'
import s from '@/styles/global.style'

const rotate = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`

const SpinWrap = styled.div`
  ${s.flex('center', 'center')}
  width: 100%;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  font-size: ${props => props.size}px;
  color: var(--sim-text-secondary);
  animation: ${rotate} 1s linear infinite;
`

const Spin = ({ size }) => {
  return (
    <SpinWrap size={size}>
      <GiOrange />
    </SpinWrap>
  )
}

export default Spin
