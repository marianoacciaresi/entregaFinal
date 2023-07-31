const nameRegex = /^[a-zA-ZÀ-ÿ\s]{2,40}$/;
const surnameRegex = /^[a-zA-ZÀ-ÿ\s]{2,40}$/;
const documentRegex = /^[0-9]{8,15}$/;
const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const phoneRegex = /^[0-9]{7,15}$/;
const addressRegex = /^[a-zA-ZÀ-ÿ0-9\s]{8,80}$/;
const postalCodeRegex = /^[0-9]{3,10}$/;

export const validateInput = ({ type, value, mail }) => {
    let hasError = false;
    let error = '';
    const formatValue = value.trim();

    switch (type) {
        case 'name':
            if(formatValue === "") {
                hasError = true;
                error = 'El nombre es requerido';
            } else if(!nameRegex.test(formatValue)) {
                hasError = true;
                error = 'Nombre inválido';
            } else {
                hasError = false;
                error = '';
            }
            break;
        case 'surname':
            if(formatValue === "") {
                hasError = true;
                error = 'El apellido es requerido';
            } else if(!surnameRegex.test(formatValue)) {
                hasError = true;
                error = 'Apellido inválido';
            } else {
                hasError = false;
                error = '';
            }
            break;
        case 'document':
            if(formatValue === "") {
                hasError = true;
                error = 'El Documento es requerido';
            } else if(!documentRegex.test(formatValue)) {
                hasError = true;
                error = 'Documento inválido';
            } else {
                hasError = false;
                error = '';
            }
            break;
        case 'email':
            if(formatValue === "") {
                hasError = true;
                error = 'El eMail es requerido';
            } else if(!emailRegex.test(formatValue)) {
                hasError = true;
                error = 'eMail inválido';
            } else {
                hasError = false;
                error = '';
            }
            break;

        case 'email_repeat':            
            if(formatValue === "") {
                hasError = true;
                error = 'Repetir el eMail es requerido';
            } else if(!emailRegex.test(formatValue)) {
                hasError = true;
                error = 'eMail inválido';
            } else if( value != mail) {
                hasError = true;
                error = 'Los eMails deben ser iguales';
            } else {
                hasError = false;
                error = '';
            }
            break;            

        case 'phone':
            if(formatValue === "") {
                hasError = true;
                error = 'Teléfono requerido';
            } else if(!phoneRegex.test(formatValue)) {
                hasError = true;
                error = 'Teléfono inválido';
            } else {
                hasError = false;
                error = '';
            }
            break;
        case 'address':
            if(formatValue === "") {
                hasError = true;
                error = 'La dirección es requerida';
            } else if(!addressRegex.test(formatValue)) {
                hasError = true;
                error = 'Dirección inválida';
            } else {
                hasError = false;
                error = '';
            }
            break;
        case 'postalCode':
            if(formatValue === "") {
                hasError = true;
                error = 'El código postal es requerido';
            } else if(!postalCodeRegex.test(formatValue)) {
                hasError = true;
                error = 'Código postal inválido';
            } else {
                hasError = false;
                error = '';
            }
            break;
        default: 
            hasError = false;
            error = '';
            break;
    }

    return { hasError, error }
}