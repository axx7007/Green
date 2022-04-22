import React, { useContext, useState } from "react";
import SuperSale from "../../../assets/imgs/SuperSale.png";
import bgImage from "../../../assets/imgs/bgImage.png";
import {
  Container,
  Sidebar,
  Wrapper,
  Range,
  Price,
  FootImg,
  End,
  BgImage,
} from "./style";
import { category } from "../../../mock/category";
import { Flower } from "../../../context/flowers";
import { data } from "../../../mock/data";
import { Footer } from "antd/lib/layout/layout";
import { size } from "../../../mock/size";
const Category = () => {
  const [context, setContext] = useContext(Flower);
  const [range, setRange] = useState(0);
  const onFilter = (cat) => {
    if (cat == "All") {
      setContext(data);
    } else {
      var filtered = data.filter((value) => value.category == cat);
      setContext(filtered);
    }
  };
  const onRange = (e) => {
    setRange(e.target.value);
    var priced = data.filter((value) => value.price <= range);
    setContext(priced);
  };
  const onSize = (filterName) => {
    var sized = data.filter((value) => value.size === filterName);
    setContext(sized);
  };
  return (
    <Sidebar>
      <Container>
        <Container.Title>Category</Container.Title>
        {category.map((value) => {
          return (
            <Wrapper key={value.id} onClick={() => onFilter(value.name)}>
              <Wrapper.Name>{value.name}</Wrapper.Name>
              <Wrapper.Name>({value.much})</Wrapper.Name>
            </Wrapper>
          );
        })}
        <Container.Title price>Price Range</Container.Title>
        <Range type={"range"} min={0} max={1230} onChange={onRange} />
        <Price>
          Price : <span style={{ color: "#46A358" }}>${range}-$1230</span>
        </Price>
        <Container.Title price>Size</Container.Title>

        {size.map((value) => {
          return (
            <Wrapper key={value.id} onClick={() => onSize(value.title)}>
              <Wrapper.Name>{value.title}</Wrapper.Name>
              <Wrapper.Name>({value.count})</Wrapper.Name>
            </Wrapper>
          );
        })}
      </Container>
      <End>
        <FootImg src={SuperSale} />
        <End.Title>UPP TO 75% OFF</End.Title>
        <BgImage src={bgImage} />
      </End>
    </Sidebar>
  );
};
export default Category;
