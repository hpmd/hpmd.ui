// eslint-disable-next-line import/no-extraneous-dependencies
import VueRouter from 'vue-router';
import Alert from '../Alert';
import Avatar from '../Avatar';
import Badge from '../Badge';
import Button from '../Button';
import Calendar from '../Calendar';
import Checkbox from '../Checkbox';
import Collapse from '../Collapse';
import Datepicker from '../Datepicker';
import Dropdown from '../Dropdown';
import FileInput from '../FileInput';
import Form from '../Form';
import Icon from '../Icon';
import Input from '../Input';
import Modal from '../Modal';
import SpinButton from '../SpinButton';

import SectionAbout from '../_About';

const routes = [
    {
        path: '/',
        meta: {
            name: 'О библиотеке'
        },
        component: SectionAbout
    },
    {
        path: '/components',
        redirect: '/components/alert',
        meta: {
            name: 'Компоненты',
            text: true
        }
    },
    {
        path: '/components/alert',
        component: Alert,
        meta: {
            name: 'Alert'
        }
    },
    {
        path: '/components/avatar',
        component: Avatar,
        meta: {
            name: 'Avatar'
        }
    },
    {
        path: '/components/badge',
        component: Badge,
        meta: {
            name: 'Badge'
        }
    },
    {
        path: '/components/button',
        component: Button,
        meta: {
            name: 'Button'
        }
    },
    {
        path: '/components/calendar',
        component: Calendar,
        meta: {
            name: 'Calendar'
        }
    },
    {
        path: '/components/checkbox',
        component: Checkbox,
        meta: {
            name: 'Checkbox'
        }
    },
    {
        path: '/components/collapse',
        component: Collapse,
        meta: {
            name: 'Collapse'
        }
    },
    {
        path: '/components/datepicker',
        component: Datepicker,
        meta: {
            name: 'Datepicker'
        }
    },
    {
        path: '/components/dropdown',
        component: Dropdown,
        meta: {
            name: 'Dropdown'
        }
    },
    {
        path: '/components/file-input',
        component: FileInput,
        meta: {
            name: 'FileInput'
        }
    },
    {
        path: '/components/form',
        component: Form,
        meta: {
            name: 'Form'
        }
    },
    {
        path: '/components/icon',
        component: Icon,
        meta: {
            name: 'Icon'
        }
    },
    {
        path: '/components/input',
        component: Input,
        meta: {
            name: 'Input'
        }
    },
    {
        path: '/components/modal',
        component: Modal,
        meta: {
            name: 'Modal'
        }
    },
    {
        path: '/components/spin-button',
        component: SpinButton,
        meta: {
            name: 'Spin Button'
        }
    }
];

export default new VueRouter({
    routes
});
