import { Gallery } from "./components/Gallery";
import { Content } from "./components/Content";
//import { TextVerified } from "../../components/TextVerified";
//import { replaceList } from "../../const/const";

export const HomePage = () => {

  return (
    <>
      <Gallery />
      <Content />
      {/* <TextVerified replaceList={replaceList} /> */}
    </>
  )
}
