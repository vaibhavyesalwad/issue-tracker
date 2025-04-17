import { Pencil2Icon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const DeleteIssueButton = ({ IssueId }: { IssueId: number }) => {
  return <Button color="red">Delete Issue</Button>;
};

export default DeleteIssueButton;
