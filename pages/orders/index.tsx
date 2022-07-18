
import Main from './../../component/Main';
import Table from './../../component/Table/Table';
import Button from './../../component/Button/Button';
import Link from 'next/link';
import { fetchRequest } from './../../hooks/request';
import { useState } from 'react';
import Modal from './../../component/Modal/Modal';
import ModalReport from './../../component/Modal/ModalReport';


function Order({
    orders
}:{
    orders: any[]
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
            <ModalReport title="Доход за сегодня" show={modalShow} close={closeModal}/>
                Записи
            <Table options={orders}/>
            
            <Link href={"/orders/add"}>Добавить</Link>
            <Button clickAction={openModal} text='Посмотреть'/>
        </Main>
     );
}

export default Order;

export async function getServerSideProps(params:any) {
    const { requestApi } = await fetchRequest()

    const res = await requestApi("order")
    
    return {
        props: {
            orders: res
        }
    }
    
} 