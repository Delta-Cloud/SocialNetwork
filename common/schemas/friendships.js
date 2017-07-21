/**
 * Created by User on 7/20/2017.
 */
Friendships = new Mongo.Collection('friendships');

const Schema = {};

Schema.Friendships = new SimpleSchema({
        friendName1: {type: String},
        friendName2: {type: String},
        owner: {
            type: String,
            autoValue: function () {
                return this.userId;
            }
        },
        friendship: {type: [String]},
        createdAt: {
            type: Date,
            autoValue: function () {
                return new Date();
            }
        }
});

Friendships.attachSchema(Schema.Friendships);