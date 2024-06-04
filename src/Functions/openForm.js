import { useState } from "react"

export const openForm = () => {
	const[showForm, setShowForm] = useState(false);

    const handleClick = () =>{
        setShowForm(true);
    };

    return(
        <div>
            <div onClick={handleClick}>Clique para mostrar o formulário</div>
            {showForm && (
                <form>
                    <label>
                        Nome:
                        <input type="text" />
                    </label>
                    <label>
                        Email:
                        <input type="email" />
                    </label>
                    <button type="submit">Enviar</button>
                </form>
            )}
        </div>
    );

}

export default openForm;


 