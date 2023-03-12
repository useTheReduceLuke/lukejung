


export const getAllFunctionStrings = (component: any) => {
    const functionNames = Object.getOwnPropertyNames(component.prototype)
        .filter(name => typeof (component.prototype as any)[ name ] === 'function');

    return functionNames.map(name => (component.prototype as any)[ name ].toString());
};
