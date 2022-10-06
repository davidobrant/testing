import { fireEvent, render } from "@testing-library/react";
import Input from "./Input";

describe(Input, () => {
    it("output displays what is entered in inputfield", () => {
        const { getByTestId } = render(<Input />)
        const input = getByTestId('input')
        fireEvent.change(input, {target: {value: 'david'}})
        const output = getByTestId('output').textContent
        expect(output).toEqual('david')
    })
})