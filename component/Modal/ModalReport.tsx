import { CSSProperties, useEffect, useState, ChangeEvent } from "react";
import { fetchRequest } from '../../hooks/request';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hook';
import {directorySlice} from '../../store/slices/directorySlice';
import Swal from 'sweetalert2'

function ModalReport({
    show,
    close,
    title
    }: {
        show: boolean,
        close: () => void,
        title: string
    }) {

        const [ form, setForm ] = useState<{
            master: number
            muslugi: number
            muPrice: number
        }>({
            master: 0,
            muslugi: 0,
            muPrice: 0
        })

    const [ uslugi, setUslugi ] = useState<{
        idUslugi: number
        uslugiName: string
    }[]>([])
    const [ master, setMaster ] = useState<{
        idMaster: number
        masterName: string
    }[]>([])

    const style: CSSProperties = {
        display: show? "flex": "none"
    }

    const { requestApi } = fetchRequest()

    async function getOrderRep(){
        const mastetrs = await requestApi("master")
        const uslugis = await requestApi("uslugi")
        setUslugi(uslugis)
        setMaster(mastetrs)
    }

    useEffect(() => {
        getOrderRep()
    }, [])

    return ( 
        <>
            <div className="modal_wrap" style={style}>
                <section className="madal section" id="modal">
                    <div className="modal_constainer">
                        <div className="madal_header">
                            <h3 className="modal_header_title">
                                {
                                    title
                                }
                            </h3>
                            <button className="modal_header_btn" onClick={close}>x</button>
                        </div>
                        <div className="modal_content">
                            <div className="input_wrap">
                                <h4 className="input_title">
                                    Услуга 
                                </h4>
                                <select  className="input" onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                                    setForm({...form, muslugi: Number(e.target.value)})
                                }}>
                                    {
                                        uslugi.map(item => {
                                            return(
                                                <option value={item.idUslugi} key={item.idUslugi}>
                                                    {
                                                        item.uslugiName
                                                    }
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="input_wrap">
                                <h4 className="input_title">
                                    Мастер 
                                </h4>
                                <select  className="input" onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                                    setForm({...form, master: Number(e.target.value)})
                                }}>
                                    {
                                        master.map(item => {
                                            return(
                                                <option value={item.idMaster} key={item.idMaster}>
                                                    {
                                                        item.masterName
                                                    }
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="input_wrap">
                                <h4 className="input_title">
                                    ФИО Мастера
                                </h4>
                                <input type="text" className="input" onInput={(e: ChangeEvent<HTMLInputElement>) => {
                                    setForm({...form, muPrice: Number(e.target.value)})
                                }}/>
                            </div>
                            <div className="homedesc_btn_wrap">
                                <button className="homedesc_btn"onClick={async() => {
                                const res = await requestApi("master-uslugi", "Post", form)
                                if(res){
                                    Swal.fire('Добавлена новая услуга')
                                    close()
                                }
                            }}>
                                    Сохранить
                                    <img src="/assets/img/icons/next.png" alt="" className="button_icon img icon" />
                                </button>
                            </div>
                        </div>
                        <div className="modal_footer">
                            <div className="modal_footer_text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            </div>
                            <button className="modal_footer_btn" onClick={close}>Закрыть</button>
                        </div>
                    </div>
                </section>
            </div>
        </>
     );
}

export default ModalReport;