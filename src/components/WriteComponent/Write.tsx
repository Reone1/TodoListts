import * as React from 'react';
import styled from 'styled-components';

type FormProps = {
  onSubmit: (form: { title: string; description: string; flag:boolean }) => void;
};
interface WriteProps {
    title : string;
    description: string;
    flag:boolean;
}

const InputForm = styled.form`
    border: 1px solid black;
    height: 70%;

    input {
        display:block;
    }
`

const Write:React.FC<FormProps> = ({ onSubmit }:FormProps) => {
    const [form, setForm] = React.useState<WriteProps>({
        title: '',
        description: '',
        flag: false
    })

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