import {
  PersonalData,
  PersonalDataWrapper,
  PersonalInfo,
  PersonalPhoto,
  SkillsItem,
  SkillsList
} from "./StyledPersonalData";
import {Colored} from "../StyledGlobal";


export const PersonalDataComponent = () => {

  return (
    <PersonalData>
      <PersonalDataWrapper>
        <PersonalInfo>
          <h2 id='skills'>Мои навыки<Colored>.</Colored></h2>
          <SkillsList>
            <SkillsItem>HTML: Семантика/Доступность</SkillsItem>
            <SkillsItem>CSS: Каскад/Анимация/Flex/Grid</SkillsItem>
            <SkillsItem>JavaScript: ES5/ES6/ES7</SkillsItem>
            <SkillsItem>NPM</SkillsItem>
            <SkillsItem>Сборщики Webpack/Grunt/Gulp</SkillsItem>
            <SkillsItem>React, Redux</SkillsItem>
            <SkillsItem>Использование препроцессоров Less/Scss</SkillsItem>
            <SkillsItem>Работа с Git</SkillsItem>
          </SkillsList>
        </PersonalInfo>
        <PersonalPhoto src="img/personalPhoto.jpg" alt="Личная фотография"/>
      </PersonalDataWrapper>
    </PersonalData>
  )
}