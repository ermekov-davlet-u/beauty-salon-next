import Swal from 'sweetalert2'
import Main from './../../component/Main';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { fetchRequest } from './../../hooks/request';
import { options } from './../../component/diagram/MainDiagram';
import { ChangeEvent } from 'react';
import Select from './../../component/input/Select';
import Button from './../../component/Button/Button';
import Modal from './../../component/Modal/Modal';
import ModalClient from './../../component/Modal/ModalClient';
const dayjs = require('dayjs')


interface IOrderForm{
    mu: number;
    client: number;
    time: number;
    OrderDate: Date;
}

interface IOrderPropType{
    mu: any[],
    client: any[],
    times: any[],
}



function OrderAdd({
    mu = [],
    client = [],
    times = [],
}: IOrderPropType) {

    const { requestApi } = fetchRequest()

    const [ orderForm, setOrderForm ] = useState<IOrderForm>({
        mu: 0,
        client: 0,
        time: 0,
        OrderDate: dayjs().format("YYYY-MM-DD") ,
    })

    function changeHundle(e: ChangeEvent<HTMLSelectElement>){
        setOrderForm({ ...orderForm, [ e.target.name ]: Number(e.target.value) })
    }

    async function sendReq(){
        const res = await requestApi("order", "POST", orderForm)
        if(res.message){
            Swal.fire({
                title: res.message,
              })
            return
        };
        
        Swal.fire({
            title: 'Запись добавлена',
          })
        
    }
    const [modalShow, setModalShow] = useState<boolean>(false)

    const closeModal = () => {
        setModalShow(false)
    }
    const openModal = () => {
        setModalShow(true)
    }
    return ( 
        <Main>
            <>
                <ModalClient title="Добавить Запись" show={modalShow} close={closeModal}/>
                <div className="orderadd">
                    <div className="input_wrap">
                        <h4 className="input_title">
                            Выберите дату
                        </h4>
                        <input type="date" className="input" />
                    </div>
                    <Select title='Выберите мастера' selectName="mu" options={mu} valueSel={orderForm.mu} changeHundleselect={changeHundle} optionRender={ (item) => {
                        return <option key={item.idMU} value={item.idMU}> {item.master.masterName + " [ " + item.muslugi.uslugiName + " стоимость " + item.muPrice + " ]" } </option>
                    }}/>
                    <Select title="Выбор клиента" selectName="client" options={client} valueSel={orderForm.client} changeHundleselect={changeHundle} optionRender={ (item) => {
                        return <option key={item.idClient} value={item.idClient}> {item.clientName + " [" + item.clientTel + "]" } </option>
                    }}/>
                    <button onClick={openModal} >Добавить клиента</button>
                    <Select title="Выберите время" selectName="time" options={times} valueSel={orderForm.time} changeHundleselect={changeHundle} optionRender={ (item) => {
                        return <option key={item.idTime} value={item.idTime}> {item.timeName} </option>
                    }}/>
                    <Button clickAction={sendReq} text="Сохранить"/>
                    
                </div>
            </>
        </Main>
     );
}

export default OrderAdd;

export async function getServerSideProps(params: any) {

    const { requestApi } = fetchRequest()
    const mu = await requestApi("master-uslugi/select")
    const client = await requestApi("client")
    const times = await requestApi('time')
    

    return {
        props: {
            mu: mu,
            client: client,
            times: times,
        }
    }
    
}