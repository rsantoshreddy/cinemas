import React from 'react';
import { render } from 'react-dom';
import helper from './helpers/RestHelper';
import App from './components/App';
import Seats from './components/seats/Seats';
import './css/page.css'; //Webpack can import CSS files too!

export default class Page extends App {

    constructor(props) {
        super(props);
        this.state = {
            modelData: null
        };
        this.setModelData = this.setModelData.bind(this);
        this.handleSeatSelection=this.handleSeatSelection.bind(this);
    }

    handleSeatSelection(seat){
        if(seat || seat === 0){
            const {modelData} = this.state;
            if(modelData.seats[seat].status === "available")
            modelData.seats[seat].status="selected"
            this.setState({ modelData })
        }    	
    }
    setModelData(modelData) {
        this.setState({ modelData })
    }
    componentDidMount() {
        const modelData = null;
        const promise = helper.get("/data")
            .then(this.setModelData);
    }
    createBody() {
        const { modelData } = this.state;
        const handleSeatSelection = this.handleSeatSelection;

        return ( 
        	<div className = "main-container" >
            	<Seats {...modelData} handleSeatSelection={handleSeatSelection} />				         		         
            </div> 
        );
    }
}

render( <Page /> , document.getElementById("app"));