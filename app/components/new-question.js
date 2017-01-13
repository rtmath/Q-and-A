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
        author: this.get('author') ? this.get('author') : "",
        quest: this.get('quest') ? this.get('quest') : "",
        notes: this.get('notes') ? this.get('notes') : ""
      }
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
