input.onButtonPressed(Button.A, function () {
    if (GameStarted == 0) {
        for (let index = 0; index <= 3; index++) {
            basic.showNumber(3 - index)
            basic.pause(100)
        }
        Player = game.createSprite(2, 4)
    } else {
        dirPlayer = dirPlayer * -1
    }
    GameStarted = 1
})
input.onButtonPressed(Button.B, function () {
    Shoot = game.createSprite(Player.get(LedSpriteProperty.X), Player.get(LedSpriteProperty.Y))
    Shoot.change(LedSpriteProperty.Brightness, 100)
    for (let index = 0; index < 4; index++) {
        Shoot.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    Shoot.delete()
})
let Shoot: game.LedSprite = null
let Player: game.LedSprite = null
let GameStarted = 0
let dirPlayer = 0
dirPlayer = 1
GameStarted = 0
basic.forever(function () {
    if (GameStarted == 1) {
        Player.move(dirPlayer)
        basic.pause(120)
    } else {
        basic.showArrow(ArrowNames.West)
    }
})
