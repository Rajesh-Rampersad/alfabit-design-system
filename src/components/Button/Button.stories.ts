import { ButtonProps } from "@/stories/Button";
import Button from "./Button";
import { StoryObj, Meta } from "@storybook/react";

const meta: Meta<ButtonProps> ={
    title: "Button",
    tags: ["autodocs"]
    
}


export default meta

export const Primary: StoryObj<ButtonProps> = {
    args: {
        children: "Click me",
    }
}