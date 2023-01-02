import cookies from "../../utils/cookies";

const getAuthString = () => `Bearer ${cookies.access.get()}`;

export default getAuthString;
