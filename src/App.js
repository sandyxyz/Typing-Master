import React from 'react';
import { typingTestData } from './source';
import { TestContainer } from './TestContainer';
import './App.css';

import { randomElementSelector } from './randomSelector';
import { testDetailsCalculator } from './testDetailsCalculator';

const defaultState = {
	timerStarted:false,
			timerValue:30,
			
			selectedParagraph : randomElementSelector(typingTestData),
			detailsContainer:{
			words:0,
			characters:0,
			mistakes:0
}
}

class App extends React.Component {
	constructor () {
		super();

		this.state = defaultState
			
	}

	handleOnType=(inputValue)=> {
		console.log(inputValue);
		if(!this.state.timerStarted) this.startTimer();
		this.setState({detailsContainer:testDetailsCalculator(this.state.selectedParagraph,inputValue)})
	}

	triggerTryAgain =()=>this.setState(defaultState)
	




	startTimer=() => {
		this.setState({timerStarted: true })
		const timer =setInterval(()=> {
			if(this.state.timerValue > 0){
				this.setState({timerValue:this.state.timerValue - 1})
			}else{
				clearInterval(timer);
			}
		},1000)

	}
	
	

	render() {
		return (
			
			
			<div className="app-container">
			
		
				<h1 className="main-heading">Typing Master</h1>
			
				<div className="test-container-main">
					<TestContainer
					timerStarted={this.state.timerStarted}
					timerValue={this.state.timerValue}
					 handleOnType={this.handleOnType}
					 triggerTryAgain={this.triggerTryAgain}
					 selectedParagraph={this.state.selectedParagraph}
					 words={this.state.detailsContainer.words}
					 characters={this.state.detailsContainer.characters}
						mistakes={this.state.detailsContainer.mistakes}
					 
					 />
       	</div>
			</div>
		)
	}
}

export default App;
