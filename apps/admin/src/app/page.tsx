import { Button } from "@repo/shared/src";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Button size="lg" color="dark">
        button
      </Button>
      <Button size="md" color="dark">
        button
      </Button>
      <Button size="sm" color="light">
        수정
      </Button>
      <Button size="md-short" color="light">
        button
      </Button>
    </div>
  );
};

export default Home;
