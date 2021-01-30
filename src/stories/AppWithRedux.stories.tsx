import React from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import AppWithRedux from "../AppWithRedux";
import {ReduxStoreProviderDecorator} from "./ReduxStoreProviderDecorator";

export default {
    title: 'Todolist/AppWithRedux',
    component: AppWithRedux,
    argTypes: {},
    decorators: [ReduxStoreProviderDecorator]
} as Meta;

const Template: Story = (args) => <AppWithRedux {...args} />;

export const AppWithReduxExample = Template.bind({});
AppWithReduxExample.args = {

};




