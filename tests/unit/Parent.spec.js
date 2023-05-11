import { mount, shallowMount } from "@vue/test-utils";
import Parent from "@/components/Parent.vue"

describe("Parent.vue", () => {
    it("renders", () => {
        const wrapper = shallowMount(Parent);

        expect(wrapper.text()).toContain("parent")
    });
})
