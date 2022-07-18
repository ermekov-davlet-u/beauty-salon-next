import Link from "next/link";




function Header() {
    return ( 
        <>
            <header className="header" id="header">
            <div className="header_container">
                <div className="header_logo">
                    Bekjana
                </div>
                <div className="header_menu">
                    <nav className="menu_nav">
                        <ul className="menu_ul">
                            <li className="menu_li"><Link href="/"><a className="menu_link def_link">Главное</a></Link></li>
                            <li className="menu_li"><Link href="/orders"><a className="menu_link def_link">Записи</a></Link></li>
                            <li className="menu_li"><Link href="/master"><a className="menu_link def_link">Мастер</a></Link></li>
                            <li className="menu_li"><Link href="/client"><a className="menu_link def_link">Клиенты</a></Link></li>
                            <li className="menu_li"><Link href="/service"><a className="menu_link def_link">Услуги</a></Link></li>
                            <li className="menu_li"><Link href="/report"><a className="menu_link def_link">Отчетность</a></Link></li>
                        </ul>
                    </nav>
                    <div className="menu_icon">
                        <img src="/assets/img/icons/whatsapp.png" alt="Not found" className="icon img" />
                    </div>
                </div>
            </div>
        </header>
        </>
     );
}

export default Header;