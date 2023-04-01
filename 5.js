class Device {
    constructor(amper, volt){
        this.color = 'белый',
        this.amper = amper ,
        this.volt = volt

    }

    deviceStatus = function (condition, device) {
            if (condition) {
                console.log(`${device} потребляемая мощность = ${this.amper * this.volt} вольт`)
            } else {
                console.log(`${device} выключен(-а)`)
            }

        }
}


class Tv extends Device{
    constructor(platform, amper, volt) {
        super(volt,amper),
        this.tv_platform = platform
    }
}
const tv = new Tv('Tizen',3,220)
console.log(tv)
tv.deviceStatus(true, 'телик')


class Battery extends Device{
    constructor(section, amper, volt) {
        super(volt,amper),
            this.battery_section = section
    }
}
const battery = new Battery('5 секций',2,220)
console.log(battery)
battery.deviceStatus(true, 'батарея')
