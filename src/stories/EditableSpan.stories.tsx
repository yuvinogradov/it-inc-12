import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";
import {EditableSpan, EditableSpanPropsType} from "../EditableSpan";

export default {
    title: 'Todolist/EditableSpan',
    component: EditableSpan,
    argTypes: {
        onChange: {
            description: 'change value'
        },
        value: {
            defaultValue: 'assdsd'
        }
    },
} as Meta;

// const removeTaskCallback = action('Title changed inside Task')
// const changeTaskStatusCallback = action('Remove Button inside Task')
// const changeTaskTitleCallback = action('Status changed inside Task')


const Template: Story<EditableSpanPropsType> = (args) => <EditableSpan {...args} />;

// const argsBase = {
//     removeTask: removeTaskCallback,
//     changeTaskStatus: changeTaskStatusCallback,
//     changeTaskTitle: changeTaskTitleCallback
// }


export const EditableSpanExample = Template.bind({});
EditableSpanExample.args = {
    value: 'assdsd',
    onChange: action('value is changed')
};




