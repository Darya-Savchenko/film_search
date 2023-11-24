import React from 'react';
import {ConfirmModal} from '../components'

export default {
    title: 'Forms/ConfirmModal',
    component: ConfirmModal
};

const Template = (args) => <ConfirmModal {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    open: true,
    title: 'Title',
    url: 'http://localhost:3000/recommend?title=Title&ids=232,434',
    onClose: () => {}
};