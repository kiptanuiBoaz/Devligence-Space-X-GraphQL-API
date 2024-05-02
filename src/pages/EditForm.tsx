/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./edit-form.scss";
import { useNavigate } from "react-router-dom";
import { Confirm, Notify } from "notiflix";
import { RESET_LAUNCH, selectEditingId, selectLaunch, UPDATE_LAUNCH } from "../redux/lauchSlice";

const EditForm = () => {
    const existingLaunch = useSelector(selectLaunch);
    const editingId = useSelector(selectEditingId);
    const [launch, setLaunch] = useState({ ...existingLaunch });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setLaunch(prevLaunch => ({
            ...prevLaunch,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        dispatch(UPDATE_LAUNCH({ launch, editingId }));
        dispatch(RESET_LAUNCH());
        navigate("/");
        Notify.success('Successfully submitted your launch');
    };

    const handleDelete = () => {
        Confirm.show(
            'Want to delete this launch?',
            'This can’t be undone, your launch will be removed permanently',
            "Proceed",
            'Cancel',
            () => { deleteLaunch() },
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
    };

    const deleteLaunch = () => {
        // Simulate delete action
        // dispatch(DELETE_LAUNCH({ launchId: launch.id }));
        dispatch(RESET_LAUNCH());
        navigate("/");
        Notify.info('Successfully deleted launch');
    };

    return (
        <div className="edit-form">
            <h2 className="page-title">{existingLaunch?.mission_name ? 'Edit Launch' : 'Add Launch'}</h2>
            <form>
                <label htmlFor="mission_name">Mission Name:</label>
                <input
                    type="text"
                    id="mission_name"
                    name="mission_name"
                    value={launch.mission_name}
                    onChange={handleInputChange}
                    required
                />
                <label htmlFor="rocket_name">Rocket Name:</label>
                <input
                    type="text"
                    id="rocket_name"
                    name="rocket_name"
                    value={launch.rocket?.rocket_name ?? ""}
                    onChange={handleInputChange}
                />
                <label htmlFor="site_name">Launch Site Name:</label>
                <input
                    type="text"
                    id="site_name"
                    name="site_name"
                    value={launch.launch_site?.site_name ?? ""}
                    onChange={handleInputChange}
                />
                <label htmlFor="launch_success">Launch Success:</label>
                <select
                    id="launch_success"
                    name="launch_success"
                    value={launch.launch_success?.toString() ?? ""}
                    onChange={handleInputChange}
                >
                    <option value="">Select</option>
                    <option value="true">Success</option>
                    <option value="false">Failure</option>
                </select>
                <br />
                <button type="button" onClick={handleSubmit}>{editingId === "editing" ? 'Save' : 'Add'}</button>
                {editingId === "editing" && <button type="button" onClick={handleDelete}>Delete</button>}
            </form>
        </div>
    );
};

export default EditForm;
