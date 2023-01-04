import { useFormik } from "formik";
import HomePageAvatar from "../HomePageAvatar";
import HomePageInfoField from "../HomePageInfoField";
import {
	FormInfoContainer,
	InfoContainer,
	PersonalInfoTitle,
	Wrapper,
} from "./styles";

export default function HomePageContent() {
	const initialValues = { firstName: "", lastName: "", major: "" };
	const formik = useFormik({
		initialValues,
		onSubmit:()=>{

		}
	});

	return (
		<Wrapper>
			<InfoContainer>
				<HomePageAvatar />
			</InfoContainer>

			<FormInfoContainer>
				<PersonalInfoTitle>#Thông tin cá nhân</PersonalInfoTitle>
			</FormInfoContainer>

			{/*<HomePageInfoField value="" onChange={onChange}/>*/}
		</Wrapper>
	);
}
