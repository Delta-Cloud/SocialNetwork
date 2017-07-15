/**
 * Created by User on 7/15/2017.
 */
FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('fullLayout', {main: 'heroUnit'});
    }
});
