/**
 * Created by User on 7/20/2017.
 */
Meteor.publish('requests', function () {
    return Requests.find({$or: [
        { requesterId: this.userId },
        {targetId: this.userId}
    ]});
});