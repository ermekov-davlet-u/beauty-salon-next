
import Button from '../../component/Button/Button';
import Main from './../../component/Main';
import MasterTable from './../../component/Table/MasterTable';
import { fetchRequest } from './../../hooks/request';
import { useState } from 'react';
import Modal from '../../component/Modal/Modal';


function Master({
    masters
}:{
    masters: any[]
}) {
    const [modalShow, setModalShow] = useState<boolean>(false)

    const closeModal = () => {
        setModalShow(false)
    }
    const openModal = () => {
        setModalShow(true)
    }
    return ( 
        <Main>
            <Modal title="Добавить Мастера" show={modalShow} close={closeModal}/>
            Список мастеров

            <MasterTable options={masters}/>
            <Button clickAction={openModal} text='Добавить'/>
        </Main>
     );
}

export default Master;

export async function getServerSideProps(params:any) {
    const { requestApi } = await fetchRequest()

    const res = await requestApi("master")
    
    return {
        props: {
            masters: res
        }
    }
    
} 