let VRB = 0
let VRA = 0
let SwitchD = 0
let SwitchC = 0
let SwitchB = 0
let SwitchA = 0
let LeftStickX = 0
let LeftStickY = 0
let RightStickY = 0
let RightStickX = 0
let index = 0
let RightJoyStick_LSB = 0
let response2: number[] = []
let input2: Buffer = null
let messageID: Buffer = null
let Color = 0
let strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
strip.setBrightness(30)
strip.showColor(neopixel.colors(NeoPixelColors.White))
apds9960.Init(ClickID.B)
let getUserData = [
254,
25,
1,
5,
0,
0
]
let sortpos_yellow = 52
let sortpos_blue = 90
let sortpos_red = 14
let binpos_yel = 142
let binpos_blue = 180
let binpos_red = 104
let Blue_min = 100
let Blue_max = 300
let Yellow_max = 50
let Yellow_min = 20
let Red_max = 10
Red_max = 0
basic.forever(function () {
    Color = apds9960.ReadColor()
    serial.writeValue("x", Color)
})
basic.forever(function () {
    let parsedData: number[] = []
    messageID = buffer.fromArray(getUserData)
    buffer.UARTSendBuffer2(messageID, BoardID.zero, ClickID.B)
    basic.pause(5)
    input2 = buffer.uartReadBuffer(BoardID.zero, ClickID.B)
    response2 = buffer.toArray(input2)
    RightJoyStick_LSB = response2[7]
    while (index <= response2.length - 7) {
        parsedData.push(response2[index + 6] + response2[index + 7] * 256)
        index += 2
    }
    RightStickX = parsedData[0]
    RightStickY = parsedData[1]
    LeftStickY = parsedData[2]
    LeftStickX = parsedData[3]
    SwitchA = parsedData[4]
    SwitchB = parsedData[5]
    SwitchC = parsedData[6]
    SwitchD = parsedData[7]
    VRA = parsedData[8]
    VRB = parsedData[9]
    if (SwitchC == 1000) {
        servos.P02.setAngle(binpos_blue)
    } else if (SwitchC == 1500) {
        servos.P02.setAngle(binpos_yel)
    } else if (SwitchC == 2000) {
        servos.P02.setAngle(binpos_red)
    }
    bBoard_Motor.motorDuty(0.2 * RightStickY - 300)
    index = 0
})
basic.forever(function () {
    let Red_min = 0
    if (apds9960.ReadColor() >= Blue_min && apds9960.ReadColor() <= Blue_max) {
        servos.P02.setAngle(sortpos_blue)
    } else if (apds9960.ReadColor() >= Red_min && apds9960.ReadColor() <= Red_max) {
        servos.P02.setAngle(sortpos_red)
    } else if (apds9960.ReadColor() >= Yellow_min && apds9960.ReadColor() <= Yellow_max) {
        servos.P02.setAngle(sortpos_yellow)
    }
})
