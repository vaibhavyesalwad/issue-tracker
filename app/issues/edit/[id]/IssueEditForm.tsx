"use client";
import { Issue } from "@/app/generated/prisma";
import dynamic from "next/dynamic";
import IssueFormSkeleton from "./loading";

const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});
const IssueEditForm = ({ issue }: { issue: Issue }) => {
  return <IssueForm issue={issue} />;
};

export default IssueEditForm;
