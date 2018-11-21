import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';
import * as actions from '../../actions';

class SurveyNew extends Component {
    state = {showFormReview: false};


    renderContent() {
        const {formValues, submitSurvey, history} = this.props;

        if(this.state.showFormReview) {
            return <SurveyFormReview
                onCancel={() => this.setState({showFormReview: false})}
                onConfirm={async () => {
                    await submitSurvey(formValues);
                    history.push('/surveys');
                }}
            />
        }

        return <SurveyForm onSubmit={() => this.setState({showFormReview: true})} />;
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
};

function mapStateToProps(state){
    const {surveyForm} = state.form;

    return {
        formValues: surveyForm && surveyForm.values
    };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyNew));