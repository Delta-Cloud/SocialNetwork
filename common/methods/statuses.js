/**
 * Created by User on 7/19/2017.
 */
Meteor.methods({
    'statuses.add': function(status) {
        if(!this.userId) {
            throw new Meteor.Error(401, 'You must be logged in');
        }
        check(status, String);
        Statuses.insert({ status });
    },
    'statuses.remove': function (id) {
        if(!this.userId) {
            throw new Meteor.Error(401, 'You must be logged in');
        }
        check(id, String);
        Statuses.remove({_id: id, owner: this.userId});
    }
});