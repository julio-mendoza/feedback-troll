Ext.define('FBT.model.form.FormInfo', {
	extend: 'Ext.data.Model',
	
	fields: [{
		name: 'id',
		type: 'auto'
	}, {
		name: 'name',
		type: 'string'
	}, {
		name: 'title',
		type: 'string'
	}, {
		name: 'description',
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