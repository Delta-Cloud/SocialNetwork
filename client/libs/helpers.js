/**
 * Created by User on 7/20/2017.
 */
const moment = require('moment');
Template.registerHelper('statusDate', (date) => {
    return date ? moment(date).format('DD MM YYYY@HH:mm'): '';
});