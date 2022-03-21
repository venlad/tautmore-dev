import * as Yup from 'yup';

export const rescheduleValidation = Yup.object().shape({
    rescheduleDate: Yup.string().required('Re-schedule date is Required'),
    reason: Yup.string().required('Reason is Required'),
});

export default {};
