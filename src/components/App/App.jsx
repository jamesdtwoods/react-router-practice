import axios from 'axios';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import StudentForm from '../StudentForm/StudentForm.jsx';
import StudentList from '../StudentList/StudentList.jsx';
import Nav from '../Nav/Nav.jsx';

function App() {
    return (
        <div className="App">
            <Router>
                <header className="App-header">
                <h1 className="App-title">GitHub Student List</h1>
                </header>
                <br/>
                <Nav />
                <Route exact path="/about" >
                    <p>Here's a place to list the chefs in Moonstone.</p>
                </Route>
                <StudentForm />
                <Route exact path="/allStudents">
                    <p>Student list:</p>
                    <StudentList />
                </Route>
            </Router>
        </div>
    );
}

export default App;
