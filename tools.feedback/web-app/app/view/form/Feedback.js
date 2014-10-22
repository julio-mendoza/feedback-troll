Ext.define('FBT.view.form.Feedback', {
	extend: 'Ext.window.Window',
	alias: 'widget.feedback-form',
	
	bodyStyle: {
		background: '#fff'
	},
	
	title: 'Feedback',
	
	width: 500,
	height: 350,
	
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	
	glyph: GlyphIcons.feedbackIcon,
	
	items: [{
		xtype: 'container',
		margin: '10 10 5 10',
		html: 'Thank you for taking your time to provide us feedback about your expierence using this app.'
	}, {
		xtype: 'textfield',
		fieldLabel: '<b>Subject</b>',
		labelAlign: 'top',
		margin: '5 10 5 10',
		allowOnlyWhitespace: false
	}, {
		xtype: 'htmleditor',
		fieldLabel: '<b>Description</b>',
		labelAlign: 'top',
		margin: '5 10 10 10',
		allowOnlyWhitespace: false,
		flex: 1
	}],
	
	tbar: [{
		xtype: 'label',
		text: 'I want to:'
	}, {
		xtype: 'button',
		itemId: 'information',
		allowDepress: false,
		pressed: true,
		text: 'Ask for Information',
		toggleGroup: 'fbType',
		glyph: GlyphIcons.infoIcon
	}, {
		xtype: 'button',
		itemId: 'enhancement',
		allowDepress: false,
		text: 'Report an Enhancement',
		toggleGroup: 'fbType',
		glyph: GlyphIcons.lightbulbIcon
	}, {
		xtype: 'button',
		itemId: 'defect',
		allowDepress: false,
		text: ' Report a Defect',
		toggleGroup: 'fbType',
		glyph: GlyphIcons.bugIcon
	}],
	
	buttons: [{
		text: 'Submit',
		glyph: GlyphIcons.submitIcon
	}, {
		text: 'Cancel',
		glyph: GlyphIcons.cancelIcon
	}]
});