/**
 * Validates user's input for base and hover states
 * Depending on whether values are missing, default values take
 * place of missing values
 * @param {*} base
 * @param {*} hover
 * @param {*} defaultBase
 * @param {*} defaultHover
 * @returns
 */
const ValidateUserInput = (base, hover, defaultBase, defaultHover) => {
    base = ValidateDonutConfig(base, defaultBase);
    hover = ValidateDonutConfig(hover, defaultHover);

    return { base, hover };
};

/**
 * This validation takes in user's class array with specified configurations
 * and validates them to make sure there are configs for each state
 * @param {*} classArray
 * @param {*} defaultHover
 * @returns Updated class array with validated values
 */
const ValidateClassArray = (classArray, defaultHover) => {
    if (!!classArray) {
        Object.keys(classArray).map((key) => {
            classArray[key] = ValidateDonutConfig(
                classArray[key],
                defaultHover
            );
        });
    }
    else
    {
        classArray = {};
    }

    return classArray;
};

/**
 * Validate the donut configuration, whether base, hover or class-specific
 * @param {*} donutConfig
 * @param {*} defaultDonutConfig
 * @returns
 */
const ValidateDonutConfig = (donutConfig, defaultDonutConfig) => {
    if (!!donutConfig) {
        if (
            !donutConfig.hasOwnProperty('center') &&
            !donutConfig.hasOwnProperty('ring') &&
            !donutConfig.hasOwnProperty('click')
        ) {
            return defaultDonutConfig;
        }

        if (!donutConfig.hasOwnProperty('center')) {
            donutConfig = { ...donutConfig, center: { display: 'none' } };
        }

        if (!donutConfig.hasOwnProperty('ring')) {
            donutConfig = { ...donutConfig, ring: { display: 'none' } };
        }

        if (!donutConfig.hasOwnProperty('click')) {
            donutConfig = {
                ...donutConfig,
                click: { center: donutConfig.center, ring: donutConfig.ring },
            };
        } else {
            if (!donutConfig.click.hasOwnProperty('center')) {
                donutConfig = {
                    ...donutConfig,
                    click: { ...donutConfig.click, center: donutConfig.center },
                };
            }
            if (!donutConfig.click.hasOwnProperty('ring')) {
                donutConfig = {
                    ...donutConfig,
                    click: { ...donutConfig.click, ring: donutConfig.ring },
                };
            }
        }

        return donutConfig;
    } else {
        return defaultDonutConfig;
    }
};

export { ValidateUserInput, ValidateClassArray };
