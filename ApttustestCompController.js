({
    doinit : function(component, event, helper) {
        component.set('v.columns', [
        {label: 'Id', fieldName: 'Id', type: 'text'},
         {label: 'Account Name', fieldName: 'Name', type: 'text'},
            {label: 'Industry', fieldName: 'Industry', type: 'text'},
        ]);
         helper.fetchAccRecord(component, event, helper);
   
}
})