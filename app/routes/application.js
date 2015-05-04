import Ember from 'ember';
import $ from 'jquery';
export
default Ember.Route.extend({
    renderTemplate: function() {
        this._super();
        $(function() {
            $('text').animate({
                'stroke-dashoffset': '0'
            }, 8000);
        })
    }
});
