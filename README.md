# React Donut Cursor

[![npm version](https://badge.fury.io/js/react-donut-cursor.svg)](https://badge.fury.io/js/react-donut-cursor) [![npm dependency status](https://david-dm.org/ericnam/react-donut-cursor.svg)](https://david-dm.org/helmetjs/helmet)

React Donut Cursor is a React component that replaces your default cursor with a customizable,
animated cursor that can provide additional feedback to users and add style to your React apps.

# Quick start

To install the package, run `npm install --save react-donut-cursor` for your app.

Below is a basic setup of React Donut Cursor. The three main components of this setup to be aware
of are:

1. `<DonutCursorProvider />`
2. `<DonutConsumer />`
3. "donut-hover" and additional user-defined classes

```js
import { DonutCursorProvider, DonutConsumer } from 'react-donut-cursor';
import { DonutClasses, DonutBase, DonutHover } from '@donut'; // Config settings are defined by the user

const App = () => {
    return (
        // Wrap the entire app with the provider
        // so that the custom cursor can access it
        <DonutCursorProvider
            classArr={DonutClasses}
            base={DonutBase}
            hover={DonutHover}
        >
            <Component />
        </DonutCursorProvider>
    );
};

const Component = () => {
    return (
        // Wrap any components needing custom hover
        // with the consumer

        // If using the default hover, include class "donut-hover"
        // If using class-specific styles, include your custom class name after "donut-hover"
        <DonutConsumer>
            <div id="component">
                <a className="donut-hover">
                    This is a link with hover property
                </a>
                <a className="donut-hover extra-configs">
                    This is a link with hover property, with class-specified
                    configurations
                </a>
            </div>
        </DonutConsumer>
    );
};
```

# How it works

### Setup

First, the `<DonutCursorProvider/>` needs to be wrapped around the entire application. This package
uses React's Context hooks, along with its Providers and Consumers, so in order for the cursor and
its varying states to reach the app, this step is required.

Once this is in place, the cursor will work right out of the box! You'll notice that your old cursor is hidden
and the Donut Cursor has taken its place.

Now in order to create _hover_ events, you'll need to wrap `<DonutConsumer />` around the JSX containing
the element that you'd like the cursor to have hover events on. Once you've done that, add the class
**"donut-hover"** to the elements you desire, and the cursor should now have a special hover animation
when hovering on those elements!

> **_Disclaimer:_** _The consumer will not reach components that have already been rendered, meaning you can't
> slap the Consumer around the entire app as it will not parse down the component's children tree._

### Customization and Cursor-States

The four main states of the cursor are: **_base_**, **_hover_**, **_base when clicked_** and **_hover when clicked_**. As you
can see in the schema below, both the base and hover configurations have settings for the cursor's styling
(center, ring) as well as the cursor's styling when clicked (click.center, click.hover).

```js
const BaseConfiguration: DonutConfig = { center: { ... }, ring: { ... }, click: { center: { ... }, ring: { ... } } };
const HoverConfiguration: DonutConfig = { center: { ... }, ring: { ... }, click: { center: { ... }, ring: { ... } } };

interface DonutConfig {
  center?: Center;
  ring?: Ring;
  click?: {
    center?: Center; ring?: Ring
  }
}
```

Each states of the cursor is customizable and configurable to your own design language. If no configurations
are provided by the user, the cursor will fall back to the default configurations shipped with the package.

### Class-Specific Customizations

But what if you want to have different hover animations for certain elements on the page? This is where
**class-specific hover states** come in to play.

```
interface DonutCustomClass {
  [key: string]: DonutConfig
}[];
```

By defining class names and creating configurations for them as you would for your base and hover states, you are
able to create endless states and styles for your cursor.

In the schema above, the `[key: string]` refers to the class name itself, which you can define. For instance, if I
wanted a special cursor for an object like `<button id="refresh">Refresh Page</button>`, I would give this
a class name of `refresh` and apply it to my element:

```js
// Donut class specific configuration example for class 'refresh'
const ClassConfigurations: DonutCustomClass =
{
    "refresh": { center: { ... }, ring: { ... }, click: { center: { ... }, ring: { ... } } },
    "some-other-class" : { ... },
    ...
}
```

```html
// Implementation of the class configuration
<button id="refresh" class="donut-hover refresh">Refresh Page</button>
```

> **Disclaimer:** The class of **"donut-hover"** will need to be present in order for the custom classes to take effect.

# API

#### DonutCursorProvider

This component sets up the Context Provider, Global Styles and subsequent Cursor components needed for
the cursor to function.

| Property | Type               | Description                                                                                                  |
| -------- | ------------------ | ------------------------------------------------------------------------------------------------------------ |
| base     | `DonutConfig`      | This is the base cursor's styles and configurations. If left null, the cursor will resort to default styles. |
| hover    | `DonutConfig`      | This is configuration for the generic hover styles. If left null, hover will resort to default styles.       |
| classArr | `DonutCustomClass` | Key based object that contains class-specific style configurations.                                          |

_To see the schema of the types provided here, look below in the Types section._

#### DonutConsumer

This component allows the package to parse through any JSX within and identify class names such as
"donut-hover" or any user-defined classes found in the `classArr` prop. No props are needed for this
component.

# Types

#### DonutConfig

This type is the underlying schema for configurations for base, hover and class-specific cursor styles.

```js
interface DonutConfig {
    center?: Center;
    ring?: Ring;
    click?: {
        center?: Center,
        ring?: Ring,
    };
}
```

| Property | Type                                | Description                                     |
| -------- | ----------------------------------- | ----------------------------------------------- |
| center   | `Center`                            | Contains the center's style properties.         |
| ring     | `Ring`                              | Contains the ring's style properties            |
| click    | `{ center?: Center; ring?: Ring; }` | Center and Ring properties for the click state. |

#### Center

This type is the schema for the configurable props of the 'center' div, or the hole of the donut. Border-radius
of the center is by default set as the same value as the width.

```js
interface Center {
    width?: string;
    height?: string;
    transition?: string;
    lag?: string;
    backgroundColor?: string;
    display?: string;
    jsx?: any;
}
```

| Property        | Type          | Base Default | Description                                                                                                                                                     |
| --------------- | ------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| width           | `string`      | `4px`        | Any valid input for the CSS width property.                                                                                                                     |
| height          | `string`      | `4px`        | Any valid input for the CSS height property.                                                                                                                    |
| transition      | `string`      | `300ms`      | Any valid input for the CSS transition property.                                                                                                                |
| lag             | `string`      | `0ms`        | Any valid input for the CSS transition-duration property. This property targets how quickly the Donut Cursor follows the mouse. By default, the center is 0 ms. |
| backgroundColor | `string`      | `black`      | Any valid input for the CSS background-color property.                                                                                                          |
| jsx             | `JSX.Element` | `null`       | Any valid input for the CSS background-color property.                                                                                                          |

#### Ring

This type is the schema for the configurable props of the 'center' div, or the hole of the donut. Border-radius
of the center is by default set as the same value as the width.

```js
interface Ring {
    width?: string;
    height?: string;
    transition?: string;
    lag?: string;
    borderWidth?: string;
    borderColor?: string;
    borderStyle?: string;
    display?: string;
}
```

| Property    | Type     | Base Default | Description                                                                                                                                                     |
| ----------- | -------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| width       | `string` | `45px`       | Any valid input for the CSS width property.                                                                                                                     |
| height      | `string` | `45px`       | Any valid input for the CSS height property.                                                                                                                    |
| transition  | `string` | `300ms`      | Any valid input for the CSS transition property.                                                                                                                |
| lag         | `string` | `50ms`       | Any valid input for the CSS transition-duration property. This property targets how quickly the Donut Cursor follows the mouse. By default, the center is 0 ms. |
| borderColor | `string` | `gray`       | Any valid input for the CSS border-color property.                                                                                                              |
| borderWidth | `string` | `2px`        | Any valid input for the CSS border-width property.                                                                                                              |
| borderStyle | `string` | `solid`      | Any valid input for the CSS border-style property.                                                                                                              |

# Default Configurations

Below are the default configurations that come with Donut Cursor out of the box. Any additional settings
provided by the user will override these values.

```js
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
```
