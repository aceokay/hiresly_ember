import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('developer-complete-form', 'Integration | Component | developer complete form', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{developer-complete-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#developer-complete-form}}
      template block text
    {{/developer-complete-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
