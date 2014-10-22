Ext.define('FBT.Application', {
    name: 'FBT',

    extend: 'Ext.app.Application',

    views: [
        // TODO: add views here
    ],

    controllers: [
        'form.Feedback',
        'source.Feature'
    ],

    stores: [
        // TODO: add stores here
    ],
    
    requires: ['FBT.ux.glyph.Icons'],
    
    launch: function (profile) {
    	var me = this;
    	
    	me.fireEvent('openfeedback', me);
    }
});
