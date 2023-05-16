import { mount } from "@vue/test-utils";
import Message from "@/components/Message.vue"

describe("Message.vue", () => {
    it("renders the prop.msg", () => {
        const expected = "Hello, friends"
        const wrapper = mount(Message, {
            propsData: {
                msg: expected
            }
        });
        expect(wrapper.text()).toContain(expected)
    });
})
