import { ReactElement, useState } from "react";
import { Wrapper } from "./ui/Wrapper";
import { greenActiveButton, greyInactiveButton } from "./ui/colourLibrary";
import { LargeButton } from "./ui/LargeButton";
import { StyledForm } from "./ui/StyledForm";
import { PageHeader } from "./ui/PageHeader";
import { FormLabel } from "./ui/FormLabel";
import { FormGroup } from "./ui/FormGroup";
import { FormControl } from "./ui/FormControl";
import { Store } from "./types";

export function UpdateStore(props: {
  onUpdateStoreSuccess: () => void;
  onBackClick: () => void;
  storeDetails?: Store;
}): ReactElement {
  const [errorMessage, setErrorMessage] = useState("");
  const { onUpdateStoreSuccess, onBackClick, storeDetails } = props;

  const [displayName, setdisplayName] = useState(storeDetails?.displayName);
  const [fullName, setFullName] = useState(storeDetails?.fullName);
  const [suburb, setSuburb] = useState(storeDetails?.suburb);
  return (
    <Wrapper>
      <PageHeader>{storeDetails?.displayName.toUpperCase()}</PageHeader>
      <div>
        <StyledForm>
          <FormGroup>
            <FormLabel>Display name</FormLabel>
            <FormControl
              type="text"
              placeholder="enter display name of store"
              value={displayName}
              onChange={setdisplayName}
            />
          </FormGroup>

          <FormGroup>
            <FormLabel>Full name</FormLabel>

            <FormControl
              type="text"
              placeholder="enter full name of store"
              value={fullName}
              onChange={setFullName}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel>Suburb</FormLabel>

            <FormControl
              type="text"
              placeholder="enter suburb"
              value={suburb}
              onChange={setSuburb}
            />
          </FormGroup>
        </StyledForm>
      </div>
      {errorMessage}

      <div>
        <LargeButton onClick={onBackClick} backgroundColor={greyInactiveButton}>
          Cancel
        </LargeButton>
        <LargeButton
          onClick={() => {
            if (displayName === "") {
              return setErrorMessage("Display name cannot be empty");
            }
            if (fullName === "") {
              return setErrorMessage("Full name cannot be empty");
            }
            if (suburb === "") {
              return setErrorMessage("Suburb cannot be empty");
            }
            onUpdateStoreSuccess();
          }}
          backgroundColor={greenActiveButton}
        >
          Update
        </LargeButton>
      </div>
    </Wrapper>
  );
}