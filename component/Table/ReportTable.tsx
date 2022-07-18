
import { useState } from 'react';
import { fetchRequest } from './../../hooks/request';
import { useEffect } from 'react';


function ReportTable(
    
) {

    const { requestApi } = fetchRequest()
    const [ total, setTotal ] = useState<number>(0)
    const [ options, setOptions ] = useState<{
        master_id_master: number,
        master_masterName: string,
        master_master_tel: string,
        master_statusIdStatus: number,
        masterIdMaster: number,
        sum: number
    }[]>([])
    async function getOrderRep(){
        const statuses = await requestApi("order/report")
        setOptions(statuses)
    }

    useEffect(() => {
        getOrderRep()
    }, [])

    useEffect(() => {
        let s: number = 0

        options.forEach(item => {
            s += +item.sum
        })
        setTotal(s)

    }, [options])
    return ( 
        <>
            <div className="container">
            <h2>Отчет за день каждого мастера <small>сегодня</small> </h2>
            <ul className="responsive-table">
                <li className="table-header">
                <div className="col col-1">Номер</div>
                <div className="col col-2">Мастер</div>
                <div className="col col-3">Сколько заработал за сегодня</div>
                </li>
                    {
                        options.map((item, i) => {
                            return(
                                <li className="table-row">
                                    <div className="col col-1" data-label="Job Id">
                                        {
                                            ++i
                                        }
                                    </div>
                                    <div className="col col-2" data-label="Customer Name">
                                        {
                                            item.master_masterName
                                        }
                                    </div>
                                    <div className="col col-3" data-label="Amount">
                                        {
                                            item.sum
                                        }
                                    </div>
                                </li>
                            )
                        })
                    }
                    <li className="table-row">
                                    <div className="col col-1" data-label="Job Id">
                                        
                                    </div>
                                    <div className="col col-2" data-label="Customer Name">
                                        Общая сумма
                                    </div>
                                    <div className="col col-3" data-label="Amount">
                                        {
                                            total
                                        }
                                    </div>
                                </li>
            </ul>
            </div>
        </>
     );
}

export default ReportTable;