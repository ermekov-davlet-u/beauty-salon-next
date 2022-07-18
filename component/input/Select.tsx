
import { InputPropType } from './Input';
import { ChangeEvent, ReactFragment } from 'react';

interface SelectPropType extends InputPropType{
    changeHundleselect: (e: ChangeEvent<HTMLSelectElement>) => void;
    options: any[];
    optionRender: (param: any) => any
    valueSel: number
}

function Select({
    value,
    changeHundle,
    changeHundleselect,
    title = "Введите текст",
    placeHolder = 'Введите текст',
    options = [],
    optionRender = (item) => item,
    valueSel,
    selectName
}: SelectPropType) {
    return ( 
        <>
            <div className="input_wrap">
                <h4 className="input_title">
                    {
                        title
                    }
                </h4>
                <select name={selectName} onChange={changeHundleselect} className="input select">
                    {
                        options.map(optionRender)
                    }
                </select>
            </div>
        </>
     );
}

export default Select;