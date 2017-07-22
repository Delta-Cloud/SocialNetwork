/**
 * Created by User on 7/21/2017.
 */
Meteor.publishComposite('friendData', {
    find: function () {
        return Friendships.find({friendship: {$in: [this.userId]}});
    },
    children: [
        {
            find: function (result) {
                return Statuses.find({owner: {$in: result.friendship}});
            }
        }
    ]
})