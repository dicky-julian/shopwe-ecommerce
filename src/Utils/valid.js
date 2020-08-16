import Joi from '@hapi/joi';

export const loginSchema = Joi.object({
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: {allow: ['com', 'net']},
  }),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
});
export const signupSchema = Joi.object({
  fullname: Joi.string().min(3).max(30).required(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: {allow: ['com', 'net']},
  }),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{5,30}$')),
});
export const forgotSchema = Joi.object({
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: {allow: ['com', 'net']},
  }),
});
export const otpSchema = Joi.object({
  otp: Joi.string().required(),
});
export const resetSchema = Joi.object({
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
});
export const searchSchema = Joi.object({
  text: Joi.string().required(),
});
export const profileSchema = Joi.object({
  fullname: Joi.string().min(3).max(30).required(),
  birth: Joi.date().required(),
});
export const changePassSchema = Joi.object({
  old_password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  new_password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
});
