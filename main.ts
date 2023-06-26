radio.onReceivedString(function (receivedString) {
    move(receivedString, speed)
})
radio.onReceivedValue(function (name, value) {
    if (name == "speed") {
        speed = value
    }
})
function move (command: string, speed: number) {
    Kitronik_Move_Motor.motorBalance(Kitronik_Move_Motor.SpinDirections.Left, bias)
    if (command == "f") {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . # # # .
            `)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, speed)
    }
    if (command == "b") {
        basic.showLeds(`
            . # # # .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, speed)
    }
    if (command == "l") {
        basic.showLeds(`
            . . # . .
            # # # # .
            # # # # #
            # # # # .
            . . # . .
            `)
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, speed)
    }
    if (command == "r") {
        basic.showLeds(`
            . . # . .
            . # # # #
            # # # # #
            . # # # #
            . . # . .
            `)
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Right, speed)
    }
    if (command == "s") {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        Kitronik_Move_Motor.stop()
    }
    if (command == "LED") {
        lights = !(lights)
        setLED()
    }
    if (command == "COLOUR") {
        if (colour == 4) {
            colour = 0
        } else {
            colour = colour + 1
        }
        basic.showNumber(colour)
        setLED()
        basic.clearScreen()
    }
    if (command == "HORN") {
        Kitronik_Move_Motor.beepHorn()
    }
}
function setLED () {
    if (lights) {
        moveMotorZIP.setColor(list[colour])
    } else {
        moveMotorZIP.clear()
    }
    moveMotorZIP.show()
}
let lights = false
let colour = 0
let list: number[] = []
let moveMotorZIP: Kitronik_Move_Motor.MoveMotorZIP = null
let speed = 0
let bias = 0
radio.setGroup(1)
bias = 1
speed = 10
moveMotorZIP = Kitronik_Move_Motor.createMoveMotorZIPLED(4)
moveMotorZIP.setBrightness(100)
list = [
Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Blue),
Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Red),
Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Green),
Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Purple),
Kitronik_Move_Motor.colors(Kitronik_Move_Motor.ZipLedColors.Orange)
]
colour = 0
lights = false
Kitronik_Move_Motor.turnRadius(Kitronik_Move_Motor.TurnRadii.Tight)
basic.showIcon(IconNames.Asleep)
