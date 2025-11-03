function asyncHandler(requestHandler) {
  return function (req, res, next) {
    try {
      return Promise.resolve(
        requestHandler.apply(this, [req, res, next])
      ).catch(next);
    } catch (err) {
      next(err);
    }
  };
}

export { asyncHandler };
export default asyncHandler;
