import Joi from "joi"

const resetpwdValid = Joi.object({
    newPassword: Joi.string().min(8).required(),
    email: Joi.string().required(),
})

export default resetpwdValid
