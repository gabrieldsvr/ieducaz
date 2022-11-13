import moment from "moment";
export const DateUtils = {
    formatDate: (date: string) :string => {
        return moment(date).format('DD/MM/YYYY');
    }
};