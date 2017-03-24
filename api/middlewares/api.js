module.exports = () => (ctx, next) => {
  next().then(() => {
    let body = {
      viewer: ctx.body || {}
    };
    if (ctx.errors) {
      body = Object.assign(body, {
        success: false,
        message: ctx.errors,
      });
      ctx.body = body;
      return;
    }
    ctx.body = Object.assign(body, {
      success: true,
      message: 'success',
    });
  });
}
