import axios from 'axios';
import './App.css';
import StudentForm from '../StudentForm/StudentForm.jsx';
import StudentList from '../StudentList/StudentList.jsx';

function App() {
    return (
        <div className="App">
            <header className="App-header">
            <h1 className="App-title">GitHub Student List</h1>
            </header>
            <br/>
            <StudentForm />

            <p>Student list:</p>
            <StudentList />
        </div>
    );
}

export default App;
