import Swal from 'sweetalert2'
import { fetchRequest } from './../../hooks/request';
import { ChangeEvent } from 'react';


function Table({
    options = []
}: {
    options: any[]
}) {
    const { requestApi } = fetchRequest()

    async function delOrder(id: number){
        const res = await requestApi("order/" + id, "Delete")
        console.log((res));
        
    }

    function deleteOrder(id: number){
        Swal.fire({
            title: 'Вы дествительно хотите удалить?',
            text: "Удалить!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Да, удалить запись!',
            cancelButtonText: "Отмена"
          }).then((result) => {
            if (result.isConfirmed) {
                delOrder(id)
                Swal.fire(
                    'Запись удалена',
                    'Удаление прошла успешно!'
                )
            }
          })
    }

    return ( 
        <>
            <section className="table section" id="skills">
                <div className="table_container">
                    <div className="table_titles">
                        <div className="table_title order_fam">Мастер</div>
                        <div className="table_title order_uslug">Услуга</div>
                        <div className="table_title order_client">Имя клиента</div>
                        <div className="table_title order_time">Время</div>
                        <div className="table_title order_date">Дата</div>
                        <div className="table_title order_price">Цена услуги</div>
                        <div className="table_title order_price"></div>
                    </div>
                    <div className="orders">
                        {
                            options.map((item, index) => {
                                return <div className="order" key={item.idOrder}>
                                    <div className="order_chekmark">
                                        <input defaultChecked={item.orderDone} type="checkbox" className="chekmark" onChange={async(e: ChangeEvent<HTMLInputElement>) => {
                                            await requestApi("order/" + item.idOrder , "PATCH", { orderDone:  e.target.checked})
                                        }}/>
                                    </div>
                                    <div className="order_fam order_elem">
                                        {
                                            item.mu.master.masterName
                                        }
                                    </div>
                                    <div className="order_uslug order_elem">
                                        {
                                            item.mu.muslugi.uslugiName
                                        }
                                    </div>
                                    <div className="order_client order_elem">
                                        {
                                            item.client.clientName
                                        }
                                    </div>
                                    <div className="order_time order_elem">
                                        {
                                            item.time.timeName
                                        }
                                    </div>
                                    <div className="order_date order_elem">
                                        {
                                            item.OrderDate
                                        }
                                    </div>
                                    <div className="order_price order_elem">
                                        {
                                            item.mu.muPrice
                                        }
                                    </div>
                                    <div className="order_del order_elem" onClick={() => {
                                        deleteOrder(item.idOrder)
                                    }}>
                                        x
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </section>
        </>
     );
}

export default Table;