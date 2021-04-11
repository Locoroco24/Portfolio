import styled from '@emotion/styled';
import { css } from '@emotion/react'

// ============== Global styles ================

export const GlobalStyles = css`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  },
  h1, h2, h3, p {
    margin: 0;
  },
  h2 {
    margin-bottom: 40px;
  },
  section {
    padding: 60px 0;
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
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
`

export const themeColor = `#88b848`;


export const Colored = styled.span`
  color: ${themeColor}
`