import DS from 'ember-data';

export default DS.Model.extend({
    quest: DS.attr(),
    author: DS.attr(),
    notes: DS.attr()
});
