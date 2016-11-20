//new assignment schemas for form input validation

Schemas = {};

Template.registerHelper("Schemas", Schemas);

//autocomplete settings for shop 


Schemas.Claim = new SimpleSchema({
  shopname: {
    type: String, 
    label: "Shop Name", 
    autoform:{
      afFieldInput: {
        type: 'autocomplete-input'
      }
    }

  }, 
  insuredName: {
    type: String, 
    label: "Insured Name", 
    autoform: {
            
        }
  },
  dateofinspection: {
    type: Date,
    label: "Date Inspected", 
    autoform: {
            type: 'bootstrap-datepicker'
          }
  },
  dateofloss: {
    type: Date,
    label: "Date Recieved", 
    autoform: {
            type: 'bootstrap-datepicker'
        }
  },
  policyNumber: {
    type: String, 
    label: "Policy Number", 
    autoform: {
            
        }
  },
  
  date_recieved: {
    type: Date,
    label: "Date Recieved", 
    autoform: {
            type: 'bootstrap-datepicker'
        }
  },
  index: {
    type: String,
    unique: true,
    index: 1,   
    optional:false,
    autoform: {
            
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
    optional:false,
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
  }

});



var Collections = {};

Template.registerHelper("Collections", Collections);

Claims.attachSchema(Schemas.Claim);

Template.NewAssignment.helpers({
      
      uniqueindex: function() {
        var insurancesuffix = Session.get('index-id');
        var uniqueindexnum = Session.get('index-number');
        var uniqueindex = uniqueindexnum + insurancesuffix;
        Session.set('uniqueindex', uniqueindex);
        return uniqueindex; 
      }

});


