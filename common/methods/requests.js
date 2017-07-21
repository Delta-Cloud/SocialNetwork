/**
 * Created by User on 7/20/2017.
 */
Meteor.methods({
    'requests.add' (targetId, targetName) {
        if(!this.userId) {
            throw new Meteor.Error(401, 'You must be logged in');
        }
        check(targetId, String);
        check(targetName, String);
        Requests.insert({targetId, targetName});
    },
    'requests.cancel' (type, id) {
        if(!this.userId) {
            throw new Meteor.Error(401, 'You must be logged in');
        }
        check(type, String);
        check(id, String);
        switch(type) {
            case 'userHasSent':
                Requests.remove({requesterId: this.userId, targetId: id});
                break;
            case 'userHasReceived':
                Requests.remove({requesterId: id, targetId: this.userId});
                break;
            default:
                console.log('Something went wrong');
                break;
        }
    },
    'requests.confirm' (id, fullName) {
        if(!this.userId) {
            throw new Meteor.Error(401, 'You must be logged in');
        }
        check(id, String);
        check(fullName, String);
        Requests.remove({requesterId: id, targetId: this.userId});
        Friendships.insert({
            friendName1: Meteor.user().fullName,
            friendName2: fullName,
            friendship: [this.userId, id]
        });

    }
})