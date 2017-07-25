/**
 * Created by User on 7/21/2017.
 */
//Returns statuses made by friends
//Also returns the likes associated with the statuses and friends
Meteor.publishComposite('friendData', {
    find: function () {
        return Friendships.find({friendship: {$in: [this.userId]}});
    },
    children: [
        {
            find: function (result) {
                return Statuses.find({owner: {$in: result.friendship}});
            },
            children: [
                {
                    find: function (status, result) {
                        return Likes.find({
                            $or: [
                                {owner: { $in : result.friendship}},
                                {status: status._id}
                            ]
                        })
                    }
                }
            ]
        }
    ]
})