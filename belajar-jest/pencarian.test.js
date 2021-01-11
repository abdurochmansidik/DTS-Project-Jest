const cariData = require('./pencarian') 

describe("Fungsi filter pencarian",() => {
    test("Cari data berdasarkan keyword (mis. 'link')",() => {
        const dataUrl = [
            {id:1, url:"https://www.url1.dev"},
            {id:2, url:"https://www.url1.dev"},
            {id:3, url:"https://www.link.dev"},
        ]

        const output = [{id:3, url:"https://www.link.dev"}]
        const kataKunci = "link"
        expect(cariData(dataUrl,kataKunci)).toEqual(output)
    })
})