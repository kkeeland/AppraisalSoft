Template.tabcontent.helpers({
		claims: function() {
		    return Claims.find();
		}, 
		now: function () {
    	var now = moment().format('L');
      return now;
    },

    then: function () {
    	var then = moment().format('L');
      return then;
     }, 
     appraisers: function(){
      return Appraisers.find();
     }
    // the new index number 
    
});






Template.tabcontent.events({
  //EVENTS WHEN CHANGE INSURANCE COMPANY
  'change #insurancecompany' : function(event){
        
      //GRAB THE INFORMATION FROM THE DROPDOWN ON CHANGE
        var insuranceID = $("#insurancecompany :selected").val();

      //SET THE SESSION VARIABLE FOR INSURANCE SUFFIX E.G, ALO FOR AMICA
        Session.set('index-id', insuranceID);
        console.log(Session.get('index-id'));  
      

      //increase the seq number by one
        increaseIndexOne();

        var indexNumber = IndexID.find().map(function(entity){
            return entity.seq;
        });
        var indexNumber = indexNumber[0];
      
       // SET SESSION VARIABLE FOR SEQUENCE NUMBER

        Session.set('index-number', indexNumber);
  }, 


   
});


    
  //Increase Index Number by One 
  //Add to Counter Database of IndexID 
    increaseIndexOne = function() {
        Meteor.call("updateseq");
    }


