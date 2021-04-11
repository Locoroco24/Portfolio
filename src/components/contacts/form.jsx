import {useFormik} from 'formik';
import * as Yup from 'yup';
import {Error, Form, FormElement, Input, ResetButton, SubmitButton, TextArea} from "./StyledContacts";

export const FormComponent = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      text: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Введите настоящее имя')
        .required('Введите имя'),
      email: Yup.string()
        .email('Введите настоящий E-mail')
        .required('Введите E-mail'),
      text: Yup.string()
        .required('Заполните поле')
    })
  });

  return (
    <Form
      onSubmit={formik.handleSubmit}
      onReset={formik.handleReset}
    >
      <FormElement>
        <label htmlFor="name" />
        <Input
          name='name'
          placeholder='Ваше имя'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <Error errorMessage={formik.errors.name} />
        ) : null}
      </FormElement>
      <FormElement>
        <label htmlFor="email" />
        <Input
          name='email'
          placeholder='Ваш E-mail'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <Error errorMessage={formik.errors.email} />
        ) : null}
      </FormElement>
      <FormElement>
        <label htmlFor="text" />
        <TextArea
          name='text'
          placeholder='Сообщение'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.text}
        />
        {formik.touched.text && formik.errors.text ? (
          <Error errorMessage={formik.errors.text} />
        ) : null}
      </FormElement>
      <ResetButton type='reset'>Сбросить</ResetButton>
      <SubmitButton type='submit'>Отправить сообщение</SubmitButton>
    </Form>
  )
}