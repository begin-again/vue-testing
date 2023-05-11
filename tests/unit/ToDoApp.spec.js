import { mount } from "@vue/test-utils";
import ToDoApp from "@/components/ToDoApp.vue"

describe("ToDoApp.vue", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(ToDoApp)
    });
    it("should render", () => {
        expect(wrapper.text()).toContain("My ToDo App")
    });
    it("add new todo", async () => {
        expect(wrapper.findAll('[data-test="todo"')).toHaveLength(3);

        await wrapper.get('[data-test="new-todo"]').setValue('New Todo');
        await wrapper.get('[data-test="form"]').trigger('submit');

        expect(wrapper.findAll('[data-test="todo"')).toHaveLength(4);
    })
    it("complete a todo", async () => {

        await wrapper.get('[data-test="todo-checkbox"]').setChecked();

        expect(wrapper.get('[data-test="todo"]').classes()).toContain('completed')
    })
})
