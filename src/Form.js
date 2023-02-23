import { useFormik } from 'formik';

const Form = () => {

    const validate = values => {
        const errors = {};

        if (!values.name ) {
            errors.name = 'Required! Please enter your name.'
        }
        else if (values.name.length < 2) {
            errors.name = 'Your name should consist at least from 2 characters';
        }
        else if (values.name.length > 15) {
            errors.name = 'Your name must be 15 characters or less';
        }

        if (!values.email) {
            errors.email = 'Required';
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
        }

        if (values.amount < 5) {
            errors.amount = 'The minimum amount that you can donate is 5';
        }

        if (!values.currency) {
            errors.currency = 'Required!';
        }

        if (!values.terms) {
            errors.terms = 'Required!';
        }

        return errors;
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            amount: 5,
            currency: '',
            text: '',
            terms: false
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
          },
    });
    return (
        <form className="form" onSubmit={formik.handleSubmit}>
            <h2>Donate</h2>
            <label htmlFor="name">What is your name?</label>
            <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
            />
            {formik.errors.name && formik.touched.email ? <div className="error">{formik.errors.name}</div> : null}
            <label htmlFor="email">What is your email?</label>
            <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email ? <div className="error">{formik.errors.email}</div> : null}
            <label htmlFor="amount">Amount</label>
            <input
                id="amount"
                name="amount"
                type="number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.amount}
            />
            {formik.errors.amount && formik.touched.amount ? <div className="error">{formik.errors.amount}</div> : null}
            <label htmlFor="currency">Currency</label>
            <select
                id="currency"
                name="currency"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.currency}>
                    <option value="">Choose your currency</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
            </select>
            {formik.errors.currency && formik.touched.currency ? <div className="error">{formik.errors.currency}</div> : null}
            <label htmlFor="text">Your Message</label>
            <textarea 
                id="text"
                name="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.text}
            />
            <label className="checkbox">
                <input 
                    name="terms" 
                    type="checkbox" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.terms}/>
                I accept the terms and conditions
            </label>
            {formik.errors.terms && formik.touched.terms ? <div className="error">{formik.errors.terms}</div> : null}
            <button type="submit">Send</button>
        </form>
    )
}

export default Form;