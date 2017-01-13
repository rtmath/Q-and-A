import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    newQuestion() {
      this.set('addNewQuestion', true);
    },
    hideQForm() {
      this.set('addNewQuestion', false);
    },
    saveQuestion() {
      var params = {
        author: this.get('author') ? this.get('author') : "Error",
        quest: this.get('quest') ? this.get('quest') : "Error",
        notes: this.get('notes') ? this.get('notes') : "Error"
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
