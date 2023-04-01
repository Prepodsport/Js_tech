function Device(amper,volt) {
    this.amper = amper ,
    this.volt = volt ,
    this.deviceStatus = function (condition, device) {
        if (condition) {
            console.log(`${device} потребляемая мощность = ${this.amper * this.volt} вольт`)
    } else {
            console.log(`${device} выключен(-а)`)
        }

    }
}

function TV(platform){
    this.tv_platform = platform
}

function Battery(section){
    this.battery_section = section
}

TV.prototype = new Device(3,220)
Battery.prototype = new Device(2,220)



const tv = new TV('Tizen')
const battery = new Battery('5 секций')


tv.deviceStatus(true, 'телик')
tv.deviceStatus(false, 'батарея')

console.log(tv)
console.log(battery)
