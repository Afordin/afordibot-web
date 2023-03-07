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
  height: 40px;
  width: 40px;
  border: 4px solid;
  border-radius: 100%;
  border-color: #fff0 #af1155 #af1155 #af1155;
  animation: loading 0.5s ease infinite;
`

export const invLoading = styled.div`
  position: absolute;
  height: 35px;
  width: 35px;
  border: 4px solid;
  border-radius: 100%;
  border-color: #fff0 #888 #888 #888;
  animation: invLoading 0.5s ease infinite;
`
