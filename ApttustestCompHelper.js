({
	fetchAccRecord : function(component, event, helper) {
         var action = component.get("c.getAccount");
        action.setCallback(this, function(response){
            if(response.getState()==="SUCCESS"){
                component.set("v.records",response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
	}
})