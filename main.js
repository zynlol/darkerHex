module.exports = function darker(color, amount) {
    const c = (val) => Math.min(Math.max(val, 0), 0xFF)
    const f = (str) => ('00' + str).slice(-2)

    const numb = parseInt(color.substr(1), 16)
    const r = c((numb >> 16) + amount)
    const g = c(((numb >> 8) & 0x00FF) + amount)
    const b = c((numb & 0x0000FF) + amount)
    return '#' + f(r.toString(16)) + f(g.toString(16)) + f(b.toString(16))

}

//Color; Hex
//amount; Darkness opacity (-25)
//darker('#fffff',-25)
