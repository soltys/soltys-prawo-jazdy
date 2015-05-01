import Ember from 'ember';
import GlobalDataMixin from '../../../mixins/global-data';
import { module, test } from 'qunit';

module('GlobalDataMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var GlobalDataObject = Ember.Object.extend(GlobalDataMixin);
  var subject = GlobalDataObject.create();
  assert.ok(subject);
});
