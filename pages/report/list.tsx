import { VerticalChart } from './../../component/diagram/MainDiagram';
import Main from './../../component/Main';
import Button from './../../component/Button/Button';
import Link from 'next/link';
import ReportTable from './../../component/Table/ReportTable';

function Report() {
    return ( 
        <Main>
            Report

            <ReportTable />

            <Link href={"/report/create"}>Составить отчет</Link>

        </Main>
     );
}

export default Report;