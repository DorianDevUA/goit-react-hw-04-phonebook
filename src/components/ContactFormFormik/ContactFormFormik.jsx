import PropTypes from 'prop-types';
import { Formik, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import { FormError } from '../FormError';
import {
  Label,
  StyledField,
  StyledForm,
  SubmitBtn,
} from './ContactFormFormik.styled';

const phoneRegExp =
  /^[\+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/;

const schema = Yup.object().shape({
  name: Yup.string().required(),
  number: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactFormFormik = ({ onSubmit }) => {
  const nameImputId = nanoid();
  const numberImputId = nanoid();

  const handleSubmit = (values, actions) => {
    const { name, number } = values;
    onSubmit(name, number);

    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <label htmlFor={nameImputId}>
            <Label>Name</Label>
            <StyledField type="text" name="name" id={nameImputId} />
            <FormError name="name" />
          </label>

          <label htmlFor={numberImputId}>
            <Label>Number</Label>
            <StyledField type="tel" name="number" id={numberImputId} />
            <FormError name="number" />
            {/* <ErrorMessage name="number" component="div" /> */}
          </label>

          <SubmitBtn type="submit">Add contact</SubmitBtn>
        </StyledForm>
      </Formik>
    </>
  );
};

ContactFormFormik.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
