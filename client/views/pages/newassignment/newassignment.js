//new assignment schemas for form input validation

Schemas = {};

Template.registerHelper("Schemas", Schemas);


Schemas.Claim = new SimpleSchema({
  
  date_recieved: {
    type: String,
    unique: true, 
    label: "Date Recieved", 
    autoform: {
            type: 'masked-input',
            mask: '00/00/0000'
        }
  },
  dateLoss: {
    type: String,
    unique: true,
    label: "Date of Loss", 
    autoform: {
            type: 'masked-input',
            mask: '00/00/0000'
        }
  },
  dateInspection: {
    type: String,
    label: "Date of Inspection", 
    autoform: {
            type: 'masked-input',
            mask: '00/00/0000'
        }
  },
  appraisersOption: {
    type: String,
    autoform: {
      type:"select",
      afFieldInput: {
        firstOption: "(Select an Appraiser)"
      }, 
      options: function() {
            var opts = Appraisers.find().map(function(entity) {
                return {
                    label: entity.appraisername,
                    value: entity.appraisername
                };
            });

            return opts;
      }
    }
  }, 
  typeLoss: {
    type:String, 
    optional:true,
    autoform: {
      type:"select",
      afFieldInput: {
      firstOption: "(Select a Loss Type)"
      }, 
      options: function() {
        return [
          {label: "Collision", value: "collision"},
          {label: "Liability", value: "liability"},
          {label: "Comprehensive", value: "comprehensive"}
        ];
      }
    }
  }, 
  insuranceCompanies: {
    type: String,
    autoform: {
      type:"select",
      afFieldInput: {
        firstOption: "(Select an Insurance Company)"
      }, 
      options: function() {
            var opts = InsuranceCompanies.find().map(function(entity) {
                return {
                    label: entity.name,
                    value: entity.value
                };
            });

            return opts;
      }
    }
  }, 
  claimNumber: {
    type: String,
    label: "Claim Number", 
  }, 
  policyNumber: {
    type: String,
    label: "Policy Number", 
    optional:true
  }, 
  deductible: {
    type: Number,
    label: "Deductible", 
  }

});



var Collections = {};

Template.registerHelper("Collections", Collections);

Claims.attachSchema(Schemas.Claim);

Template.NewAssignment2.helpers({
      
      uniqueindex: function() {
        var insurancesuffix = Session.get('index-id');
        var uniqueindexnum = Session.get('index-number');
        var uniqueindex = uniqueindexnum + insurancesuffix;
        Session.set('uniqueindex', uniqueindex);
        return uniqueindex; 
      }

});

IndexID.allow({
  insert: function () {
    return true;
  },
  remove: function () {
    return true;
  }
});

