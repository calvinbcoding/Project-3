import React, { Component } from 'react';
import BPIDetail from './BPIDetail/BPIDetail';
//import './style.css';

class BPIList extends Component {
    constructor(){
        super();
        this.state = {
            // bpis: [{}],
            bpi: {}
        }
    }
    // async getBPIs(){
    //     const allBPIs = await fetch('http://localhost:9000/bpis');
	// 	const allBPIsJSON = await allBPIs.json();
	// 	console.log(allBPIsJSON);
    //     this.setState({
    //         allBPIs: allBPIsJSON
    //     })
    // }
    async getbpi(){
        const bpi = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        this.setState({
            bpi: bpi 
        })
    }
    componentDidMount(){
        // this.getBPIs();
        this.getbpi();
    }
    render(){
        console.log("RENDERING THE COMPONENT")
        const BPIList = this.state.bpi.map((bpi)=>{
            return <BPIDetail bpi={bpi.USD}></BPIDetail>
        })
        // const bpisList = this.state.bpis.map((bpi)=>{
        //     return <div onClick={(e)=>{
        //         console.log("BPI");
        //         console.log(e.target);
        //         e.target.style.display = "none";
        //     }}>
        //         <h1>{bpi.time}</h1>
        //         <p>{bpi.eur}</p>
        //     </div>
        // })
        return(
            <div>
                <h1>bpiS INDEX</h1>
                { BPIList }
                {/* { bpisList} */}
            </div>
        )
    }
}

export default BPIList;