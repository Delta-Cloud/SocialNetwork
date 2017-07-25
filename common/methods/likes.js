/**
 * Created by User on 7/24/2017.
 */
Meteor.methods({
    'likes.add' (statusId) {
        if(!this.userId) {
            throw new Meteor.Error(401, 'You must be logged in');
        }
        check(statusId, String);
        Likes.insert({ statusId});
    },

    'likes.remove' (statusId) {
        if(!this.userId) {
            throw new Meteor.Error(401, 'You must be logged in');
        }
        check(statusId, String);
        Likes.remove({ statusId, owner: this.userId });
    }

});