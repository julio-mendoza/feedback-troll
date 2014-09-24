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
    
    launch: function (profile) {
    	var me = this;
    	
    	me.fireEvent('openfeedback', me);
    }
});
