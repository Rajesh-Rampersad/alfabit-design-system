import Button, { ButtonProps }from "./Button";
import { StoryObj, Meta } from "@storybook/react";

const meta: Meta<ButtonProps> ={
    title: "Button",
    tags: ["autodocs"], 
    component: Button,
    argTypes: {}
    
}


export default meta

export const Primary: StoryObj<ButtonProps> = {
    args: {
        children: "Click me",
    }
}