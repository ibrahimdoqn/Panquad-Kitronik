function Geri () {
	
}
input.onButtonPressed(Button.A, function () {
    radio.sendValue("S1", 65)
    radio.sendValue("S2", 90)
    radio.sendValue("S3", 135)
    radio.sendValue("S4", 100)
    radio.sendValue("S9", 110)
    radio.sendValue("S6", 100)
    radio.sendValue("S7", 65)
    radio.sendValue("S8", 100)
})
function Ileri () {
    radio.sendValue("S2", 120)
}
input.onButtonPressed(Button.AB, function () {
    Ileri()
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("S1", 65)
    radio.sendValue("S2", 160)
    radio.sendValue("S3", 135)
    radio.sendValue("S4", 30)
    radio.sendValue("S9", 110)
    radio.sendValue("S6", 30)
    radio.sendValue("S7", 65)
    radio.sendValue("S8", 160)
})
radio.setGroup(2)
