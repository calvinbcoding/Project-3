import React from 'react';

function BPIDetail(){
    return(<div>
        {/* <p>This is the Bitcoin PRice Index for  {props.time.updated}</p><br/> */}
		<p> This is the USD BPI info {bpi.USD}</p>
		<p> This is the GBP BPI info {bpi.GBP}</p>
		<p> This is the EUR BPI info {bpi.EUR}</p>
    </div>)
}

export default BPIDetail;