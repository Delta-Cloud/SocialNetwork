/**
 * Created by User on 7/20/2017.
 */

Template.findUsers.onCreated(function(){
    this.autorun(() => {
        this.subscribe('requests');
        this.subscribe('friendships')
    });
});

Template.findUsers.helpers({
    'usersIndex' () {
        return UsersIndex;
    },
    'inputAttributes' () {
        return {'class': 'form-control form-group'};
    }
});

Template.findUsers.events({
    'click button[data-action="requestFriendship"]'() {
        Meteor.call('requests.add', this.__originalId, this.profile.fullName);
    },
    'click button[data-action="cancelFriendRequest"]'() {
        Meteor.call('requests.cancel', 'userHasSent', this.__originalId);
    },
    'click button[data-action="rejectRequest"]'() {
        Meteor.call('requests.cancel', 'userHasReceived', this.__originalId);
    },
    'click button[data-action="confirmFriendship"]'() {
        Meteor.call('requests.confirm', this.__originalId, this.profile.fullName);
    },
    'click button[data-action="cancelFriendship"]'() {
        Meteor.call('friendships.cancel', this.__originalId, this.profile.fullName);
    }
});