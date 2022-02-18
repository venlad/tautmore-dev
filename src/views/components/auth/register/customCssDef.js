export const  dropdownSingleValueStyles =  {

    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? '#43AA8B' : '#20282A',
        backgroundColor: state.isSelected ? '#E3FFF6' : 'white',
        padding: '25px 15px',
        fontSize: 20,
        marginTop: -5,
        ':hover': {
            backgroundColor: '#E0E0E0',
        },

    }),

    input: (provided) => ({
        ...provided,
        fontSize: 20,

    }),

    menu: (provided) => ({
        ...provided,
        borderRadius: 10,
        width: 490,

    }),

    indicatorSeparator: (provided) => ({
        ...provided,

    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        color: '#7D8283',

    }),

};

export const  dropdownMultiValueStyles =  {
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? '#43AA8B' : '#20282A',
        backgroundColor: state.isSelected ? '#E3FFF6' : 'white',
        padding: '25px 25px',
        fontSize: 19,
        borderRadius: 10,
        marginTop: -5,
        ':hover': {
            backgroundColor: '#E0E0E0',
        },

    }),

    menu: (provided) => ({
        ...provided,
        borderRadius: 10,
        width: 490,

    }),
    indicatorSeparator: (provided) => ({
        ...provided,

    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        color: '#7D8283',

    }),
    multiValueRemove: (provided) => ({
        ...provided,
        color: '#7D8211',
        ':hover': {
            backgroundColor: '#E0E0E0',
        },
        height: 20,
        margin: 'auto 0px',
        borderRadius: 10,
        padding: 5,

    }),
    multiValue: (provided) => ({
        ...provided,

    }),

};

export const  dropdownMultiValueTimeSlotStyles =  {
    option: (provided, state) => ({
        ...provided,
        display: 'flex',
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        color: state.isSelected ? '#43AA8B' : '#20282A',
        backgroundColor: state.isSelected ? '#E3FFF6' : 'white',
        padding: '25px 20px',
        fontSize: 19,
        borderRadius: 10,
        marginTop: -5,

    }),

    menu: (provided) => ({
        ...provided,
        borderRadius: 10,
        width: 450,

    }),
    indicatorSeparator: (provided) => ({
        ...provided,

    }),
    input: (provided) => ({
        ...provided,
        color: 'red',

    }),

    dropdownIndicator: (provided) => ({
        ...provided,
        color: '#7D8283',

    }),
    multiValueRemove: (provided) => ({
        ...provided,
        color: '#7D8211',
        ':hover': {
            backgroundColor: '#E0E0E0',
        },
        height: 20,
        margin: 'auto 0px',
        borderRadius: 10,
        padding: 5,

    }),
    valueContainer: (provided) => ({
        ...provided,
        border: 'red',

    }),

};
