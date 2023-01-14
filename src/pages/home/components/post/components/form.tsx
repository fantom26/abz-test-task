import { FC } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "components/form";
import { Button, Typography } from "components/ui";
import { useAppSelector, useDispatchedActions, useRequest, useTranslation } from "hooks";
import { useForm } from "react-hook-form";
import { UsersService } from "services";
import { getAccesses, getAllPositons } from "store/selectors";
import { UserObject, UserSchema } from "utils/schemas";

export const PostForm: FC = () => {
  const t = useTranslation();

  const { positions } = useAppSelector(getAllPositons);

  const { token } = useAppSelector(getAccesses);
  const { resetStoreUsers } = useDispatchedActions();

  const { handleRequest } = useRequest();
  // **Form
  const methods = useForm<UserSchema>({
    mode: "onChange",
    resolver: yupResolver(UserObject)
  });

  const {
    handleSubmit,
    formState: { isSubmitting, isValid },
    reset
  } = methods;

  const convertToBase64 = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      methods.setValue("photo", reader.result?.toString());
    };

    reader.readAsDataURL(file);
  };

  const onSubmit = handleRequest(async (data: UserSchema) => {
    const formData = new FormData();
    for (const [key, value] of Object.entries(data)) {
      formData.append(key, value);
    }
    formData.set("photo", data.photo[0]);

    if (data.photo.length > 0) {
      data.photo = convertToBase64(data.photo[0]);
    }

    const response = await UsersService.addUser(formData, token);

    if (response.status <= 200 && response.status > 299) {
      throw new Error();
    }

    reset();
    resetStoreUsers();
  });

  return (
    <Form methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <div className="post__form">
        <Form.Input name="name" placeholder={t.forms.name.placeholder} />
        <Form.Input name="email" placeholder={t.forms.email.placeholder} />
        <Form.Input name="phone" placeholder={t.forms.phone.placeholder} helperText="+38 (XXX) XXX - XX - XX" />
        <div className="post__radio-group">
          <Typography tag="p">Select your position</Typography>
          {positions?.map((btn) => (
            <Form.Radio key={btn.id} label={btn.name} name="position_id" value={btn.id} />
          ))}
        </div>
        <Form.FileUpload name="photo" />
        <Button className="post__form-btn" type="submit" isLoading={isSubmitting || !isValid}>
          {t.navigation.signUp}
        </Button>
      </div>
    </Form>
  );
};
