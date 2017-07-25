/**
 * Created by User on 7/19/2017.
 */
Template.listStatuses.onCreated(function () {
    this.autorun(()=> {
        this.subscribe('userStatuses');
        this.subscribe('friendData');
    });
});

Template.listStatuses.helpers({
    //returns sorted Statuses in descending order
    'statuses' () { return Statuses.find({}, {sort: {createdAt: -1}});},
    'isOwnerOfStatus' (owner) {return owner === Meteor.userId()? true : false},
    'hasLikedStatus' (statusId) {
        let likes = Likes.find({statusId, owner: Meteor.userId()}).fetch();
        return likes && likes.length ? true: false;
    },
    'statusHasLikes' () {
        return !!Likes.findOne({statusId: this._id});
    },
    'likesData' () {
        let people = Likes.find({statusId: this._id});
        let howMany = people.length;
        return {
            howMany,
            people,
            notation: howMany > 1 ? 'people like': 'person likes'
        }
    }
});

Template.listStatuses.events({
    'click button[data-action="removeStatus"]' () {
        Meteor.call('statuses.remove', this._id);
    },
    'click button[data-action="likeStatus"]' (){
        Meteor.call('likes.add', this._id);
    },
    'click button[data-action="dislikeStatus"]' (){
        Meteor.call('likes.remove', this._id);
    }

});