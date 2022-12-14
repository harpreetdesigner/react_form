import { Card } from '@mui/material';
import './App.css';
import UserForm from './Components/Form';
import UserTable from './Components/Table';

function App() {
	return (
		<div className="main_section">
			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-6">
						<Card variant="elevation" className="box_shadow p-4">
							<UserForm />
						</Card>
					</div>
					<div className="col-lg-6">
						<UserTable />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
