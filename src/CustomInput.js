import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const CustomInput = () => {

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
                        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'Invalid email address')
                        .required('Required'),
                amount: Yup.number()
                        .min(5, 'The minimum amount is 5'),
                terms: Yup.boolean()
            })}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
            }}
        >
            <Form className="form">
                <h2 className="form__h2">Donate</h2>

                <label htmlFor="name" className="form__label">What is your name?</label>
                <Field name="name" type="text" className="form__input" />
                <ErrorMessage component='div' className="error" name="name" />

                <label htmlFor="email" className="form__label">What is your email?</label>
                <Field name="email" type="email" className="form__input" />
                <ErrorMessage component='div' className="error" name="email" />

                <label htmlFor="amount" className="form__label">Amount</label>
                <Field name="amount" type="number" className="form__input"/>
                <ErrorMessage component='div' className="error" name="amount" />

                <label htmlFor="currency" className="form__label">Currency</label>
                <Field name="currency" as="select" className="form__select">
                    <option value="">Choose your currency</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                </Field>
                <ErrorMessage component='div' className="error" name="currency" />

                <label htmlFor="text" className="form__label">Your Message</label>
                <Field name="text" as="textarea" className="form__textarea"/>

                <label className="form__label checkbox" >
                <Field name="terms" type="checkbox" className="form__input"/>
                    I accept the terms and conditions
                </label>
                <ErrorMessage component='div' className="error" name="terms" />

                <button type="submit">Send</button>
            </Form>
        </Formik>
    )
}

export default CustomInput;