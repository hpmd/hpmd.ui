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
import Input from '../Input';
import InputGroup from '../InputGroup';
import Modal from '../Modal';
import Nav from '../Nav';
import Popover from '../Popover';
import Progress from '../Progress';
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
        path: '/components/input',
        component: Input,
        meta: {
            name: 'Input'
        }
    },
    {
        path: '/components/input-group',
        component: InputGroup,
        meta: {
            name: 'InputGroup'
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
        path: '/components/nav',
        component: Nav,
        meta: {
            name: 'Nav'
        }
    },
    {
        path: '/components/popover',
        component: Popover,
        meta: {
            name: 'Popover'
        }
    },
    {
        path: '/components/progress',
        component: Progress,
        meta: {
            name: 'Progress'
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
