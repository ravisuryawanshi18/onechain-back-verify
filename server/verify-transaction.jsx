import React from 'react';
import {Row,  Col, Button, Panel} from 'react-bootstrap';

class VerifyTransaction extends React.Component {
    render() {
	let fieldProps = {
			panelHeader : {
				color : 'white'
			},
			panelBody : {
				paddingLeft: '35px'
			},
			panelBodyTitle : {
				paddingLeft: '50px',
				fontWeight: '600'
			}
		};
		let panelHeader = (<div style={fieldProps.panelHeader}>Backchain Verify</div>);
		
		let panelBody = (<div>
								<Row style={fieldProps.panelBodyTitle}>Verify my transaction with a:</Row><br/>
								<Row style={fieldProps.panelBody}>
									<Col md={3}><Button>Business Transaction ID</Button></Col>
									<Col md={2}><Button>Transaction ID</Button></Col>
									<Col md={2}><Button>Payload File</Button></Col>
									<Col md={3}><Button>Transaction Message</Button></Col>
								</Row>
						</div>);
        return (
			<Panel header={panelHeader} bsStyle="primary">
				{panelBody}
			</Panel>
		);
    }
}

export default VerifyTransaction;