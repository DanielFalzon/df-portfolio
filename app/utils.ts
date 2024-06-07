export const formatDate = (dateString: string | undefined): string => {
    if(!dateString){
        return 'Present';
    }

    const date = new Date(dateString);
    const month = Intl.DateTimeFormat('en-US',  {month: 'long'}).format(date);
    const year = date.getFullYear()

    return `${month} ${year}`
}