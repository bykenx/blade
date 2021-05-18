import { DateFormat } from "../src/dateFormat"

describe('DataFormat Test', () => {
    test('format date test', () => {
        const date1 = new Date('2020-9-10')
        expect(DateFormat.formatDate(date1)).toEqual('2020/9/10')
        expect(DateFormat.formatDate(date1, true)).toEqual('2020/09/10')
        expect(DateFormat.formatDate(date1, undefined, '|')).toEqual('2020|9|10')
    })

    test('format date test', () => {
        const date1 = new Date('2020-09-10 10:09:09')
        expect(DateFormat.formatTime(date1)).toEqual('10:09:09')
        expect(DateFormat.formatTime(date1, false)).toEqual('10:9:9')
        expect(DateFormat.formatTime(date1, undefined, '·')).toEqual('10·09·09')
    })

    test('format datetime test', () => {
        const date1 = new Date('2020-09-10 10:09:09')
        expect(DateFormat.formatDateTime(date1)).toEqual('2020/9/10 10:09:09')
        expect(DateFormat.formatDateTime(date1, [true, false])).toEqual('2020/09/10 10:9:9')
        expect(DateFormat.formatDateTime(date1, undefined, ['|', '·'])).toEqual('2020|9|10 10·09·09')
    })
})