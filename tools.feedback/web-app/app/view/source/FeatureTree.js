Ext.define('FBT.view.source.FeatureTree', {
	extend: 'Ext.tree.Panel',
	alias: 'widget.source-feature-tree',
	
	title: 'Features',
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
	}],
	
	retrieveSelectedItem: function () {
		return this.getSelectionModel().getSelection();
	}
});