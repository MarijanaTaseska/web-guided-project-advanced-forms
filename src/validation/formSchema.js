// Here goes the schema for the form
import * as yup from "yup"
const formSchema = yup.object().shape({
username:yup
.string()
.trim()
.required("Username is required")
.min(3,"Username must be at least 3 characters long!"),
email:yup
.string()
.email("Must be a valid email address")
.required("Must be an email"),
role:yup
.string()
.oneOf(["instructor","student", "alumni"], "Role is required!"),
civil:yup
.string()
.oneOf(["married","single"], "Civil status is required"),
coding:yup.boolean(),
reading:yup.boolean(),
hiking:yup.boolean()
})

export default formSchema