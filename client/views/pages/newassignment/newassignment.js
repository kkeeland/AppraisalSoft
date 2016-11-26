//autoform hooks obj for on success function

var hooksObject = {
  onSuccess: function (addClaimdata, doc) {
    var uniqueindexnum = Session.get('uniqueindex');
    swal("Successful Entry!", "Successfully inserted a new index: " + uniqueindexnum, "success")

  }

};


//call autoform on success after insert in Claims db
AutoForm.addHooks('newAssignment', hooksObject);



//new assignment schemas for form input validation

Schemas = {};

Template.registerHelper("Schemas", Schemas);

//autocomplete settings for shop 


Schemas.Claim = new SimpleSchema({
  author: {
    type: String,
    label: "Author",
    autoValue: function () {
      return "21";
    },
    autoform: {

    }
  },
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
  }

});



var Collections = {};

Template.registerHelper("Collections", Collections);

Claims.attachSchema(Schemas.Claim);

Template.NewAssignment.helpers({

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
  // TEMP CONNECTION TO CLAIMS INDEX DB/NEED TO MAKE SHOP DB AND ADD FUNCTION/MODAL
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
  },
  shops: function () {
    return Shops.find();
  }

});


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