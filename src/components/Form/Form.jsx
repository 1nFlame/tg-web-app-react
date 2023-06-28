import React, {useState} from 'react';
import './Form.css'
const Form = () => {
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')
    const [subject, setSubject] = useState('physical')

    const onChangeCity = (e) => {
        setCity(e.target.value)
    }
    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }
    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    return (
        <div className={"form"}>
            <h3>Введите ваши данные</h3>
            <input className={'input'}
                    type='text'
                    placeholder={'Город'}
                    value={city}
                    onChange={onChangeCity}
            />
            <input className={'input'}
                    type='text'
                    placeholder={'Улица'}
                    value={street}
                    onChange={onChangeStreet}
            />
        <select value={subject}
                onChange={onChangeSubject}
                className={'select'}>
            <option value={'physical'}>Физ. лицо</option>
            <option value={'legal'}>Юр. лицо</option>
                </select>
        </div>
    );
};

export default Form;
