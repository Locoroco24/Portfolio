import {ContactImg, ContactLink, ContactsInner, ContactsWrapper, LinksWrapper} from "./StyledContacts";
import {Colored} from "../StyledGlobal";
import {FormComponent} from "./form";

export const ContactsComponent = () => {

  return (
    <section>
      <ContactsWrapper>
        <h2 id='contacts'>Контакты<Colored>.</Colored></h2>
        <ContactsInner>
          <div>
            <p>Вам нужен перспективный frontend разработчик? Тогда вы на нужной странице!</p>
            <p>Вы можете найти меня на следующих ресурсах:</p>
            <LinksWrapper>
              <ContactLink target="_blank" href='https://github.com/Locoroco24'>
                <ContactImg src='./img/github.png'/>
              </ContactLink>
              <ContactLink target="_blank" href='https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80-%D0%BC%D0%B0%D1%80%D0%B8%D1%87%D0%B5%D0%B2-b47b36206/'>
                <ContactImg src='./img/linkedin.png'/>
              </ContactLink>
              <ContactLink target="_blank" href='https://t.me/Locoroco24'>
                <ContactImg src='./img/telegram.png'/>
              </ContactLink>
            </LinksWrapper>
            <p>Либо напишите мне прямо сейчас.</p>
          </div>
          <FormComponent />
        </ContactsInner>
      </ContactsWrapper>
    </section>
  )
}