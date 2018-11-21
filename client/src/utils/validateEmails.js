export default emails => {
    const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const emailsArray = emails.split(',')
        .map(email => email.trim())
        .filter(email => !re.test(email))
    ;

    if(emailsArray.length) {
        return `These emails are invalid ${emailsArray}`;
    }

    return null;
}