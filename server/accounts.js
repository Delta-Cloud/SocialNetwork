/**
 * Created by User on 7/17/2017.
 */
AccountsTemplates.configure({
    postSignUpHook: (userId, info) => {
        const fullName = `${info.profile.firstName} ${info.profile.lastName}`;
        const dob = new Date(info.profile.yearOfBirth, info.profile.monthOfBirth - 1, info.profile.dayOfBirth);
        const user = Meteor.users.findOne({_id: userId});
        Meteor.users.update({_id: userId}, {
            $set: {
                'profile.birthday': dob,
                'profile.fullName': fullName,
                'profile.meta.primaryEmail': user.emails[0].address
            }
        });
    }
});