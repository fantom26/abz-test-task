import { mixed, number, object, string } from "yup";
import { checkFileResolution, checkIfFilesAreCorrectType, checkIfFilesAreTooBig } from "utils/helpers";

export const UserObject = object({
  name: string().min(2, "Name should be 2-60 characters").max(60, "Name should be 2-60 characters").required(),
  email: string()
    .matches(
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
      "Email must be a valid email according to RFC2822"
    )
    .required(),
  phone: string()
    .min(13)
    .max(13)
    .matches(/^[+380]/g, "Phone must start +380")
    .matches(/^[+]{0,1}380([0-9]{9})$/, "Phone isn't valid. Example +380XXXXXXXXX")
    .required(),
  // eslint-disable-next-line camelcase
  position_id: number().required(),
  photo: mixed()
    .required("You need to provide a file")
    .test("is-big-file", "Size must not exceed 5MB", checkIfFilesAreTooBig)
    .test("is-resolution-correct", "Resolution at least 70x70px", checkFileResolution)
    .test("is-correct-type", "User photo should be jpg/jpeg image", checkIfFilesAreCorrectType)
});

export type UserSchema = ReturnType<typeof UserObject.validateSync>;
