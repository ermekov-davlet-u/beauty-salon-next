

function Button({ text = "Позвонить мне", clickAction}: { text?: string, clickAction?: (param?: any) => any }) {
    return ( 
        <>
            <div className="homedesc_btn_wrap">
                <button className="homedesc_btn" onClick={clickAction}>
                    {
                        text
                    }
                    <img src="/assets/img/icons/next.png" alt="" className="button_icon img icon" />
                </button>
            </div>
        </>
     );
}

export default Button;