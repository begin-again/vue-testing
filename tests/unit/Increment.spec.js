import { mount, createLocalVue } from '@vue/test-utils';
import Increment from '@/components/Increment.vue';

describe('Increment.vue', () => {
  let localVue;
  let vuetify;
  let wrapper;
  beforeEach(() => {
    localVue = createLocalVue(); // because of vuetify, we should use a localVue instance
    wrapper = mount(Increment, {
      localVue,
      vuetify,
      attachTo: document.getElementById('#increment'),
    });
  });  it('should render the card and the button', () => {
    // to make sure we are free from vuetify components in our tests, use data-testid attributes to search for elements
    expect(wrapper.find('[data-testid="increment-card"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="increment-button"]').exists()).toBe(true);
  });
});
