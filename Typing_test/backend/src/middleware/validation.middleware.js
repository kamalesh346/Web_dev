export function validate(schema) {
    return (req, res, next) => {
        const { error, value } = schema.vlaidate(req.body,{
            abortEarly: false,
            stripUnknown: true
        });

        if(error) {

            const errors = error.details.map(detail => detail.message)

            return res.status(400).json({
                errors
            });
        }

        req.body = value; // sanitized data
        next();
    };
}