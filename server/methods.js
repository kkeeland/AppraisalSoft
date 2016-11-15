Meteor.methods({
	
	// update the INDEX number when ran inside of call 
	// used in tabcontent.js to generate new index number seq in database by one

	'updateseq': function(){
		var ret = IndexID.update({_id: "uAwxBjaee7y3b2yhk"},{$inc: {seq: 1}

		})
		
		return ret.seq;

	}
})
