const ValidateUserInput = (base, hover, defaultBase, defaultHover) => {
    base = ValidateDonutConfig(base, defaultBase);
    hover = ValidateDonutConfig(hover, defaultHover);

    return { base, hover };
};

const ValidateClassArray = (classArray, defaultHover) => {
    Object.keys(classArray).map((key) => {
        classArray[key] = ValidateDonutConfig(classArray[key], defaultHover);
    });

    return classArray;
};

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
