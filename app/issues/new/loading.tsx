import { Box } from "@radix-ui/themes";
import { Skeleton } from "@/app/components";

const LoadingNewIssuePage = () => {
  return (
    <Box className="prose">
      <Skeleton />
      <Skeleton height="25rem" />
    </Box>
  );
};

export default LoadingNewIssuePage;
