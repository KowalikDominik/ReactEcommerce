import React from "react";
import { useSelector } from "react-redux";
import { collectionStatus } from "../../store/collection/collection.selectors";
import { withSpinner } from "../withSpinner/withSpinner";
import { CollectionOverview } from "./CollectionOverview";

export const CollectionOverviewContainer: React.FC = () => {
  const status = useSelector(collectionStatus);
  const Container = withSpinner(CollectionOverview, {
    isLoading: status === "loading",
  });

  return <Container />;
};
