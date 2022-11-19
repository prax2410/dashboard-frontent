import React, { Component } from "react";
import './masterForm.css';

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

import MultiStepProgressBar from "./MultiStepProgressBar";

class MasterForm extends Component {
    constructor(props) {
        super(props);

    // Set the intiial input values
        this.state = {
            currentStep: 1,
            campaignName: "",
            platform: "",
            product: "",
            budget: 0,
            startDate: "",
            endDate: "",
            location: "",
            radius: ""
        };

    // Bind the submission to handleChange()
        this.handleChange = this.handleChange.bind(this);

    // Bind new functions for next and previous
        this._next = this._next.bind(this);
        this._prev = this._prev.bind(this);
    };

  // Use the submitted data to set the state
    handleChange(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    

  // Trigger an alert on form submission
    handleSubmit = event => {
        event.preventDefault();

        let {
            campaignName,
            platform,
            product,
            budget,
            startDate,
            endDate,
            location,
            radius } = this.state;
            
            // assign value to platform
            if (campaignName === "Get Leads As Calls" || campaignName === "Increase Live Store Traffic" || campaignName === "Increase The Catalogue Sales") {
                platform = "Google"
            } else if (campaignName === "Get Leads As Facebook Messages" || campaignName === "Increase Page Followers" || campaignName === "Get Customer Leads") {
                platform = "FB"
            } else if (campaignName === "Get More Youtube Views" || campaignName === "Increase Your App Installs") {
                platform = "Youtube"
            } else {
                platform = "Instagram"
            }
        
        // console.log(
        //     campaignName,
        //     platform,
        //     product,
        //     budget,
        //     startDate,
        //     endDate,
        //     location,
        //     radius);
        
        this.storeIntoDb(campaignName,
            platform,
            product,
            budget,
            startDate,
            endDate,
            location,
            radius);
    };

    storeIntoDb = async ({ campaignName,
        platform,
        product,
        budget,
        startDate,
        endDate,
        location,
        radius }) => {
        
        await fetch("http://localhost:3002/database/storeIntoDb", {
            method: "POST",
            body: campaignName,
            platform,
            product,
            budget,
            startDate,
            endDate,
            location,
            radius
        }).then((res) => {
            console.log(res);
        });
    };

  // Test current step with ternary
  // _next and _previous functions will be called on button click
  _next() {
      let currentStep = this.state.currentStep;

    // If the current step is 1 or 2, then add one on "next" button click
      currentStep = currentStep >= 3 ? 4 : currentStep + 1;
      this.setState({
          currentStep: currentStep
      });
    };

  _prev() {
    let currentStep = this.state.currentStep;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  }

  // The "next" and "previous" button functions
  get previousButton() {
      let currentStep = this.state.currentStep;

    // If the current step is not 1, then render the "previous" button
    if (currentStep !== 1) {
      return (
        <button onClick={this._prev}>
          Back
        </button>
      );
    }

    // ...else return nothing
    return null;
  }

  get nextButton() {
    let currentStep = this.state.currentStep;
    // If the current step is not 3, then render the "next" button
    if (currentStep < 4) {
      return (
        <button className="master-form--continue-button" onClick={this._next}>
          Continue
        </button>
      );
    }
    // ...else render nothing
    return null;
  }

  get submitButton() {
    let currentStep = this.state.currentStep;

    // If the current step is the last step, then render the "submit" button
    if (currentStep > 3) {
      return <button>Start Campaign</button>;
    }
    // ...else render nothing
    return null;
  }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <MultiStepProgressBar currentStep={this.state.currentStep} />
                    <div className="progress-bar-form--body">
                        <Step1
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            campaignName={this.state.campaignName}
                        />
                        <Step2
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            product={this.state.product}
                        />
                        <Step3
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            startDate={this.state.startDate}
                            endDate={this.state.endDate}
                            budget={this.state.budget}
                            location={this.state.location}
                            radius={this.state.radius}
                        />
                        <Step4
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                        />
                    </div>
                    <div className="progress-bar-form--buttons">
                        {this.previousButton}
                        {this.nextButton}
                        {this.submitButton}
                    </div>
                </form>
            </>
        );
    };
};

export default MasterForm;
