import axios from "axios";

export const checkEmailExists = async (email) => {
	try {
		const res = await axios.post(`/api/waitingList/`, { email });
		return res.data;
	} catch (error) {
		console.log(error.message);
	}
};
