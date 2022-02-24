import LoginForm from "@/components/LoginForm.vue";
import { mount } from "@vue/test-utils";

describe("LoginForm", () => {
  it("emits an event with a user data payload", () => {
    const wrapper = mount(LoginForm);
    const input = wrapper.find("[data-testid=\"name-input\"]");

    input.setValue("Patryk Smakosz");
    wrapper.trigger("submit");

    const formSubmittedCalls = wrapper.emitted("formSubmitted");
    expect(formSubmittedCalls).toHaveLength(1);

    const expectedPayload = { name: "Patryk Smakosz" };
    expect(wrapper.emitted("formSubmitted")[0][0]).toMatchObject(expectedPayload);
    // 1. Find text input
    // 2. Set value for text input
    // 3. Simulate form submission
    // 4. Assert event has been emitted
    // 5. Assert payload is correct
  });
});