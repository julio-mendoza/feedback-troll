Ext.define('FBT.model.form.QuestionOption', {
	extend: 'Ext.data.Model',
	
	fields: [{
		name: 'id',
		type: 'auto'
	}, {
		name: 'optionText',
		type: 'string'
	}, {
		name: 'enabled',
		type: 'boolean'
	}, {
		name: 'createdOn',
		type: 'date'
	}, {
		name: 'createdBy',
		type: 'string'
	}, {
		name: 'modifiedOn',
		type: 'date'
	}, {
		name: 'modifiedBy',
		type: 'string'
	}]
});