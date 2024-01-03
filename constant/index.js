export const selectStyles = {
    menuList: styles => ({
        ...styles,
        background: 'white'
    }),
    option: (styles, { isFocused, isSelected }) => ({
        ...styles,
        background: isFocused
            ? '#69D600'
            : isSelected
                ? '#69D600'
                : undefined,
        zIndex: 1
    }),
    menu: base => ({
        ...base,
        zIndex: 100
    }),
    control: (base, state) => ({
        ...base,
        border: '1px solid #dee2e6',
        boxShadow: 'none',
        '&:hover': {
            border: '1px solid #dee2e6',
        }
    })
};