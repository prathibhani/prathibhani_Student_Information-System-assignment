import logo from './logo.svg';
import './App.css';
import { students } from './assests/data/StudentsDb';
import StudentTable  from './components/StudentTable';

function App() {
  return (
    <div className="App">
      <h1>Students Information Portal</h1>
      <hr/>
      <table width="100">
        <tbody>
          <tr>
            <td>
       <StudentTable students={students}/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
