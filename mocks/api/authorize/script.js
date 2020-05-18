module.exports = (() => {
  return Boolean(Math.round(Math.random()))
    ? { status: "ERROR", code: 1, error: "Wrong email or password" }
    : {
        status: "SUCCESS",
        code: 2,
        token: Math.random().toString(36).substring(7),
        type: "Bearer",
      };
})();
