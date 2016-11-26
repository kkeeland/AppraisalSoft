Meteor.startup(() => {
  if (!IndexID.findOne()) {
    IndexID.insert({ indexidfind: "userid", seq: 1000 });
  }

});


Meteor.publish('appraisers', function () {
  return Appraisers.find();
});

Meteor.publish('indexid', function () {
  return IndexID.find();
});

Meteor.publish('insuranceprofiles', function () {
  return InsuranceCompanies.find();
});

Meteor.publish('claims', function () {
  return Claims.find();
});

Meteor.publish('shops', function () {
  return Shops.find();
});