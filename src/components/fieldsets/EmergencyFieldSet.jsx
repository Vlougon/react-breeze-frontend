import { useContext } from "react"
import { FormContext } from "../../context/FormContext";

export default function EmergencyFieldSet({ FM, setFM }) {
    const { callData } = useContext(FormContext);
    const { handleCallChange } = useContext(FormContext);

    const handle112 = () => {
        setFM({
            ...FM,
            render: true,
            message: '¡Enviada Descripción al 112!',
            type: 'success',
        });
    }

    return (
        <fieldset>
            <legend>112</legend>
            <div className="row g-3">
                <div className='col-12'>
                    <label htmlFor="description" className="form-label">Descripción:</label>
                    <div className='input-group'>
                        <span className='input-group-text' id='description112'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                            </svg>
                        </span>
                        <textarea id="description" name="description" value={callData['description']} className="form-control" onChange={handleCallChange}></textarea>
                        <input className='btn btn-primary' type="button" value="Enviar al 112" onClick={handle112} />
                    </div>
                </div>

                <div className='col-12 text-center'>
                    <button type="button" name="contacted_112" className='btn btn-primary' value={true} onClick={handleCallChange}>Contactar con el 112</button>
                </div>
            </div>
        </fieldset>
    )
}