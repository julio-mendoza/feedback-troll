Ext.define('FBT.view.source.FeatureTree', {
	extend: 'Ext.tree.Panel',
	alias: 'widget.source-feature-tree',
	
	title: 'Features',
	tbar: [{
		text: 'New',
		action: 'new'
	}, {
		text: 'Edit',
		action: 'edit'
	}, {
		text: 'Delete',
		action: 'delete'
	}],
	
	retrieveSelectedItem: function () {
		return this.getSelectionModel().getSelection();
	}
});