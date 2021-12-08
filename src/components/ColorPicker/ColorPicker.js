import './ColorPicker.css';

const ColorPicker = () => {
    return (
        <div className="colorPicker">
            <h4>Elija el color:</h4>
            <div className="colorInputs">
                <label htmlFor="colorRed" className="colors">
                    <input
                        type="radio"
                        name="chooseColor"
                        className="red inputHidden"
                        id="colorRed"
                    />
                    <div className="colorRed"></div>
                    Rojo
                </label>
                <label htmlFor="colorBlue" className="colors">
                    <input
                        type="radio"
                        name="chooseColor"
                        className="blue inputHidden"
                        id="colorBlue"
                    />
                    <div className="colorBlue"></div>
                    Azul
                </label>
                <label htmlFor="colorBlack" className="colors">
                    <input
                        type="radio"
                        name="chooseColor"
                        className="black inputHidden"
                        id="colorBlack"
                    />
                    <div className="colorBlack"></div>
                    Negro
                </label>
            </div>
        </div>
    );
};

export default ColorPicker;
