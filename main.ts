function SagaDon () {
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, 160)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo3, 160)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo5, 160)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo7, 160)
    SolOnIleri()
    basic.pause(200)
    SagArkaGeri()
    basic.pause(200)
    SolArkaGeri()
    basic.pause(200)
    SagOnIleri()
    basic.pause(200)
}
function SolOnGeri () {
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, 120)
    basic.pause(100)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, 170)
    basic.pause(100)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, 170)
}
radio.onReceivedNumber(function (receivedNumber) {
    Gelen = receivedNumber
})
function SagArkaIleri () {
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo8, 120)
    basic.pause(100)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo7, 150)
    basic.pause(100)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo8, 170)
}
function Geri () {
    SagOnGeri()
    basic.pause(200)
    SolOnGeri()
    basic.pause(200)
    KollariIleriCek()
    basic.pause(200)
    SolArkaGeri()
    basic.pause(200)
    SagArkaGeri()
    basic.pause(200)
}
input.onButtonPressed(Button.A, function () {
    Gelen = 1
})
function Ileri () {
    SolArkaIleri()
    basic.pause(200)
    SagArkaIleri()
    basic.pause(200)
    KollariGeriCek()
    basic.pause(200)
    SolOnIleri()
    basic.pause(200)
    SagOnIleri()
    basic.pause(200)
}
function SagOnGeri () {
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, 65)
    basic.pause(100)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo3, 20)
    basic.pause(100)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, 15)
}
function SolArkaGeri () {
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo6, 65)
    basic.pause(100)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo5, 90)
    basic.pause(100)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo6, 15)
}
input.onButtonPressed(Button.AB, function () {
    Gelen = 0
})
function SolOnIleri () {
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, 120)
    basic.pause(100)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, 90)
    basic.pause(100)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, 170)
}
input.onButtonPressed(Button.B, function () {
    Gelen = 2
})
function SagOnIleri () {
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, 65)
    basic.pause(100)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo3, 90)
    basic.pause(100)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, 15)
}
function KollariIleriCek () {
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, 90)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo3, 90)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo5, 40)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo7, 150)
}
function KollariGeriCek () {
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, 170)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo3, 20)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo5, 90)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo7, 90)
}
function SolArkaIleri () {
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo6, 65)
    basic.pause(100)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo5, 40)
    basic.pause(100)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo6, 16)
}
function SolaDon () {
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, 30)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo3, 30)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo5, 30)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo7, 30)
    SolOnIleri()
    basic.pause(200)
    SagArkaGeri()
    basic.pause(200)
    SolArkaGeri()
    basic.pause(200)
    SagOnIleri()
    basic.pause(200)
}
function Başlangıç () {
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, 90)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo3, 90)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo5, 90)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo7, 90)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, 170)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, 15)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo6, 15)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo8, 170)
}
function SagArkaGeri () {
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo8, 120)
    basic.pause(100)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo7, 90)
    basic.pause(100)
    kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo8, 170)
}
let Gelen = 0
makerbit.connectUltrasonicDistanceSensor(DigitalPin.P0, DigitalPin.P1)
radio.setGroup(2)
Başlangıç()
basic.forever(function () {
    basic.pause(100)
    if (makerbit.getUltrasonicDistance(DistanceUnit.CM) >= 20) {
        if (Gelen == 1) {
            Ileri()
        } else if (Gelen == 2) {
            Geri()
        } else if (Gelen == 3) {
            SagaDon()
        } else if (Gelen == 4) {
            SolaDon()
        }
    } else {
        if (Gelen == 1) {
            for (let index = 0; index < 4; index++) {
                SagaDon()
            }
        }
    }
})
