/**
 * Created by User on 7/21/2017.
 */
Meteor.methods({
    'friendships.cancel' (id) {
        if(!this.userId) {
            throw new Meteor.Error(401, 'You must be logged in');
        }
        check(id, String);
        Friendships.remove({
           $and: [
               {friendship: { $in: [id]}},
               {friendship: { $in: [this.userId]}}
           ]
        });
    }
})