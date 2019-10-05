import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { mount } from '@vue/test-utils'
import Button from '../../src/components/button/button.vue'
chai.use(sinonChai)

describe('Button', () => {
    it('create', () => {
       const wrapper = mount(Button, {
            propsData: {
                type: 'primary'
            }
        });
        let buttonElm = wrapper.vm.$el.querySelector('button')
        expect(buttonElm.classList.contains('primary')).to.be.true;
    })
    it('icon', () => {
        const wrapper = mount(Button, {
            propsData: {
                icon: 'settings'
            }
        })
        const vm = wrapper.vm
        const Element = vm.$el.querySelector('i')
        expect(Element.classList.contains('cl-icon--settings')).to.be.true;
    })
    it('loading', () => {
        const wrapper = mount(Button, {
            propsData: {
                icon: 'loading',
                loading: true
            }
        })
        const vm = wrapper.vm
        const Elements = vm.$el.querySelectorAll('i')
        expect(Elements.length).to.equal(1)
        expect(Elements[0].classList.contains('loading')).to.be.true
    })

    it('iconPosition', () => {
        const wrapper = mount(Button, {
            propsData: {
                icon: 'refresh',
                iconPosition: 'right'
            }
        })
        const Element = wrapper.vm.$el.querySelector('button')
        expect(Element.classList.contains('icon-right')).to.be.true
    })
    it('size',()=>{
        const wrapper = mount(Button,{
            propsData:{
                size: 'large'
            }
        })
        const Element = wrapper.vm.$el.querySelector('button')
        expect(Element.classList.contains('large')).to.be.true
    })
    it('disabled',()=>{
        const wrapper = mount(Button,{
            propsData:{
                disabled: true
            }
        })
        const vm = wrapper.vm
        const Element = vm.$el.querySelector('button')
        const callback = sinon.fake();
        vm.$on('click', callback)
        vm.$el.click()
        expect(Element.classList.contains('disabled')).to.be.true
        expect(callback).to.not.have.been.called
    })
    
    it('click', () => {
        const wrapper = mount(Button, {
        })
        const vm = wrapper.vm
        const callback = sinon.fake();
        vm.$on('click', callback)
        vm.$el.querySelector('button').click()
        expect(callback).to.have.been.called
    })
})
