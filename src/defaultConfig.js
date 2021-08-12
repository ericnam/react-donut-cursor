const BaseConfig = {
    center: {
        width: '4px',
        height: '4px',
        transition: '300ms',
        lag: '0ms',
        backgroundColor: 'black',
        jsx: null,
    },
    ring: {
        width: '45px',
        height: '45px',
        transition: '300ms',
        lag: '50ms',
        borderColor: 'gray',
        borderWidth: '2px',
        borderStyle: 'solid',
    },
    click: {
        center: {
            width: '4px',
            height: '4px',
            transition: '300ms',
            lag: '0ms',
            backgroundColor: 'black',
            jsx: null,
        },
        ring: {
            width: '25px',
            height: '25px',
            transition: '50ms',
            display: 'block',
            borderColor: 'gray',
            borderWidth: '2px',
            borderStyle: 'solid',
        },
    },
};
const HoverConfig = {
    center: {
        width: '15px',
        height: '15px',
        transition: '150ms',
        backgroundColor: 'black',
    },
    ring: {
        width: '30px',
        height: '30px',
        transition: '150ms',
        borderColor: 'gray',
        borderWidth: '2px',
        borderStyle: 'dotted',
    },
    click: {
        center: {
            width: '10px',
            height: '10px',
            transition: '150ms',
            backgroundColor: 'black',
        },
        ring: {
            width: '45px',
            height: '45px',
            transition: '150ms',
            borderColor: 'gray',
            borderWidth: '2px',
            borderStyle: 'solid',
        },
    },
};

export const defaultConfig = {
    base: BaseConfig,
    hover: HoverConfig,
};
