import mathIcon from "../../../../assets/images/design-tool.png";
import engIcon from "../../../../assets/images/alphabet.png";
import brainIcon from "../../../../assets/images/brain.png";
import coIcon from "../../../../assets/images/artist.png";
import examIcon from "../../../../assets/images/ancient-scroll.png";
import { v4 as uuid } from "uuid";

export const SubjectData = [
  {
    title: "Mathematics",
    image: mathIcon,
    key: uuid(),
  },
  {
    title: "English",
    image: engIcon,
    key: uuid(),
  },
  {
    title: "Brain-gym",
    image: brainIcon,
    key: uuid(),
  },
  {
    title: "Co-curricular",
    image: coIcon,
    key: uuid(),
  },
  {
    title: "Exams",
    image: examIcon,
    key: uuid(),
  },
];
