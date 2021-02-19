import EventEmitter from 'eventemitter3'

const globalEmitter = new EventEmitter()

globalEmitter.on('error', (err) => {
    console.error(err)
})

export default globalEmitter
