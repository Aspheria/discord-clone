import  styled from 'styled-components';

import {Props} from '.';

export const Button = styled.button<Props>`
  display: flex;
  align-itens: center; //alinhado de forma vertical
  justify-content: center //alinhado de forma Horizontal
  flex-shrink: 0;

  width: 48px 
  height: 48px

  margin-buttom: 8px

  background-color: ${props => 
    props.isHome ? 'var(--rocketseat)': 'var(--primary)'};

  position: relative;
  cursor: pointer;
`;
