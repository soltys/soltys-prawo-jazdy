import Ember from 'ember';
import GlobalData from 'soltys-prawo-jazdy/mixins/global-data';
export
default Ember.Route.extend(GlobalData, {
    model: function(path) {
        console.log(path);
        var allAttempts = this.getAttempts();
        for (var i =0 ; i < allAttempts.length; i++) {
        	console.log(allAttempts[i]);
            if (allAttempts[i].id === parseInt(path.attempt_id)) {
                return allAttempts[i];
            }
        }
    }
});