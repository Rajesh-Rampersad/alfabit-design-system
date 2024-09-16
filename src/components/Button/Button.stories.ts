import Button, { ButtonProps }from "./Button";
import { StoryObj, Meta } from "@storybook/react";

const meta: Meta<ButtonProps> = {
    title: "Molecules/Button",
    component: Button,
    argTypes: {
      children: { type: "string" },
      className: { type: "string" },
      disabled: { type: "boolean" },
      variant: { control: { type: 'select', options: ['primary', 'secondary'] } },
    },
  };
  


export default meta

export const Primary: StoryObj<ButtonProps> = {
    args: {
        children: "Click me",
    }
}
export const Disabled: StoryObj<ButtonProps> = {
    args: {
        children: "Click me",
        disabled: true,
    }
}
export const Secondary: StoryObj<ButtonProps> = {
    args: {
        children: "Click me, Secondary",
        variant: "secondary",
    }
}
export const SecondaryDisabled: StoryObj<ButtonProps> = {
    args: {
        children: "Click me",
        disabled: true,
        variant: "secondary",
    }
}

export const Violet: StoryObj<ButtonProps> = {
    args: {
        children: "Click me",
        className: "theme-violet",
    }
}
export const VioletSecondary: StoryObj<ButtonProps> = {
    args: {
        children: "Click me",
        className: "theme-violet",
        variant: "secondary",
    }
}
export const Tertiary: StoryObj<ButtonProps> = {
    args: {
      children: 'Botão',
      variant: 'tertiary'
    }
  }
  export const TertiaryDisabled: StoryObj<ButtonProps> = {
    args: {
      children: 'Botão',
      variant: 'tertiary',
      disabled: true
    }
  }
  export const VioletTertiary: StoryObj<ButtonProps> = {
    args: {
      children: 'Botão',
      className: 'theme-violet',
      variant: 'tertiary'
    }
  }