export const resolveColor = (launch_success?: boolean) => {
    let resolvedColor: string;

    switch (true) {
        case launch_success === false:
            resolvedColor = 'tomato';
            break;
        case launch_success === null:
            resolvedColor = 'orange';
            break;
        case launch_success === true:
            resolvedColor = 'green';
            break;
        default:
            resolvedColor = 'black';
    }

    return resolvedColor;
}
