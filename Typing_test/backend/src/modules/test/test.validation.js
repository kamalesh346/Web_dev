import Joi from "joi";
export const submitTestSchema = Joi.object({

    documentId: Joi.number()
    .integer()
    .required(),

    duration: Joi.number()
    .integer()
    .min(1)
    .max(3600)
    .required(),

    wpm: Joi.number()
    .integer()
    .min(0)
    .max(300)
    .required(),

    accuracy: Joi.number()
    .min(0)
    .max(100)
    .precision(2)
    .required()

});