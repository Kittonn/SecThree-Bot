module.exports = {
    name: 'ready',
    execute(client) {
        client.user.setActivity('"/help" or ";help"', {type: 'PLAYING'})
    }
}