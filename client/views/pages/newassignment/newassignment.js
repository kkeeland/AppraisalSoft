//new assignment schemas for form input validation

Schemas = {};

Template.registerHelper("Schemas", Schemas);


Schemas.Claim = new SimpleSchema({
  
  date_recieved: {
    type: String,
    unique: true, 
    label: "Date Recieved", 
    autoform: {
            
        }
  },
  index: {
    type: String,
    unique: true,  
    optional:true,
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

