import React from "react";
import { useSelector } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router";
import { withSpinner } from "../../components/withSpinner/withSpinner";
import { collectionStatus } from "../../store/collection/collection.selectors";
import { SearchPage } from "./SearchPage";

interface Props extends RouteComponentProps {}

const SearchPageContainer: React.FC<Props> = (props) => {
  const status = useSelector(collectionStatus);
  const Container = withSpinner(SearchPage, {
    isLoading: status !== "succeeded",
  });

  return <Container {...props} />;
};

export default withRouter(SearchPageContainer);
