/**
 * Created by User on 7/19/2017.
 */
Template.addStatus.onCreated(() => {
    Session.set('error', '');
});

Template.addStatus.events({
    'submit form' (event) {
        event.preventDefault();
        const status = event.target.status.value;
        if(!_.isEmpty(status)) {
            Meteor.call('statuses.add', status);
            event.target.status.value = '';
            Session.set('error', '');
        } else {
            Session.set('error', 'The status cannot be blank');
        }

    }
});

Template.addStatus.helpers({
    //Check to see if got error, if we do return error message
    'haveErrors' () {
        if(Session.get('error')) {
            return Session.get('error');
        }
    }
})