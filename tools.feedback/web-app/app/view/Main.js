Ext.define('FBT.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'FBT.view.source.FeatureTree'
    ],
    
    xtype: 'app-main',

    layout: {
        type: 'border'
    },

    items: [{
    	region: 'west',
    	layout: 'accordion',
    	width: 200,
    	split: true,
    	
    	tbar: [{
    		xtype: 'label',
    		html: '<b>Workgroup: </b>'
    	}, {
    		xtype: 'combo',
    		flex: 1
    	}],
    	
    	items: [{
    		xtype: 'treepanel',
    		title: 'Lists',
    		glyph: GlyphIcons.listIcon,
    		tbar: [{
    			tooltip: 'New',
    			action: 'new',
    			glyph: GlyphIcons.newFile
    		}, {
    			tooltip: 'Edit',
    			action: 'edit',
    			glyph: GlyphIcons.editFile
    		}, {
    			tooltip: 'Delete',
    			action: 'delete',
    			glyph: GlyphIcons.delFile
    		}]
    	}, {
	        xtype: 'source-feature-tree'
    	}, {
    		title: 'Reports'
    	}]
    }, {
        region: 'center',
        xtype: 'tabpanel',
        items:[{
            title: 'Feedback Dashboard',
            layout: {
            	type: 'table',
            	columns: 3,
            	tableAttrs: {
                    style: {
                        width: '100%'
                    },
                    cellspacing: 10
                }
            },
            
            defaults: {
            	flex: 1,
            	minHeight: 200
            },
            
            
            items: [{
            	title: 'Demo 01',
            	frame: true,
            	height: 409,
            	rowspan: 2
            }, {
            	title: 'Demo 02',
            	frame: true,
            	height: 200
            }, {
            	title: 'Demo 03',
            	frame: true,
            	height: 200
            }, {
            	title: 'Demo 04',
            	frame: true
            }, {
            	title: 'Demo 01',
            	frame: true
            }, {
            	title: 'Demo 02',
            	frame: true
            }, {
            	title: 'Demo 03',
            	frame: true
            }, {
            	title: 'Demo 04',
            	frame: true
            }]
        }]
    }]
});