import Button, { ButtonProps }from "./Button";
import { StoryObj, Meta } from "@storybook/react";

const meta: Meta<ButtonProps> ={
    title: "Molecules/Button",
    component: Button,
    argTypes: {}
    
}


export default meta

export const Primary: StoryObj<ButtonProps> = {
    args: {
        children: "Click me",
    }
}

export const Violet: StoryObj<ButtonProps> = {
    args: {
        children: "Click me",
        className: "theme-violet",
    }
}