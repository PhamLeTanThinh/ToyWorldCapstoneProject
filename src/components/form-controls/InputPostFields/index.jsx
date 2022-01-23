
import PropTypes from 'prop-types';
import React from 'react';
import TextField from '@mui/material/TextField';
import { Controller } from 'react-hook-form';


InputPostField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputPostField(props) {
    const { form, name, label, disabled } = props;
    const { errors } = form;

    const hasError = errors[name];

    return (
        <Controller
            name={name}
            control={form.control}
            as={TextField}

            label={label}
            disabled={disabled}
            placeholder='How are you doing?'
            fullWidth
            variant="filled"
            multiline
            rows={4}
            margin="dense"

            error={!!hasError}
            helperText={errors[name]?.message}
        />
    );
}

export default InputPostField;