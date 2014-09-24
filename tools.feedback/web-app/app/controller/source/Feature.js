Ext.define('FBT.controller.source.Feature', {
    extend: 'Ext.app.Controller',
    
    requires: ['FBT.view.source.FeatureMenu'],
    
    refs: [{
    	ref: 'featureTree',
    	selector: 'source-feature-tree'
    }, {
    	ref: 'featureMenu',
    	selector: 'source-feature-menu'
    }],
    
    init: function() {
    	this.control({
    		'source-feature-tree': {
    			containercontextmenu: this.onFeatureTreeContextMenu
    		},
    		'source-feature-tree button[action=new]': {
    			click: this.onNewClick
    		},
    		'source-feature-tree button[action=edit]': {
    			click: this.onEditClick
    		},
    		'source-feature-tree button[action=delete]': {
    			click: this.onDeleteClick
    		}
    	})
    },
    
    onFeatureTreeContextMenu: function (view, ev, eOpts) {
    	ev.stopEvent();
    	var featureMenu = this.getFeatureMenuSafe();
    	featureMenu.showAt(ev.getXY());
    },
    
    onNewClick: function (view, ev, eOpts) {
    	alert('New');
    },
    
    onEditClick: function (view, ev, eOpts) {
    	alert('Edit');
    },
    
    onDeleteClick: function (view, ev, eOpts) {
    	alert('Delete');
    },
    
    getFeatureMenuSafe: function () {
    	var featureMenu = this.getFeatureMenu();
    	if (!featureMenu) {
			featureMenu = Ext.widget('source-feature-menu');
		}
    	return featureMenu;
    }
});
