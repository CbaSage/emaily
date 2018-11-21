import React from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import formFields from './formFields';

const surveyFormReview = ({onCancel, formValues, onConfirm}) => {
    const reviewFields = _.map(formFields, ({name, label}) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>{formValues[name]}</div>
            </div>
        );
    });

    return (
        <div>
            <h5>Please confirm your entries</h5>
            <div>
                {reviewFields}
            </div>
            <button className="yellow darken-3 white-text btn-flat"
                    onClick={onCancel}
            >
                Back
            </button>
            <button className="green btn-flat white-text right" onClick={onConfirm}>
                Send Survey <i className="material-icons right">email</i>
            </button>
        </div>
    );

};

function mapStateToProps(state) {
    return {
        formValues: state.form.surveyForm.values
    };
};

export default connect(mapStateToProps)(surveyFormReview);