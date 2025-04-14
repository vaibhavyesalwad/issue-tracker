import { Box } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingNewIssuePage = () => {
  return (
    <Box className="prose">
      <Skeleton />
      <Skeleton height="25rem" />
    </Box>
  );
};

export default LoadingNewIssuePage;
