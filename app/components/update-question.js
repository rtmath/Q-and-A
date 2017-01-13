import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(question) {
      var params = {
        notes: this.get('notes'),
        quest: this.get('quest'),
        author: Ember.get(question, 'author')
      };
      this.set('updateQuestion', false);
      this.sendAction('update', question, params);
    }
  }
});
