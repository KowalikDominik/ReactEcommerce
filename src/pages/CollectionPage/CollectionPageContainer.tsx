import React from "react";
import { useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { withSpinner } from "../../components/withSpinner/withSpinner";
import { collectionStatus } from "../../store/collection/collection.selectors";
import { CollectionPage } from "./CollectionPage";

type MatchParams = {
  collectionId: string;
};
interface Props extends RouteComponentProps<MatchParams> {}

export const CollectionPageContainer: React.FC<Props> = (props) => {
  const status = useSelector(collectionStatus);
  const Container = withSpinner(CollectionPage, {
    isLoading: status !== "succeeded",
  });
  return (
    <Container collectionId={props.match.params.collectionId} {...props} />
  );
};
