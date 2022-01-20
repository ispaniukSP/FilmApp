import * as Yup from "yup"

export const editSchema = Yup.object({
    title: Yup.string()
    .min(3, "Must be more then 3 elemtents")
    .required("Important field")
})