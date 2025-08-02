import "./Form.css";

export default function Form() {
    return (
        <form className="c-form">
            <div className="c-form__input">
                <label htmlFor="name" className="c-form__label">name</label>
                <input type="text" id="name" className="c-form__field" placeholder="Enter your name" autoComplete="off" />
            </div>

            <div className="c-form__input">
                <label htmlFor="phoneNumber" className="c-form__label">phone number</label>
                <input type="text" id="phoneNumber" className="c-form__field" placeholder="Enter your phone number" autoComplete="off" />
            </div>

            <div className="c-form__input">
                <label htmlFor="age" className="c-form__label">age</label>
                <input type="number" id="age" className="c-form__field" placeholder="Enter your age" autoComplete="off" />
            </div>

            <div className="c-form__input is-checkbox">
                <label htmlFor="employee" className="c-form__label">Are you employee?</label>
                <input type="checkbox" id="employee" className="c-form__field" />
            </div>

            <div className="c-form__input is-select">
                <label htmlFor="salary" className="c-form__label">salary</label>

                <select name="salary" id="salary" className="c-form__field">
                    <option selected="selected" value="less">less than 500$</option>
                    <option value="actual">equal to 500$</option>
                    <option value="more">more than 500$</option>
                </select>
            </div>

            <button type="submit" className="c-form__button is-disabled">submit</button>
        </form>
    );
}
