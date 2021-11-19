controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 100, 100)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`Projectile`, mySprite, 0, -50)
    music.playTone(262, music.beat(BeatFraction.Eighth))
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    if (projectile2.overlapsWith(mySprite)) {
        mySprite.destroy(effects.fire, 500)
        music.wawawawaa.play()
    }
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    EnemyCounter += 1
    if (EnemyCounter == 2) {
        game.over(true, effects.blizzard)
        game.reset()
    }
})
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    game.over(false, effects.starField)
    game.reset()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (projectile.overlapsWith(mySprite3)) {
        mySprite3.destroy(effects.rings, 500)
        music.playTone(147, music.beat(BeatFraction.Whole))
    } else if (projectile.overlapsWith(mySprite2)) {
        mySprite2.destroy(effects.spray, 500)
        music.playTone(262, music.beat(BeatFraction.Half))
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    mySprite.destroy(effects.fire, 500)
    music.wawawawaa.play()
})
let EnemyCounter = 0
let projectile: Sprite = null
let projectile2: Sprite = null
let mySprite: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
scene.setBackgroundImage(assets.image`Environment`)
music.powerUp.play()
mySprite2 = sprites.create(assets.image`Enemy spacecraft`, SpriteKind.Enemy)
mySprite3 = sprites.create(assets.image`Enemy mothership`, SpriteKind.Enemy)
mySprite = sprites.create(assets.image`Spacecraft`, SpriteKind.Player)
projectile2 = sprites.create(assets.image`Missile`, SpriteKind.Projectile)
projectile = sprites.create(assets.image`Projectile2`, SpriteKind.Projectile)
mySprite.setPosition(80, 110)
mySprite3.setPosition(10, 10)
mySprite2.setPosition(0, 50)
mySprite2.vx = 40
mySprite2.vy = 1
mySprite2.setFlag(SpriteFlag.BounceOnWall, true)
mySprite3.vx = 20
mySprite3.setFlag(SpriteFlag.BounceOnWall, true)
forever(function () {
    projectile2 = sprites.createProjectileFromSprite(assets.image`Missile2`, mySprite3, 0, 30)
    pause(1000)
})
