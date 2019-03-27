import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';
import Home from '@/views/Home.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });

  it('renders the correct markup', () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.html()).toContain('<a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a>');
  });

  it('renders the correct markup', () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.html()).toContain('<a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa" target="_blank" rel="noopener">pwa</a>');
  });

  it('renders the correct markup', () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.html()).toContain('<a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a>');
  });

  it('renders the correct markup', () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.html()).toContain('<a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest" target="_blank" rel="noopener">unit-jest</a>');
  });

  it('renders the correct markup', () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.html()).toContain('<a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-nightwatch" target="_blank" rel="noopener">e2e-nightwatch</a>');
  });
});

describe('Home.vue', () => {
  it('renders the correct markup', () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('no-image').exists()).toBe(false);
    expect(wrapper.findAll('div').exists()).toBe(true);
  });
});
