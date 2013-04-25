Ext.define('AM.view.user.List' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.userlist',

    title : 'All Users',
    store: 'Users',

    columns: [
        {header: 'Name',  dataIndex: 'name',  flex: 1},
        {header: 'Email', dataIndex: 'email', flex: 1}
    ],
    selModel: {
        selectionMode: 'MULTI'
    },
    tbar: {
        items: [
            {
                text: 'Create',
                action: 'create'
            },
            {
                text: 'Remove',
                action: 'remove'
            }
        ]
    }

});
