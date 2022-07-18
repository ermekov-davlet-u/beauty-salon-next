import { CSSProperties, useEffect, useState, ChangeEvent } from "react";
import { fetchRequest } from '../../hooks/request';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hook';
import {directorySlice} from '../../store/slices/directorySlice';
import Swal from 'sweetalert2'

function ModalClient({
    show,
    close,
    title
    }: {
        show: boolean,
        close: () => void,
        title: string
    }) {

    const [ form, setForm ] = useState<{
        clientName: string
        clientTel: string
    }>({
        clientName: "",
        clientTel: ''
    })

    const directory = useAppSelector(state => state.directoryReducer)
    const { newStatuses } = directorySlice.actions
    const dispatch = useAppDispatch()

    const style: CSSProperties = {
        display: show? "flex": "none"
    }

    const { requestApi } = fetchRequest()

    // async function getStatus(){
    //     const statuses = await requestApi("status")
    //     dispatch(newStatuses(statuses))
    // }

    // useEffect(() => {
    //     getStatus()
    // }, [])

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
                                    ФИО клиента
                                </h4>
                                <input type="text" className="input" onInput={(e: ChangeEvent<HTMLInputElement>) => {
                                    setForm({...form, clientName: e.target.value})
                                }}/>
                            </div>
                            <div className="input_wrap">
                                <h4 className="input_title">
                                    Тел номер клиента
                                </h4>
                                <input type="text" className="input" onInput={(e: ChangeEvent<HTMLInputElement>) => {
                                    setForm({...form, clientTel: e.target.value})
                                }}/>    
                            </div>
                            <div className="homedesc_btn_wrap">
                                <button className="homedesc_btn"onClick={async() => {
                                const res = await requestApi("client", "Post", form)
                                if(res){
                                    Swal.fire('Добавлен новый клиент')
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
                                Accusamus deserunt quisquam exercitationem, quia pariatur beatae sed odio quos.
                            </div>
                            <button className="modal_footer_btn" onClick={close}>Добавить</button>
                        </div>
                    </div>
                </section>
            </div>
        </>
     );
}

export default ModalClient;