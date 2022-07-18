
import Button from '../../component/Button/Button';
import Main from './../../component/Main';
import ClientTable from './../../component/Table/ClientTable';
import { fetchRequest } from './../../hooks/request';
import { useState } from 'react';
import Modal from './../../component/Modal/Modal';
import ModalClient from './../../component/Modal/ModalClient';

function Client({
    clients = []
}:{
    clients: any[]
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
            <ModalClient title="Добавить Клиента" show={modalShow} close={closeModal}/>
            Список клиентов
            <ClientTable options={clients}/>
            <Button clickAction={openModal} text='Добавить'/>
        </Main>
     );
}

export default Client;

export async function getServerSideProps(params:any) {

    const { requestApi } = fetchRequest()

    const res = await requestApi("client")

    return {
        props: {
            clients: res
        }
    }
    
}