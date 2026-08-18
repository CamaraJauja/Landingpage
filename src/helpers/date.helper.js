import moment from "moment"
import 'moment/locale/es';

moment.locale('es');

export const formatterDate = (date) => {
    if (!date) return;
    return moment(date).format('ll')
}