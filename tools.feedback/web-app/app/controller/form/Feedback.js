Ext.define('FBT.controller.form.Feedback', {
    extend: 'Ext.app.Controller',
    
    requires: [
        'FBT.model.form.FormInfo',
        'FBT.view.form.Feedback'
    ],
    
    /*refs: [{
    	ref: 'featureTree',
    	selector: 'source-feature-tree'
    }, {
    	ref: 'featureMenu',
    	selector: 'source-feature-menu'
    }],*/
    
    init: function() {
    	var me = this;
    	
    	me.application.on('openfeedback', me.onOpenFeedback);
    },
    
    onOpenFeedback: function (sender) {
    	var me = this,
    		formInfo,
    		feedback;
    	
    	formInfo = Ext.create('FBT.model.form.FormInfo', {
    		title: 'DEmo'
    	});
    	
    	feedback = Ext.widget('feedback-form', {
    		formInfo: formInfo
    	});
    	
    	//feedback.setFormInfo(formInfo);
    	feedback.show();
    }
});