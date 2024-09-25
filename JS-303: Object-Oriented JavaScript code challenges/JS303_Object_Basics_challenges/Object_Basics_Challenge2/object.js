const player1 = {
    name: 'Ashley',
    color: 'purple',
    isTurn: true,
    play: function(){
        // write code here.
        if (this.isTurn) {
            return player1['name'] + ' is now playing!'
        }
    
    }
}