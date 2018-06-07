import * as React from 'react';
import Student, { IStudentProps } from './student';
import Lecturer from './lecturer';

interface ILectureProps {
    lecturerName: string;
    initialStudents?: Array<IStudentProps>;
    onStartLecture?();
    onExamStarted(students: Array<IStudentProps>);
}

interface ILectureState {
    newStudentName?: string;
    students: Array<IStudentProps>;
}

export default class Lecture extends React.Component<ILectureProps, ILectureState> {
    constructor(props: ILectureProps) {
        super(props);
        this.state = {
            students: props.initialStudents ? props.initialStudents : []
        };
    }

    public componentDidMount() {
        if (this.props.onStartLecture) {
            this.props.onStartLecture();
        }
    }

    public render() {
        return <div>
            <Lecturer name={this.props.lecturerName} onExamStart={this._onStartExam} />
            <div>
                {
                    this.state.students.map((student, i) =>
                        <Student key={i} {...student} />
                    )
                }
            </div>
            <div>
                <input value={this.state.newStudentName} onChange={this._onInputChange} />
                <button onClick={this._addStudent}> Add Student </button>
            </div>
        </div>;
    }

    private _addStudent = () => {
        const newStudentList = {...this.state.students};
        newStudentList.push({name: this.state.newStudentName});
        this.setState({
            students: newStudentList
        });
    }

    private _onInputChange = (e: any) => {
        this.setState({
            newStudentName: e.target.value
        });
    }

    private _onStartExam = () => {
        this.props.onExamStarted(this.state.students);
    }
}