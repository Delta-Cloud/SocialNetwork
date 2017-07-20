/**
 * Created by User on 7/19/2017.
 */
Meteor.publish('userStatuses', function(){
    return Statuses.find({ owner: this.userId});
});