export const FORMS_CONSTANTS = [
    {
        label: 'Name *',
        type: 'text',
        formControlName: 'name',
        validator: 'Min length 3 characters'
    },
    {
        label: 'Age *',
        type: 'number',
        formControlName: 'age',
        validator: 'Min digit 1'
    },
    {
        label: 'Email *',
        type: 'email',
        formControlName: 'email',
        validator: 'Enter your email'
    },
    {
        label: 'Phone *',
        type: 'number',
        formControlName: 'phone',
        validator: 'Enter your phone'
    }
]