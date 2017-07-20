/**
 * Created by User on 7/19/2017.
 */
Statuses = new Mongo.Collection('statuses');

const Schemas = {};

Schemas.Statuses = new SimpleSchema({
    status: { type: String},
    firstName: {
        type: String,
        autoValue: function () {
            return Meteor.user().profile.firstName;
        }
    },
    owner: {
        type: String,
        autoValue: function () {
            if(this.isInsert) { return this.userId; }
            else { this.unset(); }
        }
    },
    createdAt: {
        type: Date,
        autoValue: function () {
            if(this.isInsert) { return new Date();}
            else { this.unset();}
        }
    }
});

Statuses.attachSchema(Schemas.Statuses);