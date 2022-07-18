import { ChangeEvent } from "react";


export interface InputPropType{
    value?: string;
    changeHundle?: (e: ChangeEvent<HTMLInputElement>) => void;
    title?: string;
    placeHolder?: string;
    selectName?: string
}

function Input({
    value,
    changeHundle,
    title = "Введите текст",
    placeHolder = 'Введите текст',
    selectName
}: InputPropType) {
    return ( 
        <>
            <div className="input_wrap">
                <h4 className="input_title">
                    {
                        title
                    }
                </h4>
                <input value={value} name={selectName} onInput={ changeHundle } type="text" className="input" />
            </div>
        </>
     );
}

export default Input;