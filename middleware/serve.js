// old  code

// exports.serveContentTypes = (req, res, next) => {
//     const encoding = req.headers['accept-encoding']
//     const extension = path.extname(req.originalUrl).substr(1)
  
//     if (encoding && encoding.includes('br')) {
//       req.url = `${req.url}.br`
//       res.set('Content-Encoding', 'br')
//     } else if (encoding && encoding.includes('gzip')) {
//       req.url = `${req.url}.gz`
//       res.set('Content-Encoding', 'gzip')
//     }
  
//     res.set('Content-Type', extension === '.js' ? 'text/javascript' : 'text/css')
//     next()
//   }

// // new  code, better for readability and usability

//   exports.setContentType = (req, res, next) => {
//     const types = {
//       js: 'text/javascript',
//       css: 'text/css'
//     }
//     // path.extname to get extension of file
//     // .substr(1) to remove dot at beginning of extension
//     const extension = path.extname(req.originalUrl).substr(1)
    
//     if (extension && types[extension]) res.set('Content-Type', types[extension])
    
//     next()
//   }

//   exports.setContentEncoding = (req, res, next) => {
//     const encodeHeader = req.headers['accept-encoding']
//     const encoding = findOneInString(['br', 'gzip'], encodeHeader)
    
//     if (!encoding) return next()
    
//     req.url = `${req.url}.${encoding}`
//     res.set('Content-Encoding', encoding)
    
//     next()
//   }