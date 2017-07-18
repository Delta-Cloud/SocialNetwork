/**
 * Created by User on 7/18/2017.
 */
Template.navButtons.events({
    'click a[data-action="logout"]'() {
        AccountsTemplates.logout();
    }
});

