import { FC } from 'react'

interface CheckboxProps {
    label: string
    id: string
    isChecked: boolean
    setIsChecked: (value: boolean) => void
}

const Checkbox:FC<CheckboxProps> = ({ label, id, isChecked, setIsChecked}) => {
    return (
        <label className="checkbox">
            <input type="checkbox" checked={isChecked}  onChange={() => setIsChecked(!isChecked)} name="" id={id} />
            <span className="checkmark"></span> 
            { label }
        </label>
    )
}

export default Checkbox