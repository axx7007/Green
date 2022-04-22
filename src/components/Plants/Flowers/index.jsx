import React, { useContext, useState } from "react";
import ReactPaginate from "react-paginate";
import {
  Cards,
  Container,
  Header,
  Paginations,
  TypeWrapper,
  Wrapper,
} from "./style";
import "./style.css";
import { type } from "../../../mock/type";
import { Flower } from "../../../context/flowers";
import Card from "./Card";
import { data } from "../../../mock/data";
const Flowers = () => {
  const [users, setUsers] = useContext(Flower);
  // console.log(data, "user");
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 9;
  const PageVisited = pageNumber * usersPerPage;
  const displayUsers = users
    .slice(PageVisited, PageVisited + usersPerPage)
    .map((value) => {
      return <Card key={value.id} data={value} />;
    });
  var pageCount = Math.ceil(users.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const onType = (typeTitle) => {
    if (typeTitle == "All Plants") {
      setUsers(data);
    } else {
      var typed = data.filter((value) => value.type === typeTitle);
      setUsers(typed);
    }
  };
  return (
    <Container>
      <Header>
        {type.map((value) => {
          return (
            <TypeWrapper key={value.id} onClick={() => onType(value.title)}>
              <Header.Title>{value.title}</Header.Title>
            </TypeWrapper>
          );
        })}
      </Header>
      <Cards>{displayUsers}</Cards>
      <Wrapper>
        <ReactPaginate
          previousLabel={"<"}
          nextLabel={">"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBtns"}
          previousLinkClassName={"previousBtn"}
          nextLinkClassName={"nextBtn"}
          disabledClassName={"paginationDisabled"}
          // activeClassName={paginationActive}
        />
      </Wrapper>
      {/* <Paginations defaultCurrent={1} total={50} /> */}
    </Container>
  );
};
export default Flowers;
