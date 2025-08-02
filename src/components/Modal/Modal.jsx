import "./Modal.css";

export default function Modal() {
    return (
        <div className="c-modal">
            <div className="c-modal__content">
                <p className="c-modal__text is-danger">Sorry! Your age is not allowed.</p>
            </div>
        </div>
    );
}