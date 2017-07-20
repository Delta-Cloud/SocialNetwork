/**
 * Created by User on 7/20/2017.
 */

UsersIndex = new EasySearch.Index({
    collection: Meteor.users,
    fields: ['profile.firstName', 'profile.LastName'],
    engine: new EasySearch.MongoDB({
        selector: function(searchObject, options, aggregation) {
            const selector = this.defaultConfiguration().selector(searchObject, options, aggregation);
            const userFilter = {};

            userFilter.$ne = options.search.userId;
            selector._id = userFilter;
            return selector;
        }
    })
});