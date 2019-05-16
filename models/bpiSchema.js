const mongoose =  require('mongoose');

const bpiSchema = new mongoose.Schema({


	time: {
			updated: Date
		},
	bpi: {
		USD: {
			code: String,
			symbol: String,
			rate: Number,
			description: String,
			rate_float: Number
		},
		GBP: {
			code: String,
			symbol: String,
			rate: Number,
			description: String,
			rate_float: Number
		},
		EUR: {
			code: String,
			symbol: String,
			rate: Number,
			description: String,
			rate_float: Number
		}
	}
});

const EUR = mongoose.model('BPI', bpiSchema);

module.exports = BPI;


