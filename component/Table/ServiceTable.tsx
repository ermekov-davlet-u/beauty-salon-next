

function ServiceTable({
    options = []
}:{
    options: any[]
}) {
    return ( 

        <>
            <section className="table section" id="skills">
                <div className="table_container">
                    <div className="table_titles">
                        <div className="table_title order_fam">Категория</div>
                        <div className="table_title order_master_tel">Название</div>
                        <div className="table_title order_master_fam">Мастер</div>
                        <div className="table_title order_time">Цена</div>
                    </div>
                    <div className="orders">
                        {
                            options.map((item, index) => {
                                return(
                                    <div className="order" key={item.idUslugi}>
                                        <div className="order_fam order_elem" style={{marginLeft: "48px"}}>
                                            {
                                                item.muslugi.category.categoryName
                                            }
                                        </div>
                                        <div className="order_master_tel order_elem">
                                            {
                                                item.muslugi.uslugiName
                                            }
                                        </div>
                                        <div className="order_master_fam order_elem">
                                            {
                                                item.master.masterName
                                            }
                                        </div>
                                        <div className="order_time order_elem">
                                            {
                                                item.muPrice
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

export default ServiceTable;