import { FormWarapper } from "./FormWrapper";

type UserData = {
  firstName: string;
  lastName: string;
  age: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export function UserForm({
  firstName,
  lastName,
  age,
  updateFields,
}: UserFormProps) {
  return (
    <FormWarapper title={"User Details"}>
      <label htmlFor="">First Name</label>
      <input
        type="text"
        autoFocus
        required
        value={firstName}
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />

      <label>Last Name</label>
      <input
        type="text"
        required
        value={lastName}
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />

      <label>Age</label>
      <input
        required
        min={1}
        type="number"
        value={age}
        onChange={(e) => updateFields({ age: e.target.value })}
      />
    </FormWarapper>
  );
}
