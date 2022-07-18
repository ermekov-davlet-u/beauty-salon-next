import { CSSProperties, useEffect, useState, ChangeEvent } from "react";
import { fetchRequest } from './../../hooks/request';
import { useAppDispatch, useAppSelector } from './../../store/hooks/hook';
import {directorySlice} from './../../store/slices/directorySlice';
import Swal from 'sweetalert2'

function Modal({
    show,
    close,
    title
    }: {
        show: boolean,
        close: () => void,
        title: string
    }) {

    const [ form, setForm ] = useState<{
        masterName: string
        masterTel: string
        status: number
    }>({
        masterName: "",
        masterTel: '',
        status: 0
    })

    const directory = useAppSelector(state => state.directoryReducer)
    const { newStatuses } = directorySlice.actions
    const dispatch = useAppDispatch()

    const style: CSSProperties = {
        display: show? "flex": "none"
    }

    const { requestApi } = fetchRequest()

    async function getStatus(){
        const statuses = await requestApi("status")
        dispatch(newStatuses(statuses))
    }

    useEffect(() => {
        getStatus()
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
                                    ФИО Мастера
                                </h4>
                                <input type="text" className="input" onInput={(e: ChangeEvent<HTMLInputElement>) => {
                                    setForm({...form, masterName: e.target.value})
                                }}/>
                            </div>
                            <div className="input_wrap">
                                <h4 className="input_title">
                                    Тел номер мастера
                                </h4>
                                <input type="text" className="input" onInput={(e: ChangeEvent<HTMLInputElement>) => {
                                    setForm({...form, masterTel: e.target.value})
                                }}/>    
                            </div>
                            <div className="input_wrap">
                                <h4 className="input_title">
                                    Уровень 
                                </h4>
                                <select  className="input" onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                                    setForm({...form, status: Number(e.target.value)})
                                }}>
                                    {
                                        directory.statuses.map(item => {
                                            return(
                                                <option value={item.idStatus} key={item.idStatus}>
                                                    {
                                                        item.statusName
                                                    }
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="homedesc_btn_wrap">
                                <button className="homedesc_btn"onClick={async() => {
                                const res = await requestApi("master", "Post", form)
                                if(res){
                                    Swal.fire('Добавлен новый мастер')
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

export default Modal;