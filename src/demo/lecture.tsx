import * as React from 'react';
import Student, { IStudentProps } from './student';
import Lecturer from './lecturer';

interface ILectureProps {
    lecturerName: string;
    students: Array<IStudentProps>;
    onStartLecture();
    onEndLecture();
}

interface ILectureState {
    examStarted: boolean;
}

export default class Lecture extends React.Component<ILectureProps, ILectureState> {
    constructor(props: ILectureProps) {
        super(props);
        this.state = {
            examStarted: false
        };
    }

    public componentDidMount() {
        this.props.onStartLecture();
    }

    public render() {
        return <div>
            <Lecturer name={this.props.lecturerName} onExamStart={this._onStartExam} />
            <div>
                {
                    this.props.students.map((student, i) =>
                        <Student key={i} {...student} />
                    )
                }
            </div>
            <button onClick={this.props.onEndLecture()}> Finish Lecutre </button>
        </div>;
    }

    private _onStartExam = () => {
        this.setState({
            examStarted: true
        });
    }
}