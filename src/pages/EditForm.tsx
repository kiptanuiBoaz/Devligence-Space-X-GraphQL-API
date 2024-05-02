import { useState, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./edit-form.scss";
import { useNavigate } from "react-router-dom";
import { DangerBtn } from "../components/danger-btn/DangerBtn";
import { ActionBtn } from "../components";
import { Confirm, Notify } from "notiflix";
import { RESET_JOKE, selectEditingId, selectJoke } from "../redux/dataSlice";

const EditForm = () => {
    const existingJoke = useSelector(selectJoke);
    const editingId = useSelector(selectEditingId);
    const [joke, setJoke] = useState({ ...existingJoke });//initial state from redux store

    const dispatch = useDispatch();
    const navigate = useNavigate();

    //handle formData change
    const handleInputChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setJoke((prevJoke) => ({
            ...prevJoke,
            [name]: value,
        }));
    };


    const handleSubmit = async () => {
        //simulating post request
        // const res = await api({
        //   method: editingId === "editing" ? "PUT" : "POST",
        //   url: editingId === "editing" ? `${EDIT_JOKE}/${existingJoke.id}` : ADD_JOKE,
        //   data: joke
        // });
        // console.log(res)

        dispatch(RESET_JOKE());
        navigate("/");
        Notify.success('Succesfully submitted your joke');

    };

    //delete joke

    const deleteJoke = async () => {
        // simulating delete action
        // const res = await api.delete(`${EDIT_JOKE}/${existingJoke.id}`);

        dispatch(RESET_JOKE());
        navigate("/");
        Notify.info('Succesfully deleted joke');
    }

    //show deleteconfirmation modal
    const handleDelete = () => {
        Confirm.show(
            'Want to delete this joke?',
            'This can’t be undone, your joke will be removed permanently',
            "Proceed",
            'Cancel',
            () => { deleteJoke() },
            () => { },
            {
                okButtonBackground: " #097ea5",
                titleColor: "#097ea5",
                borderRadius: "15px",
                distance: "20px",
                cssAnimationStyle: "zoom",
                buttonsFontSize: "17px",
                titleFontSize: "18px"
            }
        );
    }

    return (
        <div className="edit-form">
            <h2 className="page-title">{joke.title ? 'Edit Joke' : 'Add Joke'}</h2>
            <form >

                <label
                    className="title-label"
                    htmlFor="title">
                    Title:
                </label>
                <br />
                <input
                    className="title-input"
                    type="text"
                    name="title"
                    value={joke.title}
                    onChange={handleInputChange}
                    required
                />
                <br />

                <label
                    className="body-label"
                    htmlFor="body"
                >
                    Body:
                </label>
                <br />
                <textarea
                    className="body-input"
                    name="body"
                    rows={6}
                    cols={5}
                    value={joke.body}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) => handleInputChange(e)}
                    required
                />
                <br />

                <ActionBtn clickHandler={handleSubmit}>{editingId === "editing" ? 'Save' : 'Add'}</ActionBtn>
                {editingId === "editing" && <DangerBtn clickHandler={handleDelete}>Delete</DangerBtn>}

            </form>
        </div>
    )
}

export default EditForm