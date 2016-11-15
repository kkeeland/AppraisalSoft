Meteor.startup(() => {
  if (!IndexID.findOne()) {
  		IndexID.insert({indexidfind: "userid", seq: 1000});
  }

});


