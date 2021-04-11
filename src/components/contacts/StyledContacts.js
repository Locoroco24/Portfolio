import styled from "@emotion/styled";
import {themeColor, Wrapper} from "../StyledGlobal";

const gap = '20px';

export const ContactsWrapper = styled.div`
  ${Wrapper};
`

export const ContactsInner = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  grid-gap: 20px;
`

export const LinksWrapper = styled.div`
  padding: 15px 0;
`

export const ContactLink = styled.a`
  margin-right: 15px;
`

export const ContactImg = styled.img`
  width: 30px;
  height: auto;
  border-radius: 5px;
  transition: .4s;
  &:hover {
    opacity: 0.5;
  }
`

export const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: ${gap};
`

export const FormElement = styled.div`
  position: relative;
  &:nth-of-type(1) {
    grid-column: 1/2;
    grid-row: 1/2;
  };
  &:nth-of-type(2) {
    grid-column: 1/2;
    grid-row: 2/3;
  }
  &:nth-of-type(3) {
    grid-column: 2/4;
    grid-row: 1/3;
  }
`

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 5px 15px;
  border: 2px solid #999;
  border-radius: 5px;
  transition: .4s border-color;
  font-family: 'Fira Sans Condensed', sans-serif;
  &:hover, :focus {
    border-color: ${themeColor};
    outline: none;
  }
`

export const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  height: 100%;
  padding: 5px 15px;
  border: 2px solid #999;
  border-radius: 5px;
  font-family: 'Fira Sans Condensed', sans-serif;
  transition: .4s border-color;
  &:hover, :focus {
    border-color: ${themeColor};
    outline: none;
  }
`

export const Error = styled.p`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border: 2px solid #f44;
  border-radius: 5px;
  pointer-events: none;
  &:after {
    content: '${props => props.errorMessage}';
    position: absolute;
    line-height: ${gap};
    bottom: -${gap};
    font-size: 14px;
    color: #e44;
  }
`

export const ResetButton = styled.button`
  background: #fff;
  border: 2px solid #f44;
  border-radius: 5px;
  font-family: 'Fira Sans Condensed', sans-serif;
  grid-column: 2/3;
  cursor: pointer;
  transition: .4s background, color;
  &:hover {
    color: #fff;
    background: #f44;
  };
  &:focus {
    outline: none;
  };
  &:active {
    opacity: 0.8;
  }
`

export const SubmitButton = styled.button`
  background: #fff;
  border: 2px solid ${themeColor};
  border-radius: 5px;
  font-family: 'Fira Sans Condensed', sans-serif;
  grid-column: 3/4;
  cursor: pointer;
  transition: .4s background, color;
  &:hover {
    color: #fff;
    background: ${themeColor};
  };
  &:focus {
    outline: none;
  };
  &:active {
    opacity: 0.8;
  }
`

