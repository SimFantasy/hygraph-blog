import dayjs from 'dayjs'

export const fullDateFormat = date => dayjs(date).format('YYYY-MM-DD hh:mm:ss')
export const dateFormat = date => dayjs(date).format('YYYY-MM-DD')
