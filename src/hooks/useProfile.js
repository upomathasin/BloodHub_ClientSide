import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthContextProvider/AuthContextProvider";
import { useQuery } from "react-query";

export function useProfile(email) {
  const { user } = useContext(AuthContext);
  const {
    data: userProfile,
    refetch,
    isPending,
    error,
  } = useQuery({
    queryKey: [email],
    queryFn: async () =>
      await fetch(`http://localhost:5000/users/${email}`).then((res) =>
        res.json()
      ),
  });
  return [userProfile, refetch, isPending, error];
}
