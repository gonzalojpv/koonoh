import moment from 'moment'

export default {
    formatMoney(val, n, x) {
        if (val % 1 !== 0 && n < 2) {
            n = 2
        }
        let re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')'
        return parseFloat(val)
            .toFixed(Math.max(0, ~~n))
            .replace(new RegExp(re, 'g'), '$&,')
    },
    dateFormat(date, format, fromFormat = false) {
        if (date === null) {
            return moment().format(format)
        }
        if (fromFormat) {
            return moment(date, fromFormat).format(format)
        }
        return moment(date).format(format)
    },
}
