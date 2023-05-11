import { mount } from "@vue/test-utils";
import ToDoApp from "@/components/ToDoApp.vue"

describe("ToDoApp.vue", () => {
    it("should render", () => {
        const wrapper = mount(ToDoApp);

        expect(wrapper.text()).toContain("My ToDo App")

    })
})
