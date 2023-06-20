import { FormWarapper } from "./FormWrapper";

type AccountData = {
  email: string;
  password: string;
};

type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};
export function AccountForm({
  email,
  password,
  updateFields,
}: AccountFormProps) {
  return (
    <FormWarapper title={"Account"}>
      <label htmlFor="">Email</label>
      <input
        autoFocus
        required
        type="email"
        value={localStorage.getItem("email") ?? email}
        onChange={(e) => {
          localStorage.setItem("email", e.target.value);
          updateFields({ email: e.target.value });
        }}
      />

      <label htmlFor="">Password</label>
      <input
        required
        type="password"
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </FormWarapper>
  );
}
