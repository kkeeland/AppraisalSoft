Template.dashboard2.rendered = function(){

    // Set white background color for top navbar
    $('body').addClass('light-navbar');

   

};

Template.dashboard2.destroyed = function(){
    // Remove special class
    $('body').removeClass('light-navbar');
};