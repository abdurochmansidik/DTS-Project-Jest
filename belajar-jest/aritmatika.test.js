const {tambah, kurang} = require('./aritmatika')

test('hasil 1 + 2 adalah 3',() => {
    expect(tambah(1,2)).toBe(3)
})

test('inginnya 4 - 3 hasilnya 1',() => {
    expect(kurang(4,3)).toBe(1)
})