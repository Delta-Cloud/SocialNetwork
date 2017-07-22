/**
 * Created by User on 7/20/2017.
 */
const moment = require('moment');
Template.registerHelper('statusDate', (date) => {
    return date ? moment(date).format('DD MM YYYY@HH:mm'): '';
});

Template.registerHelper('checkRelationshipStatus', (type, id) => {
    switch (type) {
        case 'requestSent':
            return !!Requests.findOne({requesterId: Meteor.userId(), targetId: id});
        case 'requestReceived':
            return !!Requests.findOne({requesterId: id, targetId: Meteor.userId()});
        case 'alreadyFriends':
            return !!Friendships.findOne({friendship: { $in: [id]}});
        default:
            console.log("Something went wrong");
            break;
    }
});