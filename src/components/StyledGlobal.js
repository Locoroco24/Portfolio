import styled from '@emotion/styled';
import { css } from '@emotion/react'

// ============== Global styles ================

export const GlobalStyles = css`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
`

export const AppWrapper = styled.div`
  margin: 0;
  padding: 0;
  font-family: 'Fira Sans Condensed', sans-serif;
  font-size: 18px;
  color: #333;
  background: #fff;
`

export const Wrapper = css`
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
`

export const themeColor = css`
  color: #88b848;
`