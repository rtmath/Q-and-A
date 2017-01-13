import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(answer) {
      if(confirm("Are you sure ou want to delete this answer?")) {
        this.sendAction('destroyAnswer', answer);
      }
    }
  }
});
