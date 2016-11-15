Meteor.methods({
	'updateseq': function(){
		var ret = IndexID.update({_id: "uAwxBjaee7y3b2yhk"},{$inc: {seq: 1}

		})
		
		return ret.seq;

	}
})
