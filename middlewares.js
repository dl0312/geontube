import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Geontube";
  res.locals.routes = routes;
  next();
};
