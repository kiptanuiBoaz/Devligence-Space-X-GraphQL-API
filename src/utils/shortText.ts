//for responsiveness in mobile screeens
export const modifyText = (deviceWidth: number, text: string): string => {
    if (deviceWidth < 720 && text?.length > 5) {
        return text?.slice(0, 5) + '...';
    }
    return text;
}

