import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Share
        <br className="max-md:visible" />
        <span className="orange_gradient text-center">AI-Powered Prompt</span>
      </h1>
      <p className="desc text-center">
        After the prompts, create-next-app will create a folder with your
        project name and install the required dependencies.
      </p>

      <Feed />
    </section>
  );
};

export default Home;
