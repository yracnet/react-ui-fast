import React, { SyntheticEvent, useRef } from 'react'
import { Feedback, FormItem, Icon } from 'hiska-react-cc'

export const FormItemCase = () => {

    const form = useRef<HTMLFormElement>(null);

    const onSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
        let target = e.target as any;
        target.classList.add('was-validated');
        //console.log('--->', e);

        //target.preventDefault();
        //form
        //target.classList.add('was-validated');
    }


    return (
        <div>
            <FormItem label={<b>Nombre</b>} col={2}>
                <input />
            </FormItem>
            <FormItem label="Correo" col={2}>
                <input />
                <span>@gmail.com</span>
            </FormItem>
            <FormItem label="Sitio Web" col={2}>
                <span>http://</span>
                <input />
            </FormItem>
            <FormItem label="Direccion" col={2}>
                <select className="col-2">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <input />
            </FormItem>
            <FormItem label="Apellido" col={1} size="sm">
                <Icon name="check" />
                <input />
                <input />
            </FormItem>
            <FormItem label="Apellido" col={1} size="md">
                <Icon name="circle" />
                <input />
                <input />
            </FormItem>
            <FormItem label="Apellido" col={1} size="lg">
                <Icon name="circle" />
                <input />
                <button>Link</button>
            </FormItem>


            <FormItem>
                <span>Options</span>
                <select>
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </FormItem>
            <form ref={form} className="needs-validation" noValidate onSubmit={onSubmit}>

                <FormItem label="Apellido"
                    invalidFeedback={<Feedback message="Errror" type="error" />}
                >
                    <Icon name="circle" />
                    <input required />
                    <button>Link</button>
                </FormItem>
                <button className="btn btn-primary" type="submit">Submit form</button>
            </form>


        </div>
    )
}
