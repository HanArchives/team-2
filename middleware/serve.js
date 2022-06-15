exports.serveContentTypes = (req, res, next) => {
    const encoding = req.headers['accept-encoding']
    const extensionIndex = req.originalUrl.lastIndexOf('.')
    const extension = req.originalUrl.slice(extensionIndex)
  
    if (encoding && encoding.includes('br')) {
      req.url = `${req.url}.br`
      res.set('Content-Encoding', 'br')
    } else if (encoding && encoding.includes('gzip')) {
      req.url = `${req.url}.gz`
      res.set('Content-Encoding', 'gzip')
    }
  
    res.set('Content-Type', extension === '.js' ? 'text/javascript' : 'text/css')
    next()
  }