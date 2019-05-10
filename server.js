const express = require('express')
const next = require('next')
const os = require('os')
const compression = require('compression')
const cacheableResponse = require('cacheable-response')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()
    server.use(compression())
    const interfaces = os.networkInterfaces()

    server.get('/anime/:id', (req, res) => {
      const actualPage = '/post'
      const queryParams = { id: req.params.id }
      return app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    const getNetworkAddress = () => {
      for (const name of Object.keys(interfaces)) {
        for (const interface of interfaces[name]) {
          const { address, family, internal } = interface
          if (family === 'IPv4' && !internal) {
            return address
          }
        }
      }
    }

    server.listen(3000, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
      console.log(`> On your network: http://${getNetworkAddress()}:3000`)
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
