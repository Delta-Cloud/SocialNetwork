/**
 * Created by User on 7/21/2017.
 */
Meteor.publish('friendships', function () {
    return Friendships.find({ friendship: { $in : [this.userId]}});
});