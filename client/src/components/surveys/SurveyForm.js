import _ from 'lodash';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

import formFields from './formFields';

class SurveyForm extends Component {
    renderFields() {
        return (
            <React.Fragment>
                {_.map(formFields, field => (<Field {...field} key={field.name} type="text" component={SurveyField} />))}
            </React.Fragment>
        );
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text">
                        Cancel
                    </Link>
                    <button type="submit" className="teal btn-flat right white-text">
                        Next
                        <i className="material-icons right">done</i>
                    </button>

                </form>
            </div>
        );
    }
};

function validate(values) {
    const errors = {};

    errors.emails = validateEmails(values.recipients || '');

    _.each(formFields, ({name, label}) => {
        if(!values[name]){
            errors[name] = `You must provide a ${label}`;
        }
    });

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);