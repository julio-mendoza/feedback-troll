Ext.define('FBT.view.form.Feedback', {
	extend: 'Ext.window.Window',
	alias: 'widget.feedback-form',
	
	title: 'Feedback Form',
	width: 600,
	height: 350,
	
	config: {
		formInfo: null
	},
	
	initComponent: function() {
		var me = this;
		
		me.callParent();
		me.updateFormInfo(me.getFormInfo());
	},
	
	updateFormInfo: function (formInfo) {
		var me = this;
		me.setTitle(formInfo.get('title'));
		return formInfo;
	}
});