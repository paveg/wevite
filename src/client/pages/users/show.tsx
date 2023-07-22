import { FC } from "react";
import { useUsersIndex, useUsersShow } from "../../apis/generated";
import { useParams } from "react-router-dom";

export const UserDetailPage: FC = () => {
  let { id } = useParams();
  const { isLoading, error, data } = useUsersShow(id as number);
  let user: User = {};

  if (!isLoading) {
    user = data.data;
  }

  return(
    <>id: {user?.id} | name: {user?.name}</>
  )
}
