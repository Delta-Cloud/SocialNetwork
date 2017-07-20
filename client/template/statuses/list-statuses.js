/**
 * Created by User on 7/19/2017.
 */
Template.listStatuses.onCreated(function () {
    this.autorun(()=> {
        this.subscribe('userStatuses');
    });
});

Template.listStatuses.helpers({
    //returns sorted Statuses in descending order
    'statuses' () { return Statuses.find({}, {sort: {createdAt: -1}});}
});