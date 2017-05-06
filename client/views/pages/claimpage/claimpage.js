// states array

var states = [
  { "LABEL": "Alabama", "VALUE": "AL" },
  { "LABEL": "Alaska", "VALUE": "AK" },
  { "LABEL": "Alberta", "VALUE": "AB" },
  { "LABEL": "American Samoa", "VALUE": "AS" },
  { "LABEL": "Arizona", "VALUE": "AZ" },
  { "LABEL": "Arkansas", "VALUE": "AR" },
  { "LABEL": "Armed Forces (AE)", "VALUE": "AE" },
  { "LABEL": "Armed Forces Americas", "VALUE": "AA" },
  { "LABEL": "Armed Forces Pacific", "VALUE": "AP" },
  { "LABEL": "British Columbia", "VALUE": "BC" },
  { "LABEL": "California", "VALUE": "CA" },
  { "LABEL": "Colorado", "VALUE": "CO" },
  { "LABEL": "Connecticut", "VALUE": "CT" },
  { "LABEL": "Delaware", "VALUE": "DE" },
  { "LABEL": "District Of Columbia", "VALUE": "DC" },
  { "LABEL": "Florida", "VALUE": "FL" },
  { "LABEL": "Georgia", "VALUE": "GA" },
  { "LABEL": "Guam", "VALUE": "GU" },
  { "LABEL": "Hawaii", "VALUE": "HI" },
  { "LABEL": "Idaho", "VALUE": "ID" },
  { "LABEL": "Illinois", "VALUE": "IL" },
  { "LABEL": "Indiana", "VALUE": "IN" },
  { "LABEL": "Iowa", "VALUE": "IA" },
  { "LABEL": "Kansas", "VALUE": "KS" },
  { "LABEL": "Kentucky", "VALUE": "KY" },
  { "LABEL": "Louisiana", "VALUE": "LA" },
  { "LABEL": "Maine", "VALUE": "ME" },
  { "LABEL": "Manitoba", "VALUE": "MB" },
  { "LABEL": "Maryland", "VALUE": "MD" },
  { "LABEL": "Massachusetts", "VALUE": "MA" },
  { "LABEL": "Michigan", "VALUE": "MI" },
  { "LABEL": "Minnesota", "VALUE": "MN" },
  { "LABEL": "Mississippi", "VALUE": "MS" },
  { "LABEL": "Missouri", "VALUE": "MO" },
  { "LABEL": "Montana", "VALUE": "MT" },
  { "LABEL": "Nebraska", "VALUE": "NE" },
  { "LABEL": "Nevada", "VALUE": "NV" },
  { "LABEL": "New Brunswick", "VALUE": "NB" },
  { "LABEL": "New Hampshire", "VALUE": "NH" },
  { "LABEL": "New Jersey", "VALUE": "NJ" },
  { "LABEL": "New Mexico", "VALUE": "NM" },
  { "LABEL": "New York", "VALUE": "NY" },
  { "LABEL": "Newfoundland", "VALUE": "NF" },
  { "LABEL": "North Carolina", "VALUE": "NC" },
  { "LABEL": "North Dakota", "VALUE": "ND" },
  { "LABEL": "Northwest Territories", "VALUE": "NT" },
  { "LABEL": "Nova Scotia", "VALUE": "NS" },
  { "LABEL": "Nunavut", "VALUE": "NU" },
  { "LABEL": "Ohio", "VALUE": "OH" },
  { "LABEL": "Oklahoma", "VALUE": "OK" },
  { "LABEL": "Ontario", "VALUE": "ON" },
  { "LABEL": "Oregon", "VALUE": "OR" },
  { "LABEL": "Pennsylvania", "VALUE": "PA" },
  { "LABEL": "Prince Edward Island", "VALUE": "PE" },
  { "LABEL": "Puerto Rico", "VALUE": "PR" },
  { "LABEL": "Quebec", "VALUE": "PQ" },
  { "LABEL": "Rhode Island", "VALUE": "RI" },
  { "LABEL": "Saskatchewan", "VALUE": "SK" },
  { "LABEL": "South Carolina", "VALUE": "SC" },
  { "LABEL": "South Dakota", "VALUE": "SD" },
  { "LABEL": "Tennessee", "VALUE": "TN" },
  { "LABEL": "Texas", "VALUE": "TX" },
  { "LABEL": "Utah", "VALUE": "UT" },
  { "LABEL": "Vermont", "VALUE": "VT" },
  { "LABEL": "Virgin Islands", "VALUE": "VI" },
  { "LABEL": "Virginia", "VALUE": "VA" },
  { "LABEL": "Washington", "VALUE": "WA" },
  { "LABEL": "West Virginia", "VALUE": "WV" },
  { "LABEL": "Wisconsin", "VALUE": "WI" },
  { "LABEL": "Wyoming", "VALUE": "WY" },
  { "LABEL": "Yukon Territory", "VALUE": "YT" }
]

