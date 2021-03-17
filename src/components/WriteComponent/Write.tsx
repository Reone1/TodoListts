import * as React from 'react';
import { connect, useDispatch } from 'react-redux'
import styled from 'styled-components';
import { addTodo } from '../../../reducers/reducer';

type FormProps = {
  onSubmit: (form: { title: string; description: string; flag:boolean }) => void;
};
type WriteProps = {
    title : string;
    description: string;
    flag:boolean;
}

const InputForm = styled.form`
    border: 1px solid black;
    height: 70%;
    margin:0 auto;
    width: 80%;
    input {
        width:100%;
        display:block;
        border:none;
        border-bottom: 1px solid black;
    }
    textarea {
        width: 100%;
        display:block;
        border:none;
        border-bottom: 1px solid black;
    }
    button {
        border :none;
        background-color: rgba(0,0,0,0);
        width: 100%;
    }
`

const Write:React.FC<FormProps> = ({ onSubmit }:FormProps) => {
    const [form, setForm] = React.useState<WriteProps>({
        title: '',
        description: '',
        flag: false
    })
    const dispatch = useDispatch()

    const onChange =(event:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        const {name, value} = event.target
        setForm({
            ...form,
            [name]:value
        })
    }
    
    const onChangeCheckBox =(event:React.ChangeEvent<HTMLInputElement>) => {
        const {name, checked} = event.target
        setForm({
            ...form,
            [name]:checked
        })
    }

    const submit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {
            title,
            description
        } = form
        if (title === '' || description === '') {
            return console.error('no input') // error 처리
        }
        dispatch(addTodo(form))
        onSubmit(form)
        setForm({
            title:'',
            description:'',
            flag:false,
        })
    }

    return (    
        <InputForm onSubmit={submit}>
            <input name="title" value={form.title} onChange={onChange}/>
            <textarea name="description" value={form.description} onChange={onChange} ></textarea>
            <input type="checkbox" name="flag" checked={form.flag} onChange={onChangeCheckBox}/>
            <button name="submit">등록</button>
        </InputForm>
    )
}

export default Write;
