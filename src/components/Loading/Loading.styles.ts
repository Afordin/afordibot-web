import styled from 'styled-components'
import { BoxStyles } from 'styles'

export const Container = styled.div`
  position: relative;
  ${BoxStyles.CenterFlex}
  width: 100%;
  height: 100%;
`

export const Loading = styled.div`
  position: absolute;
  height: 50px;
  width: 50px;
  border: 4px solid #af1155;
  border-bottom-color: transparent;
  border-radius: 50%;
  animation: loading 2s linear infinite;
`

export const invLoading = styled.div`
  position: absolute;
  height: 35px;
  width: 35px;
  border: 4px solid #888888;
  border-top-color: transparent;
  border-radius: 50%;
  animation: loading 2s linear infinite reverse;
`
