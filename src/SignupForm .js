import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyCheckbox, MySelect, MyTextArea, MyTextInput } from './CustomInputs';


const SignupForm  = () => {
  return (
    <Formik
        initialValues={{
            name: '',
            email: '',
            amount: 5,
            currency: '',
            text: '',
            terms: false
        }}
        validationSchema={Yup.object({
            name: Yup.string()
                  .min(2, 'At least must be 2 characters')
                  .max(15, 'Must be 15 characters or less')
                  .required('Required!'),
            email: Yup.string()
                    .email('You should provide a valid email address')
                    .required('Required'),
            amount: Yup.number()
                    .min(5, 'The minimum amount is 5'),
            currency: Yup.string().required('Choose your currency'),
            terms: Yup.boolean().oneOf([true], 'In order to continue you should accept our terms and conditions')
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              resetForm();
            }, 1000);
        }}
    >
        {({ isSubmitting }) => (
            <Form className="form">
            <h2 className="form__h2">Donate</h2>

            <MyTextInput
                label="What is your name ?"
                name="name"
                type="text" 
                placeholder="John Doe"
            />

            <MyTextInput
                label="What is your email?"
                name="email"
                type="text" 
                placeholder="example@gmail.com"
            />

            <MyTextInput
                label="Amount"
                name="amount"
                type="number" 
            />

            <MySelect label="Currency" name="currency">
                <option value="">Choose your currency</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
            </MySelect>

            <MyTextArea
                label="Your Message"
                name="text"
                type="textarea"
            />

            <MyCheckbox name="terms">
                I accept the terms and conditions
            </MyCheckbox>

            <button type="submit" disabled={isSubmitting}>Send</button>
        </Form>
        )}
    </Formik>
  )
}

export default SignupForm;