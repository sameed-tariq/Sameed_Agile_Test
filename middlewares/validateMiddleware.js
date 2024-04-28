const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (error) {
    const extraDetails = error.errors[0].message;
    const message = "Fill the Input Properly!";
    const status = 400;
    const err = {
      status,
      message,
      extraDetails,
    };
    next(err);
  }
};

module.exports = validate;
