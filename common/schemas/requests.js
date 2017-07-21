/**
 * Created by User on 7/20/2017.
 */
Requests = new Mongo.Collection('requests');

const Schemas = {};

Schemas.Requests = new SimpleSchema({
    requesterId: {
        type: String,
        autoValue: function () {
            return this.userId;
        }
    },
    requesterName: {
        type: String,
        autoValue: function () {
            return Meteor.user().profile.fullName
        }
    },
    targetId: {
        type: String
    },
    targetName: {
        type: String
    }
});

Requests.attachSchema(Schemas.Requests);