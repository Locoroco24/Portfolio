import styled from '@emotion/styled';
import {Wrapper} from "../StyledGlobal";

export const PersonalData = styled.section`
  border-bottom: 1px solid #ccc;
`

export const PersonalDataWrapper = styled.div`
  ${Wrapper};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const PersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`

export const PersonalPhoto = styled.img`
  width: 500px;
  max-width: 50%;
  border-radius: 50%;
`

export const SkillsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

export const SkillsItem = styled.li`
  padding: 15px 0;
  border-bottom: 1px solid #ccc;
  &:first-of-type {
    padding-top: 0;
  }
`