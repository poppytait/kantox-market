import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    name: DS.attr('string'),
    image: DS.attr('string'),
    price: DS.attr('number'),
});