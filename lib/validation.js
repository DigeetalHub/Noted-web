import * as yup from "yup";

export const contactSchema = (inputs) =>
  yup.object({
    Name: yup.string().required(inputs[0].errorMsg),
    Email: yup
      .string()
      .email()
      .required(inputs[1].errorMsg)
      .matches(inputs[1].pattern, "Please enter a valid email."),
    Phone: yup
      .string()
      .required(inputs[2].errorMsg)
      .matches(/^\d+$/, inputs[2].errorMsg2),
    Message: yup
      .string()
      .required("We'd really love to hear from you. 😃")
      .min(5, "Your message is too short. ❌"),
  });
