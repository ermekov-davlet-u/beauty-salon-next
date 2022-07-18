
import { VerticalChart } from './../../component/diagram/MainDiagram';
import Main from './../../component/Main';
import Button from './../../component/Button/Button';
import Editor from '../../component/Editor';
import Link from 'next/link';

function ReportCreate() {
    return ( 
        <Main>

            <Editor />
            
            <Button text='Распечатать' />
        </Main>
     );
}

export default ReportCreate;