// end states [object]


//autoform hooks obj for on success function

var hooksObject = {
  onSuccess: function (addClaimdata, doc) {

    var uniqueindexnum = Session.get('uniqueindex');
    swal({ title: "Great! Vehicle Data Next...", text: "Successfully inserted a new index: " + uniqueindexnum, type: "success" }, function () {
      //return the last claim of the current user id instead of all claims. 
      var claim = Claims.findOne({user: this.userId});
      //Open up the vehicle tab to blank information 
      var ClaimURL = claim._id
      ClaimURL = "/claim/" + ClaimURL
      console.log(ClaimURL);
      //Go to the route of the newly created index where you can edit 
      FlowRouter.go(ClaimURL);

    });

  }
};




//call autoform on success after insert in Claims db
AutoForm.addHooks('newAssignment', hooksObject);



//new assignment schemas for form input validation

Schemas = {};

Template.registerHelper("Schemas", Schemas);

//autocomplete settings for shop 


Schemas.Claim = new SimpleSchema({
  shopname: {
    type: String,
    optional: true,
    label: "Shop Name",
    autoform: {
      afFieldInput: {
        type: 'autocomplete-input'
      }
    }

  },
  insuredState: {
    type: String,
    autoform: {
      type: "selectize",
      afFieldInput: {
        firstOption: "Oregon"
      },
      options: function () {
        var opts = states.map(function (entity) {
          return {
            label: entity.LABEL,
            value: entity.VALUE
          };
        });

        return opts;
      },
      selectizeOptions: {

      }
    }

  },
  insuredCity: {
    type: String,
    label: "Insured City",
    optional: true,
    autoform: {

    }
  },
  insuredZip: {
    type: String,
    label: "Insured Zip",
    optional: true,
    autoform: {

    }
  },
  insuredAddress1: {
    type: String,
    label: "Insured Address",
    optional: true,
    autoform: {

    }
  },
  insuredAddress2: {
    type: String,
    label: "Insured Address 2",
    optional: true,
    autoform: {

    }
  },
  insuredEmail: {
    type: String,
    label: "Insured Email",
    regEx: SimpleSchema.RegEx.Email,
    optional: true,
    autoform: {

    }
  },
  insuredName: {
    type: String,
    label: "Insured Name",
    optional: true,
    autoform: {

    }
  },
  insuredWorkphone: {
    type: String,
    label: "Insured Work Phone",
    optional: true,
    autoform: {
      type: 'masked-input',
      mask: '000-000-0000',
      maskOptions: {
        placeholder: '___-___-____'
      }
    }
  },
  insuredHomephone: {
    type: String,
    label: "Insured Home Phone",
    optional: true,
    autoform: {
      type: 'masked-input',
      mask: '000-000-0000',
      maskOptions: {
        placeholder: '___-___-____'
      }
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
    optional: false,
    autoform: {

    }
  },
  appraisersOption: {
    type: String,
    autoform: {
      type: "select",
      afFieldInput: {
        firstOption: "(Select an Appraiser)"
      },
      options: function () {
        var opts = Appraisers.find().map(function (entity) {
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
    type: String,
    optional: false,
    autoform: {
      type: "select",
      afFieldInput: {
        firstOption: "(Select a Loss Type)"
      },
      options: function () {
        return [
          { label: "Collision", value: "collision" },
          { label: "Liability", value: "liability" },
          { label: "Comprehensive", value: "comprehensive" }
        ];
      }
    }
  },
  claimantState: {
    type: String,
    autoform: {
      type: "selectize",
      afFieldInput: {
        firstOption: "Oregon"
      },
      options: function () {
        var opts = states.map(function (entity) {
          return {
            label: entity.LABEL,
            value: entity.VALUE
          };
        });

        return opts;
      },
      selectizeOptions: {

      }
    }

  },
  claimantCity: {
    type: String,
    label: "Insured City",
    optional: true,
    autoform: {

    }
  },
  claimantZip: {
    type: String,
    label: "Insured Zip",
    optional: true,
    autoform: {

    }
  },
  claimantAddress1: {
    type: String,
    label: "Insured Address",
    optional: true,
    autoform: {

    }
  },
  claimantdAddress2: {
    type: String,
    label: "Claimant Address 2",
    optional: true,
    autoform: {

    }
  },
  claimantEmail: {
    type: String,
    label: "Insured Email",
    regEx: SimpleSchema.RegEx.Email,
    optional: true,
    autoform: {

    }
  },
  claimantName: {
    type: String,
    label: "Claimant Name",
    optional: true,
    autoform: {

    }
  },
  claimantWorkphone: {
    type: String,
    label: "Claimant Work Phone",
    optional: true,
    autoform: {
      type: 'masked-input',
      mask: '000-000-0000',
      maskOptions: {
        placeholder: '___-___-____'
      }
    }
  },
  claimantHomephone: {
    type: String,
    label: "Claimant Home Phone",
    optional: true,
    autoform: {
      type: 'masked-input',
      mask: '000-000-0000',
      maskOptions: {
        placeholder: '___-___-____'
      }
    }
  },
  insuranceCompanies: {
    type: String,
    autoform: {
      type: "select",
      afFieldInput: {
        firstOption: "(Select an Insurance Company)"
      },
      options: function () {
        var opts = InsuranceCompanies.find().map(function (entity) {
          return {
            label: entity.name,
            value: entity.value
          };
        });

        return opts;
      }
    }
  }, 
  vehicleLocation: {
    type: String,
    optional: false,
    autoform: {
      type: "select",
      afFieldInput: {
        firstOption: "(Select Vehicle Location)"
      },
      options: function () {
        return [
          { label: "Insureds", value: "insureds" },
          { label: "Claimants", value: "claimants" },
          { label: "Shop", value: "shop" }, 
          { label: "Other", value: "other" }
        ];
      }
    }
  },
  noteType: {
    type: String,
    optional: false,
    autoform: {
      type: "select",
      afFieldInput: {
        firstOption: "(Select Note Type)"
      },
      options: function () {
        return [
          { label: "Comment", value: "insureds" },
          { label: "Appointment Set", value: "claimants" },
          { label: "Delay Reason", value: "shop" }, 
          { label: "Other", value: "other" }
        ];
      }
    }
  },
  locationType: {
    type: String,
    optional: false,
    autoform: {
      type: "select",
      afFieldInput: {
        firstOption: "(Select Location Type)"
      },
      options: function () {
        return [
          { label: "Business", value: "business" },
          { label: "Residence", value: "residence" },
          { label: "Shop", value: "shop" }, 
          { label: "Other", value: "other" }
        ];
      }
    }
  },
  officalguide: {
    type: String,
    optional: false,
    autoform: {
      type: "select",
      afFieldInput: {
        firstOption: "(Select Guide Used)"
      },
      options: function () {
        return [
          { label: "NADA", value: "business" },
          { label: "Kelly Blue Book", value: "residence" },
          { label: "Other", value: "other" }
        ];
      }
    }
  },
  predefinedappraisercomments: {
    type: String,
    optional: false,
    autoform: {
      type: "select",
      afFieldInput: {
        firstOption: "Select Pre-defined Comment"
      },
      options: function () {
        return [
          { label: "The vehicles keys were not available during my inspection.", value: "nokeys" },
          { label: "The car was blue.", value: "residence" }
        ];
      }
    }
  },
  predefinedServices: {
    type: String,
    optional: false,
    autoform: {
      type: "select",
      afFieldInput: {
        firstOption: "Select Service"
      },
      options: function () {
        return [
          { label: "Business", value: "business" },
          { label: "Residence", value: "residence" },
          { label: "Shop", value: "shop" }, 
          { label: "Other", value: "other" }
        ];
      }
    }
  }, 
   lkqparts: {
    type: String,
    optional: false,
    autoform: {
      type: "select",
      afFieldInput: {
        firstOption: "Select One"
      },
      options: function () {
        return [
          { label: "Keystone 1-800-123-1232", value: "business" }
        ];
      }
    }
  }

});



var Collections = {};

Template.registerHelper("Collections", Collections);

Claims.attachSchema(Schemas.Claim);

Schemas.Vehicle = new SimpleSchema({
  shopname: {
    type: String,
    optional: true,
    label: "Shop Name",
    autoform: {
      afFieldInput: {
        type: 'autocomplete-input'
      }
    }

  }
});









Template.Claimpage.helpers({
  uniqueindex: function () {
    var insurancesuffix = Session.get('index-id');
    var uniqueindexnum = Session.get('index-number');
    var uniqueindex = uniqueindexnum + insurancesuffix;
    Session.set('uniqueindex', uniqueindex);
    return uniqueindex;
  },
  claims: function () {
    return Claims.find();
  },
  now: function () {
    var now = moment().format('MM-DD-YY');
    return now;
  },
  then: function () {
    var then = moment().format('L');
    return then;
  },
  appraisers: function () {
    return Appraisers.find();
  },
  uniqueindexnum: function () {
    var uniqueindexnum = Session.get('uniqueindex');
    return uniqueindexnum;
  },
  //  SHOP DB FOR AUTOCOMPLETE. NEED TO ADD FUNCTION/MODAL
  settings: function () {
    return {
      position: "bottom",
      limit: 3,
      rules: [
        {
          // token: '',
          collection: Shops,
          field: 'name',
          matchAll: true,
          template: Template.shopnamePill
        }
      ]
    };
  },
  today: function () {
    var today = new Date();
    console.log(today);
    return today;
  }

});

Template.Claimpage.onRendered = function() {
   $('#content').ckeditor();
 };



Template.NewAssignment.events({
  //EVENTS WHEN CHANGE INSURANCE COMPANY
  'change #insurancecompany': function (event) {
    
    //GRAB THE INFORMATION FROM THE DROPDOWN ON CHANGE
    var insuranceID = $("#insurancecompany :selected").val();
    
    //SET THE SESSION VARIABLE FOR INSURANCE SUFFIX E.G, ALO FOR AMICA
    Session.set('index-id', insuranceID);
    console.log(Session.get('index-id'));
   
    //increase the seq number by one
    increaseIndexOne();
    var indexNumber = IndexID.find().map(function (entity) {
      return entity.seq;
    });
    var indexNumber = indexNumber[0];
   
    // SET SESSION VARIABLE FOR SEQUENCE NUMBER
    Session.set('index-number', indexNumber);
  },



});




//Increase Index Number by One 
//Add to Counter Database of IndexID 

increaseIndexOne = function () {
  Meteor.call("updateseq");
}