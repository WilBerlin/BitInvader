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
    if (GameStarted == 1) {
        Shoot = game.createSprite(Player.get(LedSpriteProperty.X), Player.get(LedSpriteProperty.Y))
        Shoot.change(LedSpriteProperty.Brightness, 255)
        for (let index = 0; index < 4; index++) {
            Shoot.change(LedSpriteProperty.Y, -1)
            if (Shoot.isTouching(Enemy)) {
                Enemies = 0
                game.addScore(1)
                Enemy.delete()
                Shoot.delete()
            }
            basic.pause(100)
        }
        Shoot.delete()
    }
})
let Enemy: game.LedSprite = null
let Shoot: game.LedSprite = null
let Player: game.LedSprite = null
let Enemies = 0
let GameStarted = 0
let dirPlayer = 0
dirPlayer = 1
GameStarted = 0
Enemies = 0
game.setScore(0)
basic.forever(function () {
    if (GameStarted == 1) {
        Player.move(dirPlayer)
        basic.pause(120)
    } else {
        basic.showArrow(ArrowNames.West)
    }
})
basic.forever(function () {
    if (GameStarted == 1 && Enemies == 0) {
        Enemies = 1
        Enemy = game.createSprite(randint(0, 4), 0)
        Enemy.set(LedSpriteProperty.Brightness, 80)
        for (let index = 0; index < 4; index++) {
            Enemy.change(LedSpriteProperty.Y, 1)
            basic.pause(200)
        }
        if (Enemy.isTouching(Player)) {
            game.gameOver()
        }
        Enemy.delete()
        Enemies = 0
    }
})
