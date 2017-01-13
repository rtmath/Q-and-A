import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    newAnswer() {
      this.set('addNewAnswer', true);
    },
    hideAForm() {
      this.set('addNewAnswer', false);
    },
    saveAnswer() {
      var params = {
        author: this.get('author') ? this.get('author') : "Error",
        answerBody: this.get('answerBody') ? this.get('answerBody') : "Error",
        question: this.get('question')
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
