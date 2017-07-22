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
    'isOwnerOfStatus' (owner) {return owner === Meteor.userId()? true : false}
});

Template.listStatuses.events({
    'click button[data-action="removeStatus"]' () {
        Meteor.call('statuses.remove', this._id);
    }
});