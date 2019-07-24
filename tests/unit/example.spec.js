import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Button from '@/components/button/button.vue'

describe('Button', () => {
  let vm;
  it('create', () => {
    vm = shallowMount(Button, {
      type: 'primary'
    }, true);
    let buttonElm = vm.$el;
    expect(buttonElm.classList.contains('cl-button--primary')).to.be.true;
  });
})

