import styled from 'styled-components'

import { theme } from '../../Themes/dark'
import { Props } from '.'

export const P = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  color: ${(props) =>
    props.tipo === 'principal'
      ? (props.theme as theme).corPrincipal
      : (props.theme as theme).corSecundaria};
  line-height: 22px;
`
