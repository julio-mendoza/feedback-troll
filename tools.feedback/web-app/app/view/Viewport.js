Ext.define('FBT.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires:[
        'FBT.view.Main'
    ],

    layout: {
        type: 'fit'
    },

    items: [{
        xtype: 'app-main'
    }]
});
