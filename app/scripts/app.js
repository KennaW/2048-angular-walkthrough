angular
.module('twentyfortyeightApp', ['Game'])
.controller('GameController', function(GameManager) {
    this.game = GameManager;
});
