const player1 = {
    name: 'Ashley',
    color: 'purple',
    isTurn: false,
    play: function(){
        if (this.isTurn) {
            console.log(`${this.name} is now playing!`);
         }
    }
}

const player2 = {
    name: 'Guil',
    color: 'red',
    isTurn: true,
    play: function(){
        if (this['isTurn']) {
            console.log(`${this['name']} is now playing!`);
        }
    }
}