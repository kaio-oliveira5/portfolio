import styled from 'styled-components'

import { Props } from '.'

import { theme } from '../../Themes/dark'

export const Titulo = styled.h3<Props>`
  color: ${(props) => (props.theme as theme).corPrincipal};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-wight: bold;
  margin-bottom: 16px;
`
