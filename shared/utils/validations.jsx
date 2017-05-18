import React from 'react';
import validator from 'validator';
import Validation from 'react-validation';

Object.assign(Validation.rules, {
    api: {
        hint: value => (
            <button
                className="form-error is-visible"
            >
                API Error on "{value}" value. Focus to hide.
            </button>
        )
    },

    required: {
        rule: value => value.toString().trim(),
        hint: () => <span className="form-error is-visible">Required</span>
    },

    alpha: {
        rule: value => validator.isAlpha(value),
        hint: () => (
            <span className="form-error is-visible">
                String should contain only letters (a-zA-Z).
            </span>
        )
    },

    alphaNormal: {
        rule: value => validator.isAlphanumeric(value.toString().replace(/\s+/g, '')),
        hint: () => (
            <span className="form-error is-visible">
                String should contain only letters (a-zA-Z0-9).
            </span>
        )
    },

    alphaSpecial: {
        rule: value => {
            if (/^[a-z0-9]+$/.test(value))
                return value;
            else
                return '';
        },
        hint: () => (
            <span className="form-error is-visible">
                String should contain only letters (a-z1-9).
            </span>
        )
    },

    email: {
        rule: value => validator.isEmail(value),
        hint: value => <span className="form-error is-visible">{value} is not an Email.</span>
    },

    hourly_rate: {
        rule: value => validator.isNumeric(value.toString().replace(/[.]/g, '')),
        hint: value => <span className="form-error is-visible">{value} is not an Number.</span>
    },

    phone: {
        rule: value => validator.isNumeric(value.toString().replace(/[()-.]/g, '')),
        hint: value => <span className="form-error is-visible">{value} is not an Phone number.</span>
    },

    url: {
        rule: value => validator.isURL(value),
        hint: value => <span className="form-error is-visible">{value} is not an URL.</span>
    },
});