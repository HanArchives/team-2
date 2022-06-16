exports.setContentType = (req, res, next) => {
  const types = {
    js: 'text/javascript',
    css: 'text/css',
  };
  // path.extname to get extension of file
  // .substr(1) to remove dot at beginning of extension
  const extension = path.extname(req.originalUrl).substr(1);

  if (extension && types[extension]) res.set('Content-Type', types[extension]);

  next();
};

exports.setContentEncoding = (req, res, next) => {
  const encodeHeader = req.headers['accept-encoding'];
  const encoding = findOneInString(['br', 'gzip'], encodeHeader);

  if (!encoding) return next();

  req.url = `${req.url}.${encoding}`;
  res.set('Content-Encoding', encoding);

  next();
};
