import { fetchRequest } from '../../hooks/request';
import Main from './../../component/Main';
import ServiceTable from './../../component/Table/ServiceTable';
import { useState } from 'react';
import Modal from './../../component/Modal/Modal';
import Button from '../../component/Button/Button';
import ModalReport from './../../component/Modal/ModalReport';


function Service({
    services
}: {
    services: any[] 
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
            <ModalReport title="Добавить услугу" show={modalShow} close={closeModal}/>
                Услуги
            <ServiceTable options={services}/>
            <Button clickAction={openModal} text="Добавить"/>
        </Main>
     );
}

export default Service;

export async function getServerSideProps(params:any) {

    const { requestApi } = await fetchRequest()

    const res = await requestApi("master-uslugi")
    
    return {
        props: {
            services: res
        }
    }
    
}