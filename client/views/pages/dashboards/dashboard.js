Template.dashboard.rendered = function(){

    // Set white background color for top navbar
    $('body').addClass('light-navbar');

   

};

Template.dashboard.destroyed = function(){
    // Remove special class
    $('body').removeClass('light-navbar');
};

Template.dashboard.helpers({
  now: function () {
    var now = moment().format('MMMM Do, YYYY');
    return now;
    }

});