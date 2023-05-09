import axios from "axios";
import { showAlert } from "./alerts";

export const signup = async(data) => {
    try {
        const res = await axios({
            method: "POST",
            url: "http://127.0.0.1:3000/api/v1/auth/signup",
            data,
        });

        if (res.data.status === "success") {
            showAlert("success", "Account created in successfully!");
            window.setTimeout(() => {
                location.assign("/login");
            }, 1500);
        }
    } catch (err) {
        showAlert("error", err.response.data.message);
    }
};