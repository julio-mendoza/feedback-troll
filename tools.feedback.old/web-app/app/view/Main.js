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
        xtype: 'source-feature-tree',
        width: 200,
        split: true
    },{
        region: 'center',
        xtype: 'tabpanel',
        items:[{
            title: 'Center Tab 1'
        }]
    }]
});