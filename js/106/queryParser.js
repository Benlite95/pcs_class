//export default (req, res, next) => {
module.exports = (req, res, next) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  req.searchParams = url.searchParams;
  next();
};
