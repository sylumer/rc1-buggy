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
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Forward, speed)
    }
    if (command == "b") {
        Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, speed)
    }
    if (command == "l") {
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, speed)
    }
    if (command == "r") {
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Right, speed)
    }
    if (command == "s") {
        Kitronik_Move_Motor.stop()
    }
}
let speed = 0
let bias = 0
radio.setGroup(1)
bias = 1
speed = 25
Kitronik_Move_Motor.turnRadius(Kitronik_Move_Motor.TurnRadii.Tight)
basic.showIcon(IconNames.Asleep)
basic.forever(function () {
	
})
