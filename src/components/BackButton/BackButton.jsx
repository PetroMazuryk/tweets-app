import { ImArrowLeft } from "react-icons/im";
import { BtnBack, TextArrow } from "./BackButton.module";

export const BackButton = () => {
  return (
    <BtnBack>
      <TextArrow>
        <ImArrowLeft />
      </TextArrow>
      Go Back
    </BtnBack>
  );
};
