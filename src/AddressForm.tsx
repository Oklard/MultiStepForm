import { FormWarapper } from "./FormWrapper";

type AddresData = {
  street: string;
  city: string;
  state: string;
  zip: string;
};
type AddresFormProps = AddresData & {
  updateFields: (fields: Partial<AddresData>) => void;
};

export function AddressForm({
  street,
  city,
  state,
  zip,
  updateFields,
}: AddresFormProps) {
  return (
    <FormWarapper title={"Addres"}>
      <label>Street</label>
      <input
        autoFocus
        required
        type="text"
        value={street}
        onChange={(e) => updateFields({ street: e.target.value })}
      />

      <label htmlFor="">City</label>
      <input
        required
        type="text"
        value={city}
        onChange={(e) => updateFields({ city: e.target.value })}
      />

      <label htmlFor="">State</label>
      <input
        required
        type="text"
        value={state}
        onChange={(e) => updateFields({ state: e.target.value })}
      />

      <label htmlFor="">Zip</label>
      <input
        required
        type="text"
        value={zip}
        onChange={(e) => updateFields({ zip: e.target.value })}
      />
    </FormWarapper>
  );
}
