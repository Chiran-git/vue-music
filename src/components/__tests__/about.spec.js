import About from "@/views/About.vue";
import { shallowMount } from "@vue/test-utils";

describe('About.vue', () => {
    test('renders_inner_text', () => {
        const wrapper = shallowMount(About);
        expect(wrapper.text()).toContain('about');
    });
})