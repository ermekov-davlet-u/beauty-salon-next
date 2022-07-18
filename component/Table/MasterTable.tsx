

function MasterTable({
    options = []
}:{
    options: any[]
}) {
    return ( 

        <>
        
        <section className="table section" id="skills">

                <div className="table_container ">

                    <div className="table_titles">
                        <div className="table_title order_master_fam">ФИО</div>
                        <div className="table_title order_master_tel">Тел номер</div>
                        <div className="table_title order_master_status">Статус</div>
                    </div>
                    <div className="orders">
                        {
                            options.map((item, index) => {
                                return(
                                    <div className="order">
                                        <div className="order_chekmark">
                                            <input type="checkbox" className="chekmark"/>
                                        </div>
                                        <div className="order_master_fam order_elem">
                                            {
                                                item.masterName
                                            }
                                        </div>
                                        <div className="order_master_tel order_elem">
                                            {
                                                item.masterTel
                                            }
                                        </div>
                                        <div className="order_master_status order_elem">
                                            {
                                                item.status.statusName
                                            }
                                        </div>
                                        <div className="order_del order_elem">
                                            x
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        
        </>

     );
}

export default MasterTable;