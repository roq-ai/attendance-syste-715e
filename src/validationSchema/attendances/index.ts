import * as yup from 'yup';

export const attendanceValidationSchema = yup.object().shape({
  date: yup.date().required(),
  employee_id: yup.string().nullable(),
});
