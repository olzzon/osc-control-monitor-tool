import osc from 'osc'

const OSC_SERVER_IP: string = '127.0.0.1'
const OSC_SERVER_PORT: number = 5255

this.oscConnection = new osc.UDPPort({
    remoteAddress: OSC_SERVER_IP,
    remotePort: OSC_SERVER_PORT
});

this.oscConnection
.on("ready", () => {
})
.on('message', (message: any) => {
    console.log('Received Message :', message)
})
.on('error', (error: any) => {
})

this.oscConnection.open()

this.oscConnection.send({
    address: '/state/full',
})

console.log('RUNNING')