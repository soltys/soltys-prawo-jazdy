import Ember from 'ember';
import GlobalData from 'soltys-prawo-jazdy/mixins/global-data';
export default Ember.Route.extend(GlobalData,{
    model: function() {
        var attempts = this.getAttempts();
        return {
            attempts: attempts
        };
    }
});