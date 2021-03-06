import * as React from 'react';


type MyFormProps = {
  onSubmit: (form: { title: string; description: string }) => void;
};
interface WriteProps {
    title : string;
    description: string;
    flag:boolean;
}


const Write:React.FC<MyFormProps> = ({ onSubmit }:MyFormProps) => {
    const [form, setItem] = React.useState<WriteProps>({title:'',description:'',flag:false})

    const onChange =(event:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        const {name, value} = event.target
        setItem({
            ...form,
            [name]:value
        })
    }
    const onChangeCheckBox =(event:React.ChangeEvent<HTMLInputElement>) => {
        const {name, checked} = event.target
        setItem({
            ...form,
            [name]:checked
        })
    }

    const submit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(e.target)
        onSubmit(form)
    }

    return (    
        <form onSubmit={submit}>
            <input name="title" value={form.title} onChange={onChange}/>
            <textarea name="description" value={form.description} onChange={onChange} ></textarea>
            <input type="checkbox" name="flag" checked={form.flag} onChange={onChangeCheckBox}/>
            <button name="submit">등록</button>
        </form>
    )
}

export default Write;