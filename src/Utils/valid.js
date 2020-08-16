import Joi from '@hapi/joi';

export const loginSchema = Joi.object({
  email: Joi.string().email({minDomainSegments: 2,tlds: {allow: ['com', 'net']}}).required(),
  password: Joi.string().min(3).required(),
  // password: Joi.string().min(3).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
});
export const signupSchema = Joi.object({
  fullname: Joi.string().min(3).max(30).required(),
  email: Joi.string().email({minDomainSegments: 2,tlds: {allow: ['com', 'net']}}).required(),
  password: Joi.string().min(3).required(),
  // password: Joi.string().min(3).pattern(new RegExp('^[a-zA-Z0-9]{5,30}$')).required(),
  form: Joi.string(),
});
export const forgotSchema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  requestType: Joi.string().required()
});
export const otpSchema = Joi.object({
  otp: Joi.string().required(),
});
export const resetSchema = Joi.object({
  password1: Joi.string().min(3).required(),
  password2: Joi.string().min(3).required(),
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
