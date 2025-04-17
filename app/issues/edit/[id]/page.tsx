import { prisma } from "@/prisma/client";
import { notFound } from "next/navigation";
import IssueEditForm from "./IssueEditForm";

const EditIssuePage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt((await params).id) },
  });

  if (!issue) notFound();

  return <IssueEditForm issue={issue} />;
};

export default EditIssuePage;